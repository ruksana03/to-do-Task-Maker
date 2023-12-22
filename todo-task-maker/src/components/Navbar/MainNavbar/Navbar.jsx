import { Link } from "react-router-dom";

import Logo from "../../Shared/Logo";
import DropdownSM from "./DropdownSM";
import Menus from "./Menus";
import ProfileDropdown from "./ProfileDropdown";
import Container from "../../shared/Container";


const Navbar = () => {
    return (
        <div
            className='bg-white fixed w-full text-black font-mono text-lg z-40 shadow-2xl'>
            <div
                className='py-4 border-b-[1px]'>
                {/* for sm and md  */}
                <div
                    className="flex justify-between text-center gap-4 w-11/12 mx-auto lg:hidden">
                    <Link
                        to='/'>
                        <div>
                            <Logo />
                        </div>
                    </Link>
                    <div>
                        <DropdownSM />
                    </div>
                </div>

                <Container>
                    {/* for lg:  */}
                    <div
                        className='hidden lg:grid grid-cols-12 gap-5 md:gap-0'>
                        <div className="col-span-11 flex justify-start gap-6">
                            <Link
                                to='/'>
                                    <Logo />
                            </Link>
                            <Menus />
                        </div>
                        <div className="col-span-1 border-2 rounded-lg h-full py-0 hover:p-1 hover:shadow-white hover:shadow-md transition"> 
                            <ProfileDropdown />
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Navbar;