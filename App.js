import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar/navbar";
import AccountSettings from "./pages/accountsettings/accountsettings";
import Footer from "./components/footer/footer";
import Dashboard from "./pages/dashboard/dashboard";
import FindMatches from "./pages/findmatches/findmatches";
import Requests from "./pages/requests/requests";
import MyMatches from "./pages/mymatches/mymatches";
import Resources from "./pages/resources/resources";
import Blog from "./pages/blog/blog";


function App() {
  return (
    <Router>
      <NavBar />
      
      {/* Ensure dashboard is not rendered directly! */}
      <Routes>
        <Route path="/" element={<Dashboard />} />  
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/findmatches" element={<FindMatches />} />
        <Route path="/requests" element={<Requests />} />
        <Route path="/mymatches" element={<MyMatches />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/accountsettings" element={<AccountSettings />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
