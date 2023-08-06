function Home({ sidebarOpen }) {
  return (
    <div className={`min-h-screen flex justify-center items-center px-4 duration-300 ${sidebarOpen ? 'transform translate-x-72' : ''}`}>
      <div className="bg-white w-full max-w-xl p-6 rounded-md shadow-md">

        {/* Page Details */}
        <h1 className="text-2xl font-bold mb-4 text-center">Page Details</h1>
        
        {/* Dropdowns */}
        <div className="flex justify-between mb-4">
          <select className="border w-1/2 p-2 rounded-md mr-2">
            <option>Dropdown 1</option>
            <option>Option 1</option>
            <option>Option 2</option>
          </select>
          <select className="border w-1/2 p-2 rounded-md ml-2">
            <option>Dropdown 2</option>
            <option>Option 1</option>
            <option>Option 2</option>
          </select>
        </div>
        
        {/* Table Data */}
        <div className="border rounded-md p-4">
          <table className="w-full">
            {/* Add your table rows and data here */}
            <tr>
              <td>Sample Data</td>
              <td>Sample Data</td>
            </tr>
            {/* Repeat for other rows */}
          </table>
        </div>

      </div>
    </div>
  );
}

export default Home;
