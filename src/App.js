import Sidebar from "./Components/Sidebar";
import Home from "./Components/Home";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Services from "./Components/Services";
import Upload from "./Components/Upload";
import Download from "./Components/Download";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Clients from "./Components/Clients";
import Support from "./Components/Support";

const App = () => {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/download" element={<Download />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </Router>
  );
};

export default App;



// import Authorization from "./Components/Authorization";



// const App = () => {

//  <Router>
{
  /* <Switch>
<Route exact path="/" component={Home} />
<Route path="/about" component={About} />
<Route path="/contact" component={Contact} />
</Switch> */
}

// export default App;


  // const currentPath = window.location.pathname;

  // const renderComponentBasedOnPath = () => {
  //   if (currentPath === '/') {
  //     return <Home />;
  //   } else if (currentPath === '/services') {
  //     return <Services />;
  //   } else if (currentPath === '/upload') {
  //     return <Upload />;
  //   } else if (currentPath === '/download') {
  //     return <Download />;
  //   } else if (currentPath === '/authorization') {
  //     return <Authorization />;
  //   } else if (currentPath === '/authorization/login') {
  //     return <Login />;
  //   } else if (currentPath === '/authorization/signup') {
  //     return <Signup />;
  //   } else if (currentPath === '/clients') {
  //     return <Clients />;
  //   } else if (currentPath === '/support') {
  //     return <Support />;
  //   }
  // };
