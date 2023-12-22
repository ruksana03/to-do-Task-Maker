import { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import useUserTask from "../../Hooks/useUserTask";
import TaskItem from "../../components/ToDoListCmp/TaskItem";
import ToDoCard from "../../components/ToDoListCmp/ToDoCard";
import { useDrop } from "react-dnd";



const ToDoList = () => {
    const { user } = useAuth();
    const { userTasks, loading, refetch } = useUserTask(user?.email);


    const [tasks, setTasks] = useState({
        'To-Do': [],
        'On-Going': [],
        'Completed': [],
    });

    const [, dropToDo] = useDrop({
        accept: 'TASK',
        drop: (item) => handleDrop(item.id, 'To-Do'),
    });

    const [, dropOnGoing] = useDrop({
        accept: 'TASK',
        drop: (item) => handleDrop(item.id, 'On-Going'),
    });

    const [, dropCompleted] = useDrop({
        accept: 'TASK',
        drop: (item) => handleDrop(item.id, 'Completed'),
    });

    const handleDrop = (taskId, status) => {
        const updatedTasks = { ...tasks };
        const taskIndex = updatedTasks[status].findIndex((task) => task._id === taskId);
        const task = updatedTasks[status][taskIndex];
        updatedTasks[status].splice(taskIndex, 1);
        task.status = status;
        updatedTasks[status].push(task);
        setTasks(updatedTasks);
    };

    return (
        <>
            <div className="flex flex-col md:flex-row gap-4 justify-between w-full">
                <div className="w-full md:w-4/12">
                    <div ref={dropToDo} className="border h-36 ">
                        <h1>To-Do</h1>
                        {tasks['To-Do'].map((task) => (
                            <TaskItem key={task._id} task={task} />
                        ))}
                    </div>
                    <div ref={dropOnGoing} className="border h-36 my-2">
                        <h1>On Going</h1>
                        {tasks['On-Going'].map((task) => (
                            <TaskItem key={task._id} task={task} />
                        ))}
                    </div>
                    <div ref={dropCompleted} className="border h-36">
                        <h1>Completed</h1>
                        {tasks['Completed'].map((task) => (
                            <TaskItem key={task._id} task={task} />
                        ))}
                    </div>
                </div>

                <div className="w-full md:w-8/12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {userTasks.map(task => (
                        <ToDoCard
                            key={task._id}
                            task={task}
                            refetch={refetch}
                            loading={loading}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default ToDoList;


// import { useEffect, useState } from "react";
// import useAuth from "../../Hooks/useAuth";
// import useUserTask from "../../Hooks/useUserTask";
// // import TaskItem from "../../components/ToDoListCmp/TaskItem";
// import { categorizeTasks } from "../../API/categorizeTasks ";
// import TaskCategory from "../../components/ToDoListCmp/TaskCategory ";
// const ToDoList = () => {
//     const { user } = useAuth();
//     const { userTasks, loading, refetch } = useUserTask(user?.email);
//     const [tasks, setTasks] = useState(categorizeTasks(userTasks));
  
//     useEffect(() => {
//       // Update tasks when userTasks change
//       setTasks(categorizeTasks(userTasks));
//     }, [userTasks]);
  
//     const handleDrop = (taskId, status) => {
//       // Implement your drop logic here...
  
//       // Trigger a refetch if needed
//       refetch();
//     };
  
//     return (
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//         {Object.keys(tasks).map((status) => (
//           <TaskCategory key={status} status={status} refetch={refetch} tasks={tasks[status]} onDrop={handleDrop} />
//         ))}
//       </div>
//     );
//   };
  
//   export default ToDoList;
  