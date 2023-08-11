import { useContext } from "react";
import { ThemeContext } from "../App";
import {FaMoon,FaSun} from 'react-icons/fa'

export default function ThemeButton() {
    const { theme, setTheme } = useContext(ThemeContext);
    return (
        <button className={`theme theme-${theme}`} onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {
                theme === 'light'? <FaSun size={20} color="yellow"/>:<FaMoon size={20} color="white"/>
            }
        </button >
    );
}
