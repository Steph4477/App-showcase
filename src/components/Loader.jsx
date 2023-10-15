import React, { useState, useEffect } from "react";
import doorR from "../assets/porteD.png";
import doorL from "../assets/porteG.png"; 

const Loader = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return visible ? (
    <div className="loader">
      <div className="loader_col1">
        <img src={doorR} alt="" />
      </div>
      <div className="loader_col2">
      <img src={doorL} alt="" />
      </div>
    </div>
  ) : null;
};

export default Loader;
