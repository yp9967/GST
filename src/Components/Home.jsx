import React from "react";

const Home = () => {
  return (
    <>
      <div className="dropdown flex justify-center pt-12 resize-x ">
          <button
            className="btn btn-secondary dropdown-toggle text-gray-600"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Company Name
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="/serice">
              Tata
            </a>
            <a class="dropdown-item" href="#">
              Gucci
            </a>
            <a class="dropdown-item" href="#">
              Zara
            </a>
          </div>
        </div>

      {/* <label for="underline_select" class="sr-only">
        Underline select
      </label>
      <select
        id="underline_select"
        class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
      >
        <option selected>Choose a country</option>
        <option value="US">United States</option>
        <option value="CA">Canada</option>
        <option value="FR">France</option>
        <option value="DE">Germany</option>
      </select> */}
    </>
  );
};

export default Home;
