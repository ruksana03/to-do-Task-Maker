const Logo = () => {
    return (
        <div className="text-black">
    <p
        className="relative z-10 font-sans font-extrabold text-sm text-center mt-1">
        T<span
            className="text-2xl border-2 px-2 m-1"
            style={{
                background: '-webkit-linear-gradient(left, #D88531, #FDBB05, #FF2F6B,#67A044)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                borderImage: '-webkit-linear-gradient(left, #D88531, #FDBB05, #FF2F6B,#67A044)',
                borderImageSlice: '1'
            }}>T</span>M
    </p>
        </div >
    );
};

export default Logo;


