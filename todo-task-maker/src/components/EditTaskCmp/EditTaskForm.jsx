import React from 'react';
import { useForm } from 'react-hook-form';
import { updateTaskInfo } from '../../API/editTask';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const EditTaskForm = ({ taskForEdit }) => {
    const { register, handleSubmit, setValue } = useForm();
   const nevigate = useNavigate();
    React.useEffect(() => {
        if (taskForEdit) {
            setValue('email', taskForEdit.email || '');
            setValue('title', taskForEdit.title || '');
            setValue('description', taskForEdit.description || '');
            setValue('deadline', taskForEdit.deadline || '');
            setValue('priority', taskForEdit.priority || 'low');
        }
    }, [taskForEdit, setValue]);

    const onSubmit = async (data) => {
        try {
          // Call your update operation using updateProductInfo
          const result = await updateTaskInfo(taskForEdit._id, data);
    
          // Check if the update was successful
          if (result && result.modifiedCount > 0) {
            toast.success(`${taskForEdit.title} has been updated`);
            nevigate('/dashboard/to-do-list')
          } else {
            throw new Error(`Failed to update ${taskForEdit.title}`);
          }
        } catch (error) {
          console.error('Error in onSubmit:', error);
    
          // Show an error toast
          toast.error(error.message || 'Error updating task. Please try again.');
        }
      };

    return (
        <div className="mb-4 w-8/12 mx-auto">
            <h2 className="text-lg font-semibold mb-2">Edit Task</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                        User Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        {...register('email', {})}
                        defaultValue={taskForEdit ? taskForEdit.email : ''}
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
                        defaultValue={taskForEdit ? taskForEdit.title : ''}
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
                        defaultValue={taskForEdit ? taskForEdit.description : ''}
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
                        defaultValue={taskForEdit ? taskForEdit.deadline : ''}
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
                        defaultValue={taskForEdit ? taskForEdit.priority : ''}
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
                    Update Task
                </button>
            </form>
        </div>
    );
};

export default EditTaskForm;
