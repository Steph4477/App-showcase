import React, { useEffect, useRef } from 'react';
import photo from "../assets/photo_mini.png";
import Footer from "../components/Footer";
import cv from "../assets/cv.pdf";
const sidebarTitles = [
  { title: "Accueil", id: "homeDesk" },
  { title: "Portfolio", id: "portfolio" },
  { title: "A Propos", id: "about" },
];

export default function Aside() {
  const menuItemRef = useRef(null);

  useEffect(() => {
    // Mettre le focus sur l'élément "Accueil" après le chargement de la page
    menuItemRef.current.focus();
  }, []);

  const handleMenuClick = (e, id) => {
    e.preventDefault();
    const targetElement = document.getElementById(id);
    const topOffset = targetElement.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: topOffset, behavior: 'smooth' });
  };

  return (
    <div className="aside">
      <div className="aside_profil">
        <img className="aside_profil_photo" src={photo} alt="Stéphane" />
        <h2 className="aside_profil_title">Stéphane Morel</h2>
      </div>
      <div className="aside_menu">
        {sidebarTitles.map((sidebarTitle, index) => (
          <ul key={sidebarTitle.id}>
            <li>
              <a
                href={`#${sidebarTitle.id}`}
                ref={index === 0 ? menuItemRef : null}
                onClick={(e) => handleMenuClick(e, sidebarTitle.id)}
              >
                {sidebarTitle.title}
              </a>

            </li>
            
            
          </ul>
        ))}
          <div className="aside_menu_cv">
              <a href={cv} download>Télécharger mon CV</a>
          </div>
      </div>
      <div className="aside_RS">
        <div className="aside_RS_footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}
