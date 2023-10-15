
import sun from "../assets/sun.svg";
import moon from "../assets/moon.png"

export default function DarkBouton({toggleTheme, theme}) {

  const handleToggleTheme = () => {
    toggleTheme();
  }

  return (
    <label className="label">
      <div className="label_text1">
      <img src={moon} alt="" />
      </div>
      <div className="toggle">
        <input className="toggle-state" type="checkbox" name="check" value="check" onChange={handleToggleTheme} checked={theme === 'light'} />
        <div className="indicator"></div>
      </div>
      <div className="label_text2">
        <img src={sun} alt="" />
      </div>
    </label>
  )
}
