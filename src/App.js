import React from "react";
import Navbar from "./components/Navbar";
import Body from "./Body";
import Footer from "./components/Footer";
const App = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-center min-h-screen"><Body /></div>
      <Footer />
    </>
  );
};

export default App;
