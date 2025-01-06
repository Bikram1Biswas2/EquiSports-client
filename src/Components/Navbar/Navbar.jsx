import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Tooltip } from "react-tooltip";
import "./Navbar.css";
import { MdSportsHandball } from "react-icons/md";
import { ThemeContext } from "../Provider/ThemeProvider";
import { FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const{theme,setTheme}=useContext(ThemeContext)



  const handleChangeTheme = () => {
    document.documentElement.classList.toggle('dark');
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const links = (
    <div className="flex  flex-col md:flex-col lg:flex-row" id="navbar">
    <ul className="flex flex-col md:flex-row gap-4 text-">
      {user ? (
        <>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/allEquipment">All Sports Equipments</NavLink>
          </li>
          <li>
            <NavLink to="/addEquipment">Add Equipments</NavLink>
          </li>
          <li>
            <NavLink to="/myEquipment">My Equipment</NavLink>
          </li>
          <li>
            <NavLink to="/aboutUs">About Us</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </>
      ) : (
        <>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/allEquipment">All Sports Equipments</NavLink>
          </li>
          <li>
            <NavLink to="/aboutUs">About Us</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </>
      )}
    </ul>
  </div>
  
  );

  return (
  <div className="bg-[#D7D3BF]/70 bg-opacity-35 sticky  top-0 left-0 w-full z-10 text-black dark:text-white dark:bg-black">
      <div className="navbar  w-11/12 mx-auto ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-neutral text-neutral-content rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-2xl font-bold text-[#FFC107] dark:text-white">
          {" "}
          <MdSportsHandball className="text-3xl text-[#FFC107] dark:text-white" />
          EquiSports
        </a>
      </div>
      <div className="navbar-center hidden lg:flex flex-wrap justify-center">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            {user.photoURL && (
              <div className="avatar">
                <div
                  className="ring-primary ring-offset-base-100 w-12 rounded-full ring ring-offset-2 mr-2"
                  data-tooltip-id="user-tooltip"
                  data-tooltip-html={`<div style=\"max-width: 200px; text-align: left;\">
                    <b>UserName: ${user.displayName}</b><br/>
                    <small>User Photo URL: ${user.photoURL}</small>
                  </div>`}
                >
                  <img
                    src={user.photoURL}
                    alt="User Avatar"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            )}
            <Tooltip
              id="user-tooltip"
              place="top"
              style={{
                padding: "30px",
                fontSize: "12px",
                textAlign: "center",
                zIndex: 10,
              }}
            />
            <button onClick={logOut} className="btn">
              Logout
            </button>
          </>
        ) : (
          <Link to="/login" className="btn">
            Login
          </Link>
        )}
         {/* theme */}
         <div  className="navbar-end ml-4 text-xl">
         <div onClick={handleChangeTheme}>
          {theme==='light'? <FaMoon></FaMoon>: <FaSun></FaSun>}
        </div>
         </div>
      </div>
    </div>
  </div>
  );
};

export default Navbar;
