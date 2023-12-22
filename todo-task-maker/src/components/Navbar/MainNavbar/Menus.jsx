import { Link, useLocation } from "react-router-dom";

const Menu = () => {
  const links = ['', 'features','target-audience' ,'blogs'];
  const menuNames = ['Home', 'Features','Target Audience' ,'Blogs'];
  
  const location = useLocation();

  return (
    <div className="flex fixed text-black ml-24">
      {links.map((link, index) => (
        <ol className='' key={link}>
          <li
            className=" border px-4 py-1 rounded-full text-center text-white"
            style={{
              background: link === '' && location.pathname === '/'
                ? "linear-gradient(to left, #D88531 10%, #FDBB05 10%, #FF2F6B 10%, #67A044 50%)"
                : location.pathname === `/${link}`
                  ? "linear-gradient(to left, #D88531 10%, #FDBB05 10%, #FF2F6B 10%, #67A044 50%)"
                  : "transparent",
              fontWeight: location.pathname === `/${link}` ? "bold" : "normal",
              color: location.pathname === `/${link}` ? "white":"black",
            }}
          >
            <Link to={`/${link}`}>{menuNames[index]}</Link>
          </li>
        </ol>
      ))}
    </div>
  );
};

export default Menu;
