import React from "react";
import javascriptIcon from "../assets/javascript.svg";
import reactIcon from "../assets/react.svg";
import htmlIcon from "../assets/html.svg";
import cssIcon from "../assets/css.png";
import sassIcon from "../assets/sass.svg";
import nodejsIcon from "../assets/nodejs.svg";
import expressIcon from "../assets/express.svg";
import mongodbIcon from "../assets/mongodb.svg";
import officeIcon from "../assets/office.svg";
import photoshopIcon from "../assets/photoshop.svg";
import inkscapeIcon from "../assets/inkscape.svg";
import figmaIcon from "../assets/figma.svg";
import gitIcon from "../assets/git.svg";

const skills = [
  {
    titre: "Frontend",
    icones: [
      { image: javascriptIcon, titre: "JavaScript" },
      { image: reactIcon, titre: "React" },
      { image: htmlIcon, titre: "HTML" },
      { image: cssIcon, titre: "CSS" },
      { image: sassIcon, titre: "Sass" },
    ],
  },
  {
    titre: "Backend",
    icones: [
      { image: nodejsIcon, titre: "Node.js" },
      { image: expressIcon, titre: "Express" },
    ],
  },
  {
    titre: "Bases de données",
    icones: [{ image: mongodbIcon, titre: "MongoDB" }],
  },
  {
    titre: "Autres outils",
    icones: [
      { image: officeIcon, titre: "Pack Office" },
      { image: photoshopIcon, titre: "Photoshop" },
      { image: inkscapeIcon, titre: "Inkscape" },
      { image: figmaIcon, titre: "Figma" },
      { image: gitIcon, titre: "Git" },
    ],
  },
];

export default function Skills() {
  return (
    <div className="skills_container">
      {skills.map((skill, index) => (
        <article className="skills_container_article" key={index}>
          <h2 className="skills_container_article_titre">
            {skill.titre}
          </h2>
          <div className="skills_container_article_icons">
            {skill.icones.map((icone, index) => (
              <div className="skills_container_article_icon" key={index}>
                <img
                  src={icone.image}
                  alt={icone.titre}
                  className="skills_container_article_icon_image"
                />
                <p className="skills_container_article_icon_titre">
                  {icone.titre}
                </p>
              </div>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
