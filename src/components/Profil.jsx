
import CarteDeVisite from "./CarteDeVisite";
import Description from "./Description";

export default function Profil() {
  

  return (
    <div className="profil">
      <div className="profil_container">
        <div className="profil_container_carte">
          <CarteDeVisite />
        </div>
        <div className="profil_container_description">
          
          <Description  />
        </div>
      </div>
    </div>
  );
}
