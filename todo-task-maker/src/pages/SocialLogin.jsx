import { FaGoogle } from "react-icons/fa";


const SocialLogin = () => {
    return (
        <>
        <button
        //   onClick={handleGoogleSignIn}
          className="w-full mt-8 flex justify-center gap-6 items-center border-[1px] px-6 py-2 rounded-full shadow-md shadow-white hover:shadow-2xl hover:text-lg "
          
        >
          <FaGoogle />
          {/* <img src={google} alt="" width={30} height={30} /> */}
          <p className="">Sign Up With Google</p>
        </button>
      </>
    );
};

export default SocialLogin;