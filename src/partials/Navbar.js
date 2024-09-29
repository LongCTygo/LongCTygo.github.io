import { useEffect } from "react";
import { Link } from "react-router-dom";
import { themeChange } from "theme-change";

const Navbar = () => {
  useEffect(() => {
    themeChange(false);
  }, []);
  return (
    <div className="navbar bg-base-300">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/jp-price">Get Card Price</Link>
            </li>
            <li>
              <Link to="/smm2/super_world">Super LongCT_'s Music World</Link>
            </li>
            <li>
              <Link to="/smm2/stmw">Super #TeamMusic World</Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">
          LongCT's Toolbox
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="h-full">
            <Link to="/jp-price">Get Card Price</Link>
          </li>
          <li className="h-full">
              <Link to="/smm2/super_world">Super LongCT_'s Music World</Link>
            </li>
            <li className="h-full">
              <Link to="/smm2/stmw">Super #TeamMusic World</Link>
            </li>
        </ul>
      </div>
      <div className="navbar-end">
        <select className="select" data-choose-theme>
          <option value="">Default</option>
          <option value="light">Light</option>
          <option value="forest">Dark</option>
          <option value="retro">Retro</option>
          <option value="synthwave">Synthwave</option>
          <option value="aqua">Aqua</option>
        </select>
      </div>
    </div>
  );
};

export default Navbar;
