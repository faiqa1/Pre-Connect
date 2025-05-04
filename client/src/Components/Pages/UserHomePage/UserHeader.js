import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { LuNetwork } from "react-icons/lu";
import { Link } from "react-router-dom";
import { FaHome, FaShoppingBag } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { IoDocument } from "react-icons/io5";

export default function UserHeader() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    navigate("/signup");
  };

  return (
    <div>
      <div className="userHeaderWrapper">
        <nav className="bg-[#002746]">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
            <Link
              to="/homepage"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <LuNetwork color="white" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                PreConnect
              </span>
            </Link>
            <div className="flex items-center space-x-6 rtl:space-x-reverse">
              <button
                onClick={handleLogout}
                className="text-sm text-white hover:underline"
              >
                Logout
              </button>
            </div>
          </div>
        </nav>
        <nav className="bg-lightblue">
          <div className="max-w-screen-xl px-4 py-1 mx-auto">
            <div className="flex items-center justify-center">
              <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm navactiveLink">
                <li>
                  <NavLink
                    to="/homepage"
                    className={({ isActive }) =>
                      isActive
                        ? "navitemwrapper active"
                        : "navitemwrapper"
                    }
                  >
                    <div className="w-[3rem] h-[2rem] flex mx-auto justify-center iconwrapper items-center">
                      <FaHome className="w-[3rem] h-[1.5rem]" fill="black" />
                    </div>
                    <div className="text-black text-lg font-semibold">Home</div>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/job"
                    className={({ isActive }) =>
                      isActive
                        ? "navitemwrapper active"
                        : "navitemwrapper"
                    }
                  >
                    <div className="w-[2rem] h-[2rem] flex mx-auto justify-center iconwrapper items-center">
                      <FaShoppingBag
                        className="w-[2rem] h-[1.5rem]"
                        fill="black"
                      />
                    </div>
                    <div className="text-black text-lg font-semibold">Jobs</div>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/projects"
                    className={({ isActive }) =>
                      isActive
                        ? "navitemwrapper active"
                        : "navitemwrapper"
                    }
                  >
                    <div className="w-[2rem] h-[2rem] flex mx-auto justify-center iconwrapper items-center">
                      <IoDocument
                        className="w-[2rem] h-[1.5rem]"
                        fill="black"
                      />
                    </div>
                    <div className="text-black text-lg font-semibold">
                      Projects
                    </div>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/notification"
                    className={({ isActive }) =>
                      isActive
                        ? "navitemwrapper active"
                        : "navitemwrapper"
                    }
                  >
                    <div className="w-[2rem] h-[2rem] flex mx-auto justify-center iconwrapper items-center">
                      <IoMdNotifications
                        className="w-[2rem] h-[2rem]"
                        fill="black"
                      />
                    </div>
                    <div className="text-black text-lg font-semibold">
                      Notifications
                    </div>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
