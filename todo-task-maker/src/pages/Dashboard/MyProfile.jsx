import useAuth from "../../Hooks/useAuth";
import { Helmet } from "react-helmet-async";


const MyProfile = () => {
    const { user } = useAuth()


    return (
        <div className='font-mono flex justify-start items-center h-screen mt-12 lg:mt-0'>
            <Helmet>
                <title>TLI | My Profile</title>
            </Helmet>
            <div className='bg-white rounded-2xl w-8/12 mx-auto mt-12'>
                <img
                    alt='profile'
                    src='https://i.ibb.co/frxfndF/Profile-cover.jpg'
                    className='w-full mb-4 rounded-t-lg h-64'
                />
                <div className='flex flex-col  justify-start p-4 -mt-16'>
                    <div className="flex gap-4 mb-4">
                        <img
                            alt='profile'
                            src={user.photoURL}
                            className='object-cover h-24 w-24  border-2 p-1'/>
                    </div>
                    <div className=" border-[1px] px-4 py-2">
                        <div className="grid grid-cols-12 gap-4">
                            <div className="col-span-6">
                                <p className='mt-2 font-medium text-gray-800 '>
                                    User Id: {user?.uid}
                                </p>
                            </div>
                        </div>
                        <hr className="border[1px] mx-6 my-3"/>
                        <div className="grid grid-cols-12 gap-4">
                            <p className='flex col-span-6 '>
                                User Name:
                                <span className='font-bold text-black '>
                                    {user.displayName}
                                </span>
                            </p>
                            <p className='flex col-span-6'>
                                User Email:
                                <span className='font-bold text-black '>{user.email}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;