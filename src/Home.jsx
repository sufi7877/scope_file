import React, { useEffect } from 'react'
import HeroSection from "./componants/HeroSection";
import { useGlobalContext } from "./context";
import Services from "./Services"
import Contect from "./Contect"

const Home = () => {
  const { updateHomePage } = useGlobalContext();

  useEffect(() => updateHomePage(), []);
  return(
    <>
  <HeroSection/>
  <Services/>
  <Contect/>
  </>
  );
};

export default Home;