import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import toast from "react-hot-toast";
import { ImSpinner10 } from "react-icons/im";
import useAuth from "../Hooks/useAuth";
import { uploadImage } from "../API/uploadImage";
import { storeUserInfo } from "../API/verify";

const SignUp = () => {

        const { createUser, updateUserProfile,loading } = useAuth();
        const navigate = useNavigate();
    
        // register form function 
        const handleSubmit = async event => {
            event.preventDefault()
            const form = event.target
            const name = form.name.value
            const email = form.email.value
            const password = form.password.value
            const image = form.image.files[0]
    
            try {
                const imageData = await uploadImage(image)
                const result = await createUser(email, password)
                await updateUserProfile(name, imageData?.data?.display_url)
                console.log(result)
    
                // send user info to database 
                const sendToDb = await storeUserInfo(result?.user)
                console.log(sendToDb);
    
                // code for token 
                // await getToken(result?.user?.email)
    
                // navigate to home 
                navigate('/')
    
                // show toast
                toast.success("register Successfully")
    
            } catch (err) {
                console.log(err);
                toast.error(err?.massage);
            }
    
        };

    return (
        <div>
            <Helmet>
                <title>TTM | Sign Up</title>
            </Helmet>
            <div
                className="mx-auto my-12 border-2 p-4 font-mono bg-neutral-300 w-11/12 shadow-2xl shadow-black md:w-8/12 lg:w-4/12">
                    
                <h1 className="text-3xl font-bold text-center mb-6">Sign up to make your tasks more organized </h1>

                {/* register form start */}
                <form onSubmit={handleSubmit}>
                    <div>

                        {/* name field start  */}
                        <div className="flex flex-col my-2">
                            <label className="text-sm text-neutral-600">Name<br /><span className="text-xs">This name will appear Your Profile</span></label>
                            <input
                                required
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Your name"
                               
                                className="px-4 focus:border-black focus:border-1 hover:shadow-md hover:shadow-black"
                            />
                        </div>
                        {/* name field end  */}


                        {/* image field start  */}
                        <div className="flex flex-col my-2">
                            <label htmlFor="image" className="text-sm text-neutral-600">
                                Select Image URL
                            </label>
                            <input
                                required
                                type="file"
                                name="image"
                                accept="image/*"
                                className=" bg-white py-2 px-4 rounded-md focus:border-black focus:border-1 hover:shadow-md hover:shadow-black"
                            />
                        </div>
                        {/* image field start  */}

                        {/* email field start */}
                        <div className="flex flex-col my-2">
                            <label className="text-sm text-neutral-600">Email address</label>
                            <input
                                required
                                type="email"
                                name="email"
                                id="email"
                                placeholder="name@domain.com"
                               
                                className="focus:border-black focus:border-1 hover:shadow-md hover:shadow-black"
                            />
                        </div>
                        {/* email field end */}

                        {/* password field start */}
                        <div className="flex flex-col my-2">
                            <label className="text-sm text-neutral-600">Password</label>
                            <input
                                required
                                type="password"
                                name="password"
                                id="password"
                                placeholder="******"
                                
                                className="focus:border-black focus:border-1 hover:shadow-md hover:shadow-black"
                            />
                        </div>
                        {/* password field end */}

                        {/* register form submit button  */}
                        <button
                            type="submit"
                            className="mt-6 w-full py-2 text-lg border-[1px] shadow-xl hover:shadow-2xl hover:text-xl "
                           
                        >
                            {loading ? (
                                <ImSpinner10 className='animate-spin m-auto text-[#E13D63]' />
                            ) : (
                                'Continue'
                            )}
                            {/* continue */}
                        </button>
                    </div>
                </form>
                {/* register form end */}

                {/* divider  */}
                <div className="my-4 border-b border-neutral-500" />

                {/* Change page  */}
                <p className="text-neutral-600">
                    Already have an account
                    <Link
                        to="/login"
                        className="mx-1 font-extrabold text-lg border-transparent shadow-lg shadow-white rounded-md p-2 hover:text-xl transition"
                        
                    >
                        Login
                    </Link>
                </p>

                {/* social Login  */}
                <SocialLogin />
            </div>
        </div>
    );
};

export default SignUp;