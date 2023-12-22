
import axios from 'axios';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

// const TaskForm = ({ onAddTask }) => {
const TaskForm = () => {
  const { user } = useAuth();
  const nevigate = useNavigate();

  const { register, handleSubmit, reset } = useForm();



  const onSubmit = async data => {
    try {
      const response = await axios.post('https://todo-task-maker-server.vercel.app/tasks', data);
      // onAddTask(response.data);
      console.log(response)
      if (response.status === 200) {
        toast.success('Task added successfully');
        reset();
        nevigate("/dashboard/to-do-list")
      } else {
        toast.error('Failed to add task');
      }

    } catch (error) {
      console.error('Error saving task:', error);
    }
  };

  return (
    <div className="mb-4 w-8/12 mx-auto">
      <h2 className="text-lg font-semibold mb-2">Add New Task</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* <form> */}
        <div className="mb-2">
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">
            User Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            {...register('email', {})}
            defaultValue={user.email}
            readOnly
            className="mt-1 p-2 border rounded w-full"
          />
        </div>

        <div className="mb-2">
          <label htmlFor="title" className="block text-sm font-medium text-gray-600">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            {...register('title', { required: 'Title is required' })}
            className="mt-1 p-2 border rounded w-full"
          />
        </div>

        <div className="mb-2">
          <label htmlFor="description" className="block text-sm font-medium text-gray-600">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            {...register('description')}
            className="mt-1 p-2 border rounded w-full"
          />
        </div>

        <div className="mb-2">
          <label htmlFor="deadline" className="block text-sm font-medium text-gray-600">
            Deadline
          </label>
          <input
            type="date"
            id="deadline"
            name="deadline"
            {...register('deadline')}
            className="mt-1 p-2 border rounded w-full"
          />
        </div>

        <div className="mb-2">
          <label htmlFor="priority" className="block text-sm font-medium text-gray-600">
            Priority
          </label>
          <select
            id="priority"
            name="priority"
            {...register('priority')}
            className="mt-1 p-2 border rounded w-full"
          >
            <option value="low">Low</option>
            <option value="moderate">Moderate</option>
            <option value="high">High</option>
          </select>
        </div>

       <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
