import React, { useState, useEffect } from "react";
import Presentation from "./Presentation";
import Description from "./Description";


export default function Cache() {
  // état initial
  const [showPresentation, setShowPresentation] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  // hook d'effet pour écouter l'événement scroll
  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.pageYOffset > window.innerHeight * 0.3);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // hook d'effet pour mettre à jour l'état de showPresentation
  useEffect(() => {
    setShowPresentation(!isScrolled);
  }, [isScrolled]);

  // renvoie l'élément JSX contenant les composants Presentation et Skills
  return (
    <div className="cache-container">
      {showPresentation && <Presentation />}
      <Description />
      


     
    </div>
  );
}


