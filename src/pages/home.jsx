import React, { useState } from 'react';


import Profil from '../components/Profil';
import Skills from '../components/Skills';
import Caroussel from '../components/Caroussel';
import VideoPlayer from '../components/VideoPlayer';
import Aside from '../components/Aside';
import CacheDescription from '../components/CacheDescription';
import CarteProjet from '../components/CarteProjet';
import CarteDeVisite from '../components/CarteDeVisite';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Loader from '../components/Loader';
import MainDesktop from '../components/MainDesktop';
import monkeyVideo from '../assets/monkey.mp4';

const tabs = [
  {
    title: 'Profil',
    content: <Profil />
  },
  {
    title: 'Compétences',
    content: <Skills />
  },
  {
    title: 'Projets',
    content: <CarteProjet />
  },
  {
    title: 'Loisirs',
    content: <VideoPlayer src={monkeyVideo} />
  },
];



export default function Home() {

  const [tabActif, setTabActif] = useState(0)
  

  const changeTab = (index) => {
    setTabActif(index);
  }

  

  return (
    
      <div className="home">
        <section className='home_mobile'>
          <Header />
          <div className='home_mobile_cv'>
            <CarteDeVisite />
          </div>
          <div className='home_mobile_presentation'>
            <CacheDescription />
          </div>
          <div className='home_mobile_carousel'>
            <Caroussel />
          </div>
          <Footer />
        </section>

        <section className="home_tablet">
          <Header />
          <div className='home_tablet_collapse'>
            {tabs.map((tab, index) => (
              <button
                key={index}
                className={`tab_service ${index === tabActif ? 'active' : ''}`}
                onClick={() => changeTab(index)}
              >
                <h2 className="tab_service_title">{tab.title}</h2>
              </button>
            ))}
          </div>

          <section className="home_card">
            <div className="collapse_content">
              {tabs[tabActif].content}
            </div>
          </section>

          <div className='home_tablet_footer'>
            <Footer />
          </div>

        </section>

        <section className="home_desktop">
          <div className="home_desktop_loader">
            <Loader />
          </div>
            
          <aside className="home_desktop_aside">
            <Aside />
          </aside>
          <main className="home_desktop_main">
            <MainDesktop />
            
          </main>
        </section>

      </div>
    
  )
}
