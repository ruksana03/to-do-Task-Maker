import { Link } from "react-router-dom";


const DashboardMenu = () => {
    const links = ['profile', 'add-task', 'to-do-list'];
    const menuNames = ['My Profile', 'Add Task', 'To-Do List'];
    return (
        <div className="flex flex-col lg:gap-4">
            {
                links.map((link, index) =>
                    <ol key={link}>
                        <li>
                            <Link to={`/dashboard/${link}`}>{menuNames[index]}</Link>
                        </li>
                    </ol>)
            }
        </div>
    );
};

export default DashboardMenu;