import booki from '../assets/captureBooki.png';
import ohmyfood from '../assets/ohmyfood.png';
import internet from '../assets/internet.png'
import lapanthere from '../assets/lapanthere.png';
import git from '../assets/git.svg';
import kasa from '../assets/kasa.png';


const projects = [
  {
    id: 0,
    lien: "https://steph4477.github.io/Mockup-integration/",
    content: "Intégration d'un design de site web adaptable (responsive)",
    image: booki,
    title: "Booki",
    techno: "HTML5, CSS3",
    lien2: "https://github.com/Steph4477/Mockup-integration/"
  },
  {
    id: 1,
    lien: "https://steph4477.github.io/Dynamic-site/",
    content: "Conception d'un site web animé avec des styles CSS",
    image: ohmyfood,
    title: "OhmyFood",
    techno: "HTML5, CSS3, Saas",
    lien2: "https://github.com/Steph4477/Dynamic-site/",
  },
  {
    id: 2,
    lien: "https://steph4477.github.io/Opti-SEO/",
    content: "Amélioration du référencement, de l'accessibilité et de la performance d'un site web existant",
    image: lapanthere,
    title: "La Panthère",
    techno: "HTML5, CSS3",
    lien2: "https://github.com/Steph4477/Opti-SEO/"
  },
  {
    id: 3,
    lien: "https://steph4477.github.io/Create-React-app/",
    content: "Creation d'une application web de location immobilière avec React",
    image: kasa,
    title: "kasa",
    techno: "React, JavaScript, JSX, HTML5, CSS3",
    lien2: "https://github.com/Steph4477/Create-React-app/"

  }

];


export default function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <h2>Mes Projets réalisés :</h2>
      <div className='porfolio_project'>
        {projects.map((project) => (
          <div key={project.id}>
            <div className="portfolio_project_carte">
              <a alt={project.content} href={project.lien2}>
                <img src={git} alt="internet" />
                Voir le code sur Github 
              </a>
              <div className="portfolio_project_carte_image">
                <img src={project.image} alt={project.content} />
                <article className="portfolio_project_carte_image_content">
                  <p>{project.content}</p>
                  <p>{project.techno}</p>
                  <a alt={project.content} href={project.lien}>
                    <img src={internet} alt="internet" />
                    Voir le site {project.title}
                  </a>

                </article>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
