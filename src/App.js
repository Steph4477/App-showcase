import { createContext, useState } from 'react';
import 'normalize.css';
import './styles/Index.scss';
import Home from './pages/home';
import DarkBouton from './components/DarkBouton';


export const ThemeContext = createContext(null);

export default function App() {
  const [theme, setTheme] = useState("dark")

  const toggleTheme = () => {    
    setTheme((curr) => (curr === "light" ? "dark" : "light"))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <div className="App_switch">
          <DarkBouton toggleTheme={toggleTheme} theme={theme} />
        </div>
        <div className="App_home">
          <Home />
        </div>
      </div>     
    </ThemeContext.Provider>
  );
}
