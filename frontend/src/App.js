import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar/navbar";
import AccountSettings from "./pages/accountsettings/accountsettings";
import Footer from "./components/footer/footer";
import Dashboard from "./pages/dashboard/dashboard";
import FindMatches from "./pages/findmatches/findmatches";
import MyMatches from "./pages/mymatches/mymatches";
import Resources from "./pages/resources/resources";
import Blog from "./pages/blog/blog";
import About from "./pages/about/about";
import Faq from "./pages/faq/faq"

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />  
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/findmatches" element={<FindMatches />} />
        <Route path="/mymatches" element={<MyMatches />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/accountsettings" element={<AccountSettings />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
