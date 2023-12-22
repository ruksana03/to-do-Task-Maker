import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
import { deleteSingleTask } from '../../API/deleteTask';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { useDrag } from 'react-dnd';

const ToDoCard = ({ task, refetch, onDrop  }) => {

    const [{ isDragging }, drag] = useDrag({
        type: 'TASK',
        item: { id: task._id },
        collect: (monitor) => ({
          isDragging: !!monitor.isDragging(),
        }),
      });
    

    const handleDelete = async () => {
        const result = await Swal.fire({
            title: 'Are you sure?',
            text: 'You won\'t be able to revert this!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        });

        if (result.isConfirmed) {
            try {

                const result = await deleteSingleTask(task._id);

                if (result.deletedCount > 0) {
                    refetch();
                    toast.success(`${task.title} has been deleted`)

                } else {
                    throw new Error(`Failed to delete ${task.title}`);
                }
            } catch (error) {
                console.error('Error in handleDelete:', error);
                toast.error(error.message || 'Error deleting task. Please try again.');
            }
        }
    };


    return (
        <div   ref={drag}
        className={`border p-2 ${isDragging ? 'opacity-50' : ''}`}>
            <h1>{task.title}</h1>
            <p>{task.description}</p>
            <h1>{task.deadline}</h1>
            <p>{task.priority}</p>
            <Link to={`/dashboard/editTask/${task._id}`}> <button className="border mx-2 p-2">Edit</button></Link>
            <button className="border p-2" onClick={handleDelete}>
                Delete
            </button>
        </div>
    );
};

export default ToDoCard;
