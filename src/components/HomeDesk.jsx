import responsive from "../assets/responsive.png"


export default function HomeDesk() {
  return (
    <section className="homeDesk" id="homeDesk">

      <div className="homeDesk_text">
        <h2>Bienvenue sur mon e-portfolio !</h2>
        <p>Je suis un développeur web toujours en quête d'amélioration de mes compétences. J'ai créé ce site en utilisant React pour présenter mes réalisations.</p>
        <p>Découvrez mes projets en explorant les différentes sections ou en parcourant les onglets disponibles. Bien qu'ils ne soient pas encore au sommet de leur sophistication, je suis convaincu qu'ils sauront vous plaire.</p>
        <p>Mon objectif professionnel est de continuer à progresser dans le domaine du développement web. Grâce à ma passion pour la programmation et à ma détermination, je suis prêt à relever de nouveaux défis et à repousser les limites de mes compétences.</p>
        <p>N'hésitez pas à me contacter si vous souhaitez explorer les différents aspects du web en ma compagnie !</p>
      </div>
      <div className="homeDesk_citation">
        <img src={responsive} alt="icone cible" />
        <p>N'hesitez pas à tester le responsive du site. <br />
          Bonne visite ! 😉
        </p>


      </div>
    </section>
  )
}
