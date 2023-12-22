import { useLoaderData } from "react-router-dom";
import EditTaskForm from "../../components/EditTaskCmp/EditTaskForm";


const EditTask = () => {
    const taskForEdit = useLoaderData();
    // console.log("fjdhgjh",taskForEdit)
    return (
        <div>
            <EditTaskForm taskForEdit={taskForEdit}/>
           
        </div>
    );
};

export default EditTask;