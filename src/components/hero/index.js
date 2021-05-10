import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import SideBar from "../sidebar";
import { HeroContainer } from "./heroelements";
import { HeroContent, HeroItems, HeroH1, HeroP, HeroBtn } from "./heroelements";
const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <HeroContainer>
        <Navbar toggle={toggle} />
        <SideBar isOpen={isOpen} toggle={toggle} />
        <HeroContent>
          <HeroItems>
            <HeroH1>Greatest Piza Ever</HeroH1>
            <HeroP>Ready in 60 Seconds</HeroP>
            <HeroBtn>Place Order</HeroBtn>
          </HeroItems>
        </HeroContent>
      </HeroContainer>
    </div>
  );
};

export default Hero;
