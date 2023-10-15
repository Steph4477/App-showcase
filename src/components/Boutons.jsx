import React from 'react';
import arrowD from '../assets/arrowD.png';
import arrowG from '../assets/arrowG.png';

function Boutons(props) {
  return (
    <div className="boutons">
      <button className ="boutons_bouton-G" onClick={props.prevButtonClick}>
        <img src={arrowG} alt ="" />
       
      </button>
      <div className="boutons_title">MES PROJETS</div>
      <button className ="boutons_bouton-D" onClick={props.nextButtonClick}>
        <img src={arrowD} alt ="" />
      
      </button>
    </div>
  );
}

export default Boutons;
