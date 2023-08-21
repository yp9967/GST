import React from "react";
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
const Upload = ({ sidebarOpen }) => {
  const windowWidth = useWindowWidth();
  const isMobile = windowWidth <= 768;

  return (
    <>
      <div className="h-screen ">
        <Sidebar />
        <div
          className={`flex p-12 duration-500 ${
            !isMobile && sidebarOpen ? "ml-72" : "ml-12"
          }`}
        ></div>
        <div
          className={`p-10 duration-500 ${
            !isMobile && sidebarOpen ? "ml-72" : "ml-12"
          }`}
        >
          <div>
            <div className="border rounded-md p-4 ">
              <h2 className="text-3xl">Upload Documents . . . </h2>

              <div className="relative overflow-x-auto mt-4">
                <table className="w-full text-sm text-left  dark:text-gray-900">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-white">
                    <tr>
                      <th scope="col" className="px-6 py-3 rounded-l-lg">
                        Company name
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Images Uploaded
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Upload
                      </th>
                      <th scope="col" className="px-6 py-3 rounded-r-lg "></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white dark:bg-gray-800">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                      >
                        Tata
                      </th>
                      <td className="px-6 py-4">1</td>
                      <td className="px-6 py-4">
                        <input
                          className="block text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                          id="file_input"
                          type="file"
                        />
                      </td>
                      <td className="">
                        <button
                          type="button"
                          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        >
                          Upload +
                        </button>
                      </td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-800">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                      >
                        Bmw
                      </th>
                      <td className="px-6 py-4">1</td>
                      <td className="px-6 py-4">
                        <input
                          className="block text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                          id="file_input"
                          type="file"
                        />
                      </td>
                      <td className="">
                        <button
                          type="button"
                          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        >
                          Upload +
                        </button>
                      </td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-800">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                      >
                        Honda
                      </th>
                      <td className="px-6 py-4">2</td>
                      <td className="px-6 py-4">
                        <input
                          className="block text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                          id="file_input"
                          type="file"
                        />
                      </td>
                      <td className="">
                        <button
                          type="button"
                          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        >
                          Upload +
                        </button>
                      </td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr className="font-semibold  dark:text-white">
                      <th scope="row" className="px-6 py-3 text-base">
                        <button
                          type="button"
                          className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                        >
                          Add +
                        </button>
                      </th>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Upload;
