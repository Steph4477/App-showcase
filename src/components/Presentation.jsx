import React, { useState, useEffect } from 'react';


export default function Presentation() {
  const words = ["un virtuose du CSS", "un addict de la doc", "un serial commiteur", "un ninja du déploiement"];
  const [isVisible, setIsVisible] = useState(true);
  const [currentIndex, setIndex] = useState(0);
  
  
  useEffect(() => {
    const handleScroll = () => {
        const position = window.scrollY;
        const windowHeight = window.innerHeight;
        const fullHeight = document.documentElement.scrollHeight;
      
        if (position > (fullHeight - windowHeight) * 0.9) {
          setIsVisible(false);
          document.body.classList.add("slide-up");
        } else {
          setIsVisible(true);
          document.body.classList.remove("slide-up");
        }
      };
      

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(currentIndex => (currentIndex + 1) % words.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <>
      {isVisible && (
        <div className="presentation">
          <div className="presentation_title">
            <h2>Hello, je suis </h2>
            <div className="word-container">
              {words.map((word, index) => (
                <div
                  key={index}
                  className={`word ${index === currentIndex ? "visible" : ""}`}
                >
                  {word}
                </div>
              ))}
            </div>
            J'habite à Nantes, <br/>disponible en <br />full-remote.
          </div>
        </div>
      )}
    </>
  );
}
