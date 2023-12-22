
import { useDrag } from 'react-dnd';

const TaskItem = ({ task, onDrop }) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'TASK',
    item: { taskId: task._id, status: task.status }, 
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      style={{ opacity: isDragging ? 0.5 : 1 }}
      className="task-item"
    >
      {task.title}
    </div>
  );
};

export default TaskItem;

