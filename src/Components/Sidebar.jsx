
import { FiArrowLeft, FiSearch, FiUpload, FiDownload } from "react-icons/fi";
import { MdCurrencyRupee } from "react-icons/md";
import { RxComponent1 } from "react-icons/rx";

import { AiOutlineHome } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const Sidebar = ({ open, setOpen }) => {
 

  const Menus = [
    { title: "Home", icon: <AiOutlineHome />, link: "/home" },
    { title: "Upload", icon: <FiUpload />, spacing: true, link: "/upload" },
    { title: "Download", icon: <FiDownload />, link: "/download" },
   
  ];

  return (
    <div className="flex fixed">
      <div
        className={`bg-dark-purple h-screen p-3 align-middle ${
          open ? "w-72" : "w-20"
        } duration-500 relative`}
      >
        <FiArrowLeft
          className={`bg-white text-dark-purple text-3xl rounded-full absolute -right-3 top-7 border-2
           border-dark-purple cursor-pointer ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="inline-flex pt-2">
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
          className={`flex item-center rounded-md mt-6 ${
            !open ? "px-2.5" : "px-4"
          }`}
        >
          <FiSearch
            className={`text-white text-2xl block float-left cursor-pointer ${
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
        <ul className="pt-4 -ml-2">
          {Menus.map((menu, index) => (
            <li
              key={index}
              className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md duration-500 ${
                menu.spacing ? "mt-10" : "mt-2"
              }`}
            >
              <NavLink
                to={menu.link}
                activeclassname="bg-light-white text-dark-purple"
                className="flex items-center gap-x-4 p-2 rounded-md"
                title={menu.title}
              >
                <span className="text-2xl block float-left">
                  {menu.icon ? menu.icon : <RxComponent1 />}
                </span>
                <span
                  className={`text-base font-medium flex duration-300 ${
                    !open && "scale-0"
                  }`}
                >
                  {menu.title}
                </span>
              </NavLink>
            </li>
          ))}
        </ul>
        
      </div>
    </div>
  );
};

export default Sidebar;
