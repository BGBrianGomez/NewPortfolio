import { useEffect, useState } from "react";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

function SwitchDarkMode({ setRefreshMode }) {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    setRefreshMode(prev => !prev);
  }, [theme]);

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [theme]);

  const handleChangeTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  return (
    <div className="flex items-center justify-center">
      <label htmlFor="toggle" className="items-center cursor-pointer hidden sm:block">
        <div className="relative">
          <input
            id="toggle"
            type="checkbox"
            className="sr-only"
            checked={theme === 'dark'}
            onChange={handleChangeTheme}
          />
          <div className={`block bg-slate-400 dark:bg-slate-800 w-28 h-8 rounded-lg transition`}></div>
          <div className={`dot absolute left-1 top-1 w-6 h-6 transition-transform duration-300 ${theme === 'dark' ? 'translate-x-20' : 'translate-x-0'}`}>
            {theme === 'dark' ? <DarkModeIcon color='primary' /> : <WbSunnyIcon sx={{ color: "yellow" }} />}
          </div>
        </div>
      </label>
      <label htmlFor="toogle" className="block sm:hidden">
        <button className="bg-slate-400 p-1 rounded-md dark:bg-slate-800 flex items-center justify-center" onClick={handleChangeTheme}>
          {theme === 'dark' ? <DarkModeIcon color='primary' /> : <WbSunnyIcon sx={{ color: "yellow" }}/>} <p className="dark:text-white px-1">Cambiar modo</p>
        </button>
      </label>
    </div>
  );
}

export default SwitchDarkMode;
