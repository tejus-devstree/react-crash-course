import React from "react";
import Hero from "./components/Hero";
import BrowseJobs from "./components/BrowseJobs";
import Navbar from "./components/Navbar";
import DevelopersAndEmployers from "./components/DevelopersAndEmployers";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <DevelopersAndEmployers />
      <BrowseJobs />
    </>
  );
};

export default App;
