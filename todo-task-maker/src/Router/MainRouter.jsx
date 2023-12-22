import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Features from "../pages/Features";
import Blogs from "../pages/Blogs";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../layout/DashboardLayout";
import Dashboard from "../pages/Dashboard/Dashboard";
import MyProfile from "../pages/Dashboard/MyProfile";
import AddTask from "../pages/Dashboard/AddTask";
import TargetAudience from "../pages/TargetAudience";
import ToDoList from "../pages/Dashboard/ToDoList";
import EditTask from "../pages/Dashboard/EditTask";
import { getSingleTask } from "../API/editTask";


const MainRouter = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        errorElement:<Error/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'features',
                element:<Features/>
            },
            {
                path:'blogs',
                element:<Blogs/>
            },
            {
                path:'login',
                element:<Login/>
            },
            {
                path:'register',
                element:<SignUp/>
            },
            {
                path:'target-audience',
                element:<TargetAudience/>
            }
        ]
    },
    {
        path:'/dashboard',
        element:<PrivateRoute>
            <DashboardLayout/>
        </PrivateRoute>,
        children:[
            {
                path:'/dashboard',
                element:<Dashboard/>
            },
            {
                path:'/dashboard/profile',
                element:<MyProfile/>
            },
            {
                path:'/dashboard/add-task',
                element:<AddTask/>
            },
            {
                path:'/dashboard/to-do-list',
                element:<ToDoList/>
            },
            {
                path:'/dashboard/editTask/:id',
                element:<EditTask/>,
                loader: ({ params }) => getSingleTask(params.id),
            }
        ]
    }
]);

export default MainRouter;