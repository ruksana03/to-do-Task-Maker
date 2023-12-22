// TaskList.js
import { useDrop } from 'react-dnd';
import TaskItem from './TaskItem';

const TaskList = ({ title, tasks, onDrop }) => {
  const [{ isOver }, drop] = useDrop({
    accept: 'TASK',
    drop: (item) => onDrop(item.id, title),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div ref={drop} className={`task-list ${isOver ? 'over' : ''}`}>
      <h2>{title}</h2>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
