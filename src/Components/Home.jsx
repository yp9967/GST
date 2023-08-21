import { useState, useEffect, useRef } from "react";
import Sample from "../img/sample.png";

import Modal from "react-modal";
import {
  AiOutlineLogin,
  AiOutlineCaretRight,
  AiOutlineCaretLeft,
} from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { BsPersonFill } from "react-icons/bs";

import { GoSignOut } from "react-icons/go";

import { HiOutlineBell } from "react-icons/hi";
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
const Home = ({ sidebarOpen, isLoggedIn, handleLogout }) => {
  const windowWidth = useWindowWidth();
  const isMobile = windowWidth <= 768;

  const [companies, setCompanies] = useState([
    {
      name: "Honda",
      documents: [
        {
          id: 1,
          document: "Document 1",
          gstNo: "27AEYPB7742J1ZW",
          cgst: 0,
          sgst: 0,
          igst: 223540,
          total: 223540,
        },
        {
          id: 2,
          document: "Document 1",
          gstNo: "27AEYPB7742J1ZW",
          cgst: 0,
          sgst: 0,
          igst: 223540,
          total: 223540,
        },
      ],
    },
    {
      name: "Tata",
      documents: [
        {
          id: 1,
          document: "Document 1",
          gstNo: "29GGGGG1314R9Z6",
          cgst: 223540,
          sgst: 230000,
          igst: 0,
          total: 453540,
        },
      ],
    },
    {
      name: "Bmw",
      documents: [
        {
          id: 1,
          document: "Document 1",
          gstNo: "22AAAAA0000A1Z5",
          cgst: 223540,
          sgst: 230000,
          igst: 0,
          total: 453540,
        },
      ],
    },
  ]);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [selectedDocument, setSelectedDocument] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    gstNo: "",
    cgst: "",
    sgst: "",
    igst: "",
    total: "",
  });
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const closeDropdownOnOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", closeDropdownOnOutsideClick);
    return () => {
      window.removeEventListener("click", closeDropdownOnOutsideClick);
    };
  }, []);

  const openModal = (document) => {
    setSelectedDocument(document);
    setFormData({
      gstNo: document.gstNo,
      cgst: document.cgst,
      sgst: document.sgst,
      igst: document.igst,
      total: document.total,
    });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleDropdown = () => {
    console.log("Dropdown toggled");
    setDropdownOpen(!dropdownOpen);
  };
  const handleCompanyChange = (event) => {
    setSelectedCompany(event.target.value);
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleUpdate = () => {
    const updatedData = { ...selectedDocument, ...formData };

    const updatedCompanies = companies.map((company) => {
      if (selectedCompany === company.name) {
        return {
          ...company,
          documents: company.documents.map((document) =>
            document.id === selectedDocument.id ? updatedData : document
          ),
        };
      }
      return company;
    });
    setCompanies(updatedCompanies);
    closeModal();
  };
  return (
    <div className="h-screen overflow-y-auto">
      {isLoggedIn && <Sidebar />}
      <div
        className={`p-10 overflow-auto duration-500 ${
          !isMobile && sidebarOpen ? "ml-72" : "ml-12"
        }`}
      >
        <div className="flex mb-4">
          <span className="mr-auto ml-4 text-5xl cursor-pointer">
            <HiOutlineBell />{" "}
          </span>

          <div className="relative inline-block text-left cursor-pointer">
            <div>
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 dark:border-white border-gray-900">
                <img
                  src=""
                  onClick={toggleDropdown}
                  ref={dropdownRef}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {dropdownOpen && (
              <div
                className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabindex="-1"
              >
                <div className="py-1" role="none">
                  <NavLink
                    to=""
                    className="flex items-center text-gray-700 px-4 py-2 text-sm"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-0"
                  >
                    <BsPersonFill className="mr-2" />
                    My Profile
                  </NavLink>
                  <NavLink
                    to="/login"
                    className="flex items-center text-gray-700 px-4 py-2 text-sm"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-1"
                  >
                    <AiOutlineLogin className="mr-2" />
                    Login
                  </NavLink>
                </div>
                {isLoggedIn && (
                  <div className="py-1" role="none">
                    <NavLink
                      to="/login"
                      className="flex items-center text-gray-700 px-4 py-2 text-sm"
                      role="menuitem"
                      tabindex="-1"
                      id="menu-item-2"
                      onClick={handleLogout}
                    >
                      <GoSignOut className="mr-2" />
                      Sign out
                    </NavLink>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        <div className=" border p-4 mb-4max-w-8xl rounded-md shadow-md">
          <h1 className="text-2xl font-bold mb-3 text-center">
            Name of Comapanies
          </h1>

          <div className="flex justify-center text-gray-700">
            <select
              className="border w-1/2 p-2 rounded-md mr-2 mb-4"
              onChange={handleCompanyChange}
              value={selectedCompany}
            >
              <option value="">Companies</option>
              {companies.map((company) => (
                <option key={company.name} value={company.name}>
                  {company.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        {selectedCompany && (
          <div className="z-0 ">
            <div className="border border-black  rounded-md p-4 mt-4 ">
              <h2 className="text-3xl">Document Performance</h2>
              <div className=" overflow-auto mt-4">
                <table className="w-full text-sm text-left  dark:text-gray-900">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-white">
                    <tr>
                      <th scope="col" className="px-6 py-3 rounded-l-lg">
                        Id
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Document
                      </th>
                      <th scope="col" className="px-6 py-3">
                        GST No.
                      </th>
                      <th scope="col" className="px-6 py-3">
                        CGST
                      </th>
                      <th scope="col" className="px-6 py-3">
                        SGST
                      </th>
                      <th scope="col" className="px-6 py-3">
                        IGST
                      </th>
                      {selectedCompany &&
                        selectedCompany.documents &&
                        selectedCompany.documents.length > 0 &&
                        Object.keys(selectedCompany.documents[0]).map(
                          (key) =>
                            key !== "id" &&
                            key !== "document" && (
                              <th key={key} scope="col" className="px-6 py-3">
                                {key.toUpperCase()}
                              </th>
                            )
                        )}

                      <th scope="col" className="px-6 py-3 rounded-r-lg">
                        Total
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {companies.map(
                      (company) =>
                        selectedCompany === company.name &&
                        company.documents.map((document, index) => (
                          <tr
                            key={index}
                            className="bg-white dark:bg-gray-800 cursor-pointer"
                            onClick={() => openModal(document)}
                          >
                            <th
                              scope="row"
                              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                            >
                              {index + 1}
                            </th>
                            <td className="px-6 py-4">
                              <NavLink
                                to="#"
                                className="inline-flex items-center p-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                                role="menuitem"
                              >
                                {`Document ${index + 1}`}
                              </NavLink>
                            </td>
                            <td className="px-6 py-4">{document.gstNo}</td>
                            <td className="px-6 py-4">{document.cgst}</td>
                            <td className="px-6 py-4">{document.sgst}</td>
                            <td className="px-6 py-4">{document.igst}</td>
                            <td className="px-6 py-4">{document.total}</td>
                            <td className=""></td>
                          </tr>
                        ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          ariaHideApp={false}
        >
          {selectedDocument && (
            <div className="flex ">
              <div className="w-1/2 flex flex-col items-center p-5 relative">
                <div className="absolute left-20 transform -translate-y-1/2 py-2">
                  <AiOutlineCaretLeft className=" w-16 text-gray-500 h-10 cursor-pointer hover:bg-gray-100 hover:border" />
                </div>
                <img
                  src={Sample}
                  alt="img"
                  className="max-w-full max-h-full"
                  style={{ maxHeight: "100%", maxWidth: "100%" }}
                />
                <div className="absolute right-20 transform -translate-y-1/2 py-2 pb-2">
                  <AiOutlineCaretRight className="w-16 text-gray-500 h-10 cursor-pointer hover:bg-gray-100 hover:border" />
                </div>
              </div>
              <div className=" w-1/2 bg-gray-300 px-5 py-5 items-center">
                <label className="block mb-2 text-sm font-medium text-gray-900 ">
                  Gst No:-
                </label>
                <input
                  type="text"
                  name="gstNo"
                  placeholder={selectedDocument.gstNo}
                  className="text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-100 dark:placeholder-black dark:text-black "
                  required=""
                  value={formData.gstNo}
                  onChange={handleInputChange}
                />
                <label className="block mb-2 text-sm font-medium text-gray-900 ">
                  Cgst:-
                </label>
                <input
                  type="text"
                  name="cgst"
                  placeholder={selectedDocument.cgst}
                  className="text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-100 dark:placeholder-black dark:text-black "
                  required=""
                  value={formData.cgst}
                  onChange={handleInputChange}
                />
                <label className="block mb-2 text-sm font-medium text-gray-900 ">
                  Sgst:-
                </label>
                <input
                  type="text"
                  name="sgst"
                  placeholder={selectedDocument.sgst}
                  className="text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-100 dark:placeholder-black dark:text-black "
                  required=""
                  value={formData.sgst}
                  onChange={handleInputChange}
                />
                <label className="block mb-2 text-sm font-medium text-gray-900 ">
                  IGST:-
                </label>
                <input
                  type="text"
                  name="igst"
                  placeholder={selectedDocument.igst}
                  className="text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-100 dark:placeholder-black dark:text-black "
                  required=""
                  value={formData.igst}
                  onChange={handleInputChange}
                />
                <label className="block mb-2 text-sm font-medium text-gray-900 ">
                  Total:-
                </label>
                <input
                  type="text"
                  name="total"
                  placeholder={selectedDocument.total}
                  className="text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-100 dark:placeholder-black dark:text-black "
                  required=""
                  value={formData.total}
                  onChange={handleInputChange}
                />
                <div className="">
                  <button
                    className="mt-4 border rounded-xl px-4 py-2 bg-red-500 text-white"
                    onClick={handleUpdate}
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </div>
  );
};

export default Home;

// <div className="flex max-h-screen">
// <img src={Sample} alt="img" className="max-w-30"/>

// <div className=" text-black ml- mr-auto">
//   <h2 className="text-xl font-bold border border-xl ">
//     {selectedDocument.document}
//   </h2>
//   <p>GST: {selectedDocument.gstNo}</p>
//   <p>CGST: {selectedDocument.cgst}</p>
//   <p>SGST: {selectedDocument.sgst}</p>
//   <p>IGST: {selectedDocument.igst}</p>
//   <p>Total: {selectedDocument.total}</p>
//   <div className="flex items-end justify-end ">
//   <button
//     className="mt-4 mx-auto border border-2xl px-4 py-2 bg-green-500 text-white"
//     onClick={closeModal}
//   >
//     Next
//   </button>
//   <button
//     className="mt-4 border px-4 py-2 bg-red-500 text-white"
//     onClick={closeModal}
//   >
//     Close
//   </button>
//   </div>
// </div>
// </div>
