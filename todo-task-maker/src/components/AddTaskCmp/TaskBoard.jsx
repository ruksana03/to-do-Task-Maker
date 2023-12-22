// TaskBoard.js
import { useState } from 'react';
import TaskList from './TaskList';

const TaskBoard = () => {
  const [tasks, setTasks] = useState({
    'to-do': [{ id: 1, title: 'Task 1', status: 'to-do' }],
    'ongoing': [{ id: 2, title: 'Task 2', status: 'ongoing' }],
    'completed': [{ id: 3, title: 'Task 3', status: 'completed' }],
  });

  const handleDrop = (taskId, newStatus) => {
    // Handle the logic to update task status
    // You need to update the tasks state accordingly
    console.log(`Task ${taskId} moved to ${newStatus}`);
  };

  return (
    <div className="task-board">
      <TaskList title="To-Do" tasks={tasks['to-do']} onDrop={handleDrop} />
      <TaskList title="Ongoing" tasks={tasks['ongoing']} onDrop={handleDrop} />
      <TaskList title="Completed" tasks={tasks['completed']} onDrop={handleDrop} />
    </div>
  );
};

export default TaskBoard;
