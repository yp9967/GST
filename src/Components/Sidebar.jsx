import { useState } from "react";
import { FiArrowLeft, FiSearch, FiUpload, FiDownload } from "react-icons/fi";
import { MdCurrencyRupee } from "react-icons/md";
import { RxComponent1 } from "react-icons/rx";
import { BsChevronDown, BsMicrosoftTeams } from "react-icons/bs";

import {
  AiOutlineHome,
  AiOutlineLogin,
  AiOutlineCloudServer,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { BiSupport } from "react-icons/bi";

const Sidebar = ({open, setOpen}) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  // const [open, setOpen] = useState(false);
  // const [submenuOpen, setSubmenuOpen] = useState(false);
  const Menus = [
    { title: "Home", icon: <AiOutlineHome />, link: "/home" },
    { title: "Services", icon: <AiOutlineCloudServer />, link: "/services" },
    { title: "Upload", icon: <FiUpload />, spacing: true, link: "/upload" },
    { title: "Download", icon: <FiDownload />, link: "/download" },
    {
      title: "Authorization",
      icon: <AiOutlineLogin />,
      spacing: true,
      submenu: true,
      submenuItems: [
        { title: "Login", link: "/login" },
        { title: "Sign up", link: "/signup" },
      ],
    },
    {
      title: "Clients",
      spacing: true,
      icon: <BsMicrosoftTeams />,
      link: "/clients",
    },
    { title: "Support", icon: <BiSupport />, link: "/support" },
  ];
  return (
    <>
      <div className="flex fixed">
        <div
          className={`bg-dark-purple h-screen p-5 pt-8 ${
            open ? "w-72" : "w-20"
          } duration-500 relative`}
        >
          <FiArrowLeft
            className={`bg-white text-dark-purple text-3xl rounded-full absolute -right-3 top-13 border-2
           border-dark-purple cursor-pointer ${!open && "rotate-180"}`}
            onClick={() => setOpen(!open)}
          />
          <div className="inline-flex">
            <MdCurrencyRupee
              className={`bg-amber-300 text-4xl rounded cursor-pointer block float-left mr-2 duration-500 ${
                open && "rotate-[360deg]"
              }`}
            />
            <h1
              className={`text-white origin-left font-medium text-2xl duration-500 ${
                !open && "scale-0"
              }`}
            >
              Modernize
            </h1>
          </div>
          <div
            className={`flex item-center rounded-md bg-light-white mt-6 ${
              !open ? "px-2.5" : "px-4"
            }`}
          >
            <FiSearch
              className={`text-white text-3xl block float-left cursor-pointer ${
                open && "mr-2"
              }`}
            />
            <input
              type={"search"}
              placeholder="Search"
              className={`text-base bg-transparent w-full text-white focus:outline-none ${
                !open && "hidden"
              }`}
            />
          </div>
          <ul className="pt-2">
            {Menus.map((menu, index) => (
              <>
                <Link key={index} to={menu.link}>
                  <li
                    key={index}
                    className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${
                      menu.spacing ? "mt-9" : "mt-2"
                    }`}
                  >
                    <span className="text-2xl block float-left">
                      {menu.icon ? menu.icon : <RxComponent1 />}
                    </span>
                    <span
                      className={`text-base font-medium flex-1 duration-500 ${
                        !open && "hidden"
                      }`}
                    >
                      {menu.title}
                    </span>

                    {menu.submenu && (
                      <BsChevronDown
                        className=""
                        onClick={() => setSubmenuOpen(!submenuOpen)}
                      />
                    )}
                  </li>
                  {menu.submenu && submenuOpen && open && (
                    <ul>
                      {menu.submenuItems.map((submenuItem, index) => (
                        <li
                          key={submenuItem}
                          className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md duration-300 relative"
                        >
                          {submenuItem.title}
                        </li>
                      ))}
                    </ul>
                  )}
                </Link>
              </>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

// onClick={() => {window.location.pathname = menu.link}}
