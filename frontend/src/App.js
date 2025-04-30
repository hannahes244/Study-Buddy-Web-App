import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar/navbar";
import AccountSettings from "./pages/accountsettings/accountsettings";
import Footer from "./components/footer/footer";
import Dashboard from "./pages/dashboard/dashboard";
import Resources from "./pages/resources/resources";
import MyMatches from "./pages/mymatches/mymatches";
import Vibe from "./pages/vibe/vibe";
import Blog from "./pages/blog/blog";
import About from "./pages/about/about";
import Faq from "./pages/faq/faq"
import Welcome from "./pages/welcome/welcome";
import SignUp from "./components/signup/signup";


function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Welcome />} />  
        <Route path="/signup" element={<SignUp />} /> 
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/mymatches" element={<MyMatches />} />
        <Route path="/vibe" element={<Vibe />} />
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
