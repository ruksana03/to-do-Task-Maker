import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';

import Logo from "../Shared/Logo";

const Footer = () => {
  return (
    <div className="relative w-full py-6 font-mono bg-cover object-cover" style={{ backgroundImage: "url('https://i.ibb.co/5RXR9Y6/footer.jpg')", height: "300px" }}>
      {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}

      <div className="w-10/12 mx-auto inset-0">
        <div className="flex justify-center ">
         <Link to='/'> <Logo /></Link>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* add location start  */}
          <div className=" text-center lg:text-left lg:col-span-4 flex flex-col gap-4 justify-between">
            <p className="pt-4">Level-4, 34, Awal Centre, Mirpur, Dhaka <br />
              Support: techlegacy@integration.com <br />
              Helpline: 01869864382 , 04545454455 <br />
              (Available : Sat - Thu, 10:00 AM to 7:00 PM)</p>
          </div>
          {/* add location end  */}
          {/* Add link start  */}
          <div className="text-center lg:text-left lg:col-span-4 px-8 pt-4 font-bold ">
            <p className="font-normal">Useful Links</p>
            <div className="grid grid-cols-1 gap-2 ">
              <Link to='/blog'>Blog</Link>
              <Link to='/about'>About Us</Link>
              <Link to='/achievements'>Our Achievement</Link>
              <Link to='/refund-policy'>Refund policy</Link>
              <Link to='/terms'>Terms and Conditions</Link>
              <Link to='/privacy-policy'>Privacy & App Privacy Policy</Link>
            </div>
          </div>
          {/* Add link end  */}
          <div className="text-center lg:text-left lg:col-span-4 px-6 pt-4">
            <p className="">Follow Us</p>
            <div className="flex gap-4 justify-center lg:justify-between items-center text-center lg:w-5/12 my-4 text-2xl">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer hover:text-gray-500"
              >
                <FaFacebook />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer hover:text-gray-500"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer hover:text-gray-500"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer hover:text-gray-500"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
        <p className="text-center text-sm font-extrabold mt-12 text-white">© 2023 TodoTaskMaker<span className="text-base">(TTM)</span> Inc. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
