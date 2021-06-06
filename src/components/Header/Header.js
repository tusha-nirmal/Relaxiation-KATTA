import React from 'react';
import "./Header.css";
import { FcClapperboard } from "react-icons/fc";
import { FcCamcorderPro } from "react-icons/fc"; 

const Header = () => {
  return (
    <span onClick={() => window.scroll(0, 0)} className="header">
      <FcClapperboard/>--Relaxation-KATTA-- <FcCamcorderPro/>
    </span>
  );
};

export default Header;
