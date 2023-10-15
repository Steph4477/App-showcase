


import { useState } from 'react';


export default function Collapse({title}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="tab">
      <button className="tab_service" onClick={toggleCollapse}>
        <h2 className="tab_service_titre">{title}</h2>
      </button>
      <div className={`collapse-content ${isOpen ? 'open' : ''}`}>
        {  }
      </div>
    </div>
  );
}
