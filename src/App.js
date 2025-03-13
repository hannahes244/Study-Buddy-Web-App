import React from "react";
import NavBar from "./components/navbar/navbar";
import AccountSettings from "./pages/accountsettings/accountsettings";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div>
      <NavBar />
      <AccountSettings />
      <Footer />
    </div>
  );
}

export default App;
