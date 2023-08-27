import React from 'react'
import { useState } from "react";
import { useLocation } from "react-router-dom";
//icons
import HomeIcon from '@mui/icons-material/Home';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

//sidebar
import {Link} from "react-router-dom";


  const SideBar = () => {
    const [sidebarVisible, setSidebarVisible] = useState(true);
  
    // Toggles the visibility of the sidebar
    const toggleSidebar = () => {
      setSidebarVisible(!sidebarVisible);
    };

    const location = useLocation().pathname;
    console.log(location);

  return (
<div
      className={` ${
        sidebarVisible ? "w-60" : "sm:w-24 w-20"
      } flex bg-gray-800 min-h-screen `}
    >
      {sidebarVisible ? 
      
      
      (
        <div className="mt-[7rem] px-5 flex flex-col items-start">

          <Link to="/dashboard">
            <div
              className={`flex items-center rounded mb-2 hover:bg-gray-700 w-48 h-12 ${
                location === "/dashboard"
                  ? "text-blue-600 border-blue-600 hover:none"
                  : "text-gray-300 border-gray-300 hover:text-white hover:border-white"
              } sm:px-3 `}
            >
              <HomeIcon className="mr-4" />
              Home
            </div>
          </Link>

          <Link to="/dashboard/trainers">
            <div
              className={`flex items-center rounded hover:bg-gray-700 w-48 h-12 ${
                location === "/dashboard/trainers"
                  ? "text-blue-600 border-blue-600 hover:none"
                  : "text-gray-300 border-gray-300 hover:text-white hover:border-white"
              } sm:px-3`}
            >
              <PersonSearchIcon className="mr-4" />
              Trainers
            </div>
          </Link>

          <Link to="/dashboard/enrolled-services">
            <div
              className={`flex items-center rounded hover:bg-gray-700 w-48 h-12 ${
                location === "/dashboard/enrolled-services"
                  ? "text-blue-600 border-blue-600 hover:none"
                  : "text-gray-300 border-gray-300 hover:text-white hover:border-white" 
              } sm:px-3`}
            >
              <SelfImprovementIcon className="mr-4" />
              Enrolled Services
              </div>
          </Link>

          <Link to="/dashboard/profile">
            <div
              className={`flex items-center rounded hover:bg-gray-700 w-48 h-12 ${
                location === "/dashboard/profile"
                  ? "text-blue-600 border-blue-600 hover:none"
                  : "text-gray-300 border-gray-300 hover:text-white hover:border-white"
              } sm:px-3`}
            >
              <AccountCircleRoundedIcon className="mr-4" />
              Profile
              </div>
          </Link>

          <Link to="/dashboard/notifications">
            <div
              className={`flex items-center rounded hover:bg-gray-700 w-48 h-12 ${
                location === "/dashboard/notifications"
                  ? "text-blue-600 border-blue-600 hover:none"
                  : "text-gray-300 border-gray-300 hover:text-white hover:border-white"
              } sm:px-3`}
            >
              <NotificationsRoundedIcon className="mr-4" />
              Notifications
              </div>
          </Link>

          <Link to="/logout">
            <div
              className={`flex items-center rounded hover:bg-gray-700 w-48 h-12 sm:px-3 text-gray-300 border-gray-300 hover:text-white hover:border-white`}>
              <LogoutRoundedIcon className="mr-4" />
              Logout
            </div>
          </Link>


        </div>
      ) 
      :
       (
        <div className="flex flex-col mt-[7rem] ml-5">

          <Link to="/dashboard">
            <div
              className={` flex items-center mb-2 hover:bg-gray-700 rounded-full w-8 h-8 sm:w-12 sm:h-12  ${
                location === "/dashboard"
                  ? "text-blue-600 border-blue-600 hover:none"
                  : "text-gray-300 border-gray-300 hover:text-white hover:border-white"
              } sm:px-3`}
            >
              <HomeIcon className="mr-4" />
            </div>
          </Link>

          <Link to="/dashboard/trainers">
            <div
              className={` flex items-center  hover:bg-gray-700 rounded-full w-8 h-8 sm:w-12 sm:h-12  ${
                location === "/dashboard/trainers"
                  ? "text-blue-600 border-blue-600 hover:none"
                  : "text-gray-300 border-gray-300 hover:text-white hover:border-white"
              } sm:px-3`}
            >
              <PersonSearchIcon className="mr-4" />
            </div>
          </Link>
          
          <Link to="/dashboard/enrolled-services">
            <div
              className={` flex items-center  hover:bg-gray-700 rounded-full w-8 h-8 sm:w-12 sm:h-12  ${
                location === "/dashboard/enrolled-services"
                  ? "text-blue-600 border-blue-600 hover:none"
                  : "text-gray-300 border-gray-300 hover:text-white hover:border-white"
              } sm:px-3`}
            >
              <SelfImprovementIcon className="mr-4" />
              </div>
          </Link>

          <Link to="/dashboard/profile">
            <div
              className={` flex items-center  hover:bg-gray-700 rounded-full w-8 h-8 sm:w-12 sm:h-12  ${
                location === "/dashboard/profile"
                  ? "text-blue-600 border-blue-600 hover:none"
                  : "text-gray-300 border-gray-300 hover:text-white hover:border-white"
              } sm:px-3`}
            >
              <AccountCircleRoundedIcon className="mr-4" />
              </div>
          </Link>

          <Link to="/dashboard/notifications">
            <div
              className={` flex items-center  hover:bg-gray-700 rounded-full w-8 h-8 sm:w-12 sm:h-12  ${
                location === "/dashboard/notifications"
                  ? "text-blue-600 border-blue-600 hover:none"
                  : "text-gray-300 border-gray-300 hover:text-white hover:border-white"
              } sm:px-3`}
            >
              <NotificationsRoundedIcon className="mr-4" />
              </div>
          </Link>
          <Link to="/logout">
            <div
              className={`flex items-center  hover:bg-gray-700 rounded-full w-8 h-8 sm:w-12 sm:h-12 sm:px-3  text-gray-300 border-gray-300 hover:text-white hover:border-white`}>
              <LogoutRoundedIcon className="mr-4" />
            </div>
          </Link>

        </div>
      )}
      <button
        className="hover:bg-slate-700 text-white w-8 h-8 sm:w-12 sm:h-12 absolute top-0 sm:left-3 left-5 mt-4 sm:ml-2 rounded-full"
        onClick={toggleSidebar}
      >
        {sidebarVisible ? <CloseOutlinedIcon /> : <MenuOutlinedIcon />}
      </button>
    </div>
  );
};

export default SideBar