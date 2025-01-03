import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Tooltip } from "react-tooltip";
import './Navbar.css'
import { MdSportsHandball } from "react-icons/md";

const Navbar = ({ toggleTheme, theme }) => {
  const { user, logOut } = useContext(AuthContext);

  const links = (
    <div className="flex flex-col md:flex-col lg:flex-row" id='navbar'>
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
        <NavLink to="/myEquipment">My Equipment List</NavLink>
      </li>
    </div>
  );

  return (
    <div className="navbar  w-11/12 mx-auto">
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
        <a className="btn btn-ghost text-2xl font-bold text-[#E85C0D]"> <MdSportsHandball className="text-3xl text-[#DB494F]" />EquiSports</a>
      </div>
      <div className="navbar-center hidden lg:flex">
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
                  <img src={user.photoURL} alt="User Avatar" />
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
        <button
          onClick={toggleTheme}
          className="bg-[#DB494F] text-white px-6 py-2 rounded-full hover:bg-[#D91656] transition duration-300 ease-in-out ml-4"
        >
          <label className="flex cursor-pointer gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path
                d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"
              />
            </svg>
            <input
              type="checkbox"
              value="synthwave"
              className="toggle theme-controller"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
