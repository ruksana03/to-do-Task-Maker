import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import useAuth from "../Hooks/useAuth";
import toast from "react-hot-toast";
import { ImSpinner10 } from "react-icons/im";


const Login = () => {
    const { signIn,loading } = useAuth();
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state?.from?.pathname || '/'

    //Login form submit function
    const handleSubmit = async event => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value

        try {
            const result = await signIn(email, password)
            console.log(result)

            // code for token 
            // await getToken(result?.user?.email)

            navigate(from, { replace: true })
            toast.success('Login Successful')
        } catch (err) {
            console.log(err)
            toast.error(err?.message)
        }
    }
    return (
        <>
            <Helmet>
                <title>TTM | Log In</title>
            </Helmet>
            <div
                className="mx-auto my-12 border-2 p-4 font-mono bg-neutral-300 w-11/12 shadow-2xl shadow-black md:w-8/12 lg:w-4/12">
                <h1 className="text-3xl font-bold text-center mb-6">Welcome Again </h1>

                {/* register form start */}
                <form onSubmit={handleSubmit}>
                    <div>
                        {/* email field start */}
                        <div className="flex flex-col my-2">
                            <label className="text-sm text-neutral-600">Email address</label>
                            <input
                                required
                                type="email"
                                name="email"
                                id=""
                                placeholder="name@domain.com"
                                className="px-4 focus:border-black focus:border-1 hover:shadow-md hover:shadow-black"
                               
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
                                id=""
                                placeholder="******"
                                className="px-4 focus:border-black focus:border-1 hover:shadow-md hover:shadow-black"
                                

                            />
                        </div>
                        {/* password field end */}

                        {/* resister form submit button  */}
                        <button
                            type="submit"
                            className="mt-6 w-full py-2 text-lg border-[1px] shadow-md rounded-full shadow-white hover:shadow-2xl hover:text-xl "
                          
                        >
                              {loading ? (
                                <ImSpinner10 className='animate-spin m-auto text-[#E13D63]' />
                            ) : (
                                'Continue'
                            )}
                            {/* Continue */}
                        </button>
                    </div>
                </form>

                {/* register form end */}

                {/* divider  */}
                <div className="my-4 border-b border-neutral-500" />

                {/* Change page  */}
                <p className="text-neutral-600">
                    New Here
                    <Link to="/register"
                        className="mx-1 font-extrabold text-lg border-transparent shadow-white  shadow-lg hover:text-xl transition"
                      
                    >
                        Sign Up
                    </Link>
                </p>

                {/* social Login  */}
                <SocialLogin />
            </div>
        </>
    );
};

export default Login;