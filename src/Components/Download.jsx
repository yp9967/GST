import React from "react";
import { FiDownload } from "react-icons/fi";
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState, useEffect } from "react";

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowWidth;
};

const Sidebar = () => {};
const Download = ({ sidebarOpen }) => {
  const windowWidth = useWindowWidth();
  const isMobile = windowWidth <= 768;
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleDownload = () => {
    // Implement your download logic here
    // You can use the selectedDate and selectedOption states
  };

  return (
    <>
      <div className="h-screen ">
        <Sidebar />
        <div
          className={`duration-500 ${
            !isMobile && sidebarOpen ? "ml-72" : "ml-12"
          }`}
        >
          <div className="flex flex-col items-center justify-center px-9 py-8 mx-auto md:h-screen lg:py-0">
            <span className="flex items-center mb-6 text-2xl font-semibold text-gray-900">
            Download&nbsp;<FiDownload />
              </span>
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <label
                  htmlFor="date"
                  className="block mb-2 font-bold text-gray-800"
                >
                  Select a Date:
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={selectedDate}
                  onChange={handleDateChange}
                />
                <label
                  htmlFor="dropdown"
                  className="block mb-2 font-bold text-gray-800"
                >
                  Company Name:
                </label>
                <select
                  id="dropdown"
                  name="dropdown"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={selectedOption}
                  onChange={handleOptionChange}
                >
                  <option value="option1">Honda</option>
                  <option value="option2"> Tata</option>
                  <option value="option2"> BMW</option>
                </select>
                <button
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-white-700 dark:focus:ring-blue-800"
                  onClick={handleDownload}
                >
                  Download
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Download;
