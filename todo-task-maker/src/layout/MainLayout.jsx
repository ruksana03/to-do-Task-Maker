import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/MainNavbar/Navbar";
import Footer from "../components/Footer/Footer";

const MainLayout = () => {
    return (
        <>
            <Navbar />
            <div className='pt-10 min-h-[calc(100vh-68px)]'>
                <Outlet />
            </div>
            <Footer />
        </>
    );
};

export default MainLayout;