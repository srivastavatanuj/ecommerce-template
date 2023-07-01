import { useEffect, useState } from "react";
import { MainSearch } from "../sellerpage/MainSearch";

import logo from "../../img/logo.png";

const Header = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const resize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, [window.innerWidth]);

  return (
    <div className="header">
      <img src={logo} alt="logo" />
      <MainSearch width={width} />
    </div>
  );
};

export default Header;
