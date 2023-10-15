import photo from "../assets/photo_mini.png";


export default function AsideProfil() {
    return (
        <div className="asideProfil">

            <img className="asideProfil_photo" src={photo} alt="photo Stéphane" />
            <h2 className="asideProfil_title">Stéphane Morel</h2>

        </div>
    )
}