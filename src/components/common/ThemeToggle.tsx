import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} className={`btn btn-theme-toggle ${theme === "dark" ? "btn-light" : "btn-dark"}`}>
      {theme === "dark" ? "White" : "Dark"}
    </button>
  );
};

export default ThemeToggle;
