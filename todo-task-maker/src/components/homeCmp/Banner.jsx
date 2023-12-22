import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div
            className="relative h-80 bg-cover bg-center"
            style={{ backgroundImage: `url('https://i.ibb.co/kcTQWVx/banner.jpg')` }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white z-10">
                    <h1 className="text-4xl font-bold mb-4">hello</h1>
                    <Link to='/dashboard'>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" style={{ background: "linear-gradient(to left, #D88531 10%, #FDBB05 10%, #FF2F6B 10%, #67A044 50%)" }}>
                            Let’s Explore
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;

