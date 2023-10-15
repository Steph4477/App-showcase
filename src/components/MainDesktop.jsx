import React from "react";
import About from "../components/About";
import HomeDesk from "../components/HomeDesk";
import Portfolio from "./Portfolio";
export default function MainDesktop() {
  const sidebarTitles = [
    { id: 0, title: "HomeDesk" },
    { id: 1, title: "Portfolio" },
    { id: 2, title: "About" },
    { id: 3, title: "Contact" }
  ];

  return (
    <main className="main_desktop">
      {sidebarTitles.map((sidebarTitle) => (
        <div className={`main_desktop_${sidebarTitle.title.toLowerCase()}`} key={sidebarTitle.id} id={sidebarTitle.title.toLowerCase()}>
          {sidebarTitle.title === "About" ? <About /> : <a href={`#${sidebarTitle.title.toLowerCase()}`} ></a>}
          {sidebarTitle.title === "Portfolio" ? <Portfolio /> : <a href={`#${sidebarTitle.title.toLowerCase()}`} ></a>}
          {sidebarTitle.title === "HomeDesk" ? <HomeDesk /> : <a href={`#${sidebarTitle.title.toLowerCase()}`} ></a>}
        </div>
      ))}
    </main>
  );
}
