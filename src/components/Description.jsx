import React, { useEffect, useState } from "react";
import react from "../assets/react.svg"
import mongodb from '../assets/mongodb.svg'
import express from '../assets/express.svg'
import nodejs from '../assets/nodejs.svg'
import javascript from '../assets/javascript.svg'
import sass from '../assets/sass.svg'
import css from '../assets/css.png'
import html from '../assets/html.svg'
import git from '../assets/git.svg'


export default function Description() {
  const words = [
    { technology: "React.js", image: react },
    { technology: "GitHub", image: git },
    { technology: "Sass", image: sass },
    { technology: "HTML5", image: html },
    { technology: "CSS3", image: css },
    { technology: "Node.js", image: nodejs },
    { technology: "Express", image: express },
    { technology: "MongoDB", image: mongodb },
    { technology: "JavaScript", image: javascript },
  ];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentWordIndex < words.length - 1) {
        setCurrentWordIndex(currentWordIndex + 1);
      }
    }, 250);

    return () => clearTimeout(timer);
  }, [currentWordIndex]);

  return (
    <div>
      <div className="profil_container_description_p">
        <p>
          Merci de prendre le temps de consulter mon portfolio.
          <br />
          <br />
          Je suis un développeur web passionné par les nouvelles technologies et la programmation,
          spécialisé dans le développement front-end avec des compétences en back-end et bases de données.
          <br />
          <br />
          Mon objectif est de créer des sites web modernes, fonctionnels et accessibles en utilisant principalement les technologies :
          <br />
        </p>
      </div>
      <div className="skillsWord">
        {words.map((word, index) => (
          <div key={index} className={index <= currentWordIndex ? "visible" : ""}>
            {<img src={word.image} alt={word.technology} />}
            <strong>{word.technology}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}
