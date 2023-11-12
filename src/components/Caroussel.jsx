import { useState } from 'react';
import booki from '../assets/captureBooki.png';
import ohmyfood from '../assets/ohmyfood.png';
import ohmyfoodV from '../assets/ohmyfoodV.png';
import lapanthere from '../assets/lapanthere.png';
import lapanthereV from '../assets/lapanthereV.png';
import internet from '../assets/internet.png';
import bookiV from '../assets/BookiV.png';
import Boutons from './Boutons';
import kasa from '../assets/kasa.png';
import kasaV from '../assets/kasaV.png';

const projects = [
  {
    id: 0,
    lien: "https://steph4477.github.io/Mockup-integration/",
    titre: "Intégration d'un design de site web adaptable (responsive)",
    techno: "HTML5, CSS3",
    imageRecto: booki,
    imageVerso: bookiV,
  },
  {
    id: 1,
    lien: "https://steph4477.github.io/Dynamic-site/",
    titre: "Conception d'un site web animé avec des styles CSS",
    techno: "HTML5, CSS3, Saas",
    imageRecto: ohmyfood,
    imageVerso: ohmyfoodV,
  },
  {
    id: 2,
    lien: "https://steph4477.github.io/Opti-SEO/",
    titre: "Amélioration du référencement, de l'accessibilité et de la performance d'un site web existant",
    techno: "HTML5, CSS3",
    imageRecto: lapanthere,
    imageVerso: lapanthereV,
  },
  {
    id: 3,
    lien: "https://steph4477.github.io/Create-React-app/",
    titre: "Creation d'une application web de location immobilière avec React",
    techno: "React, JavaScript, JSX, HTML5, CSS3",
    imageRecto: kasa,
    imageVerso: kasaV,
  }
];

export default function Carousel() {
  // initialize ID current to 0
  const [currentProjectId, setCurrentProjectId] = useState(0)

  // Check project.id into projects == current project
  const project = projects.find((project) => project.id === currentProjectId)

  // If the current project id < total number of projects -1,
  // the function increments the current project id by 1.
  const handleNextButtonClick = () => {
    if (currentProjectId < projects.length - 1) {
      setCurrentProjectId(currentProjectId + 1)
    }
  }

  const handlePrevButtonClick = () => {
    if (currentProjectId > 0) {
      setCurrentProjectId(currentProjectId - 1);
    }
  }

  return (
    <div className="carousel_container">
      <div className="carousel_container_title">

      </div>
      <div className="carousel_container_bouton">
        {/* associate the click of the button to its function */}
        <Boutons
          prevButtonClick={handlePrevButtonClick}
          nextButtonClick={handleNextButtonClick} />
      </div>

      <div key={project.id} className="carousel_container_carte">
        <section className="carousel_container_carte_recto">
          <div className="carousel_container_carte_recto_fond">
            <img
              className="carousel_container_carte_recto_fond_image"
              src={project.imageRecto}
              alt=""
            />
          </div>
        </section>
        <section className="carousel_container_carte_verso">
          <div className="carousel_container_carte_verso_fond">
            <img
              className="carousel_container_carte_verso_fond_image"
              src={project.imageVerso}
              alt=""
            />
          </div>
          <div className="carousel_container_carte_verso_contenu">
            <div className="carousel_container_carte_verso_contenu_titre">
              <div className="carousel_container_carte_verso_contenu_titre_h">
                {project.titre}
              <div>{project.techno}</div> 
              </div>
              
            </div>
            <article className="carousel_container_carte_verso_contenu_article">
              <div className="carousel_container_carte_verso_contenu_article_button">
                <button className="carousel_container_carte_verso_contenu_article_button_icone">
                  <img src={internet} alt="" />
                  <a
                    className="carousel_container_carte_verso_contenu_article_button_icone_texte"
                    alt={project.titre}
                    href={project.lien}
                  >
                    Site internet
                  </a>
                </button>
              </div>
            </article>
          </div>
        </section>
      </div>
    </div>
  )
}

