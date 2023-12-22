import TaskItem from "./TaskItem";


const TaskCategory  = ({ tasks, status, onDrop,refetch }) => {
    return (
        <div>
        <h2>{status}</h2>
        <div>
          {tasks.map((task) => (
            <TaskItem key={task._id} refetch={refetch} task={task} onDrop={() => onDrop(task._id, status)} />
          ))}
        </div>
      </div>

    );
};

export default TaskCategory ;