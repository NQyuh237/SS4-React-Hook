import React, { createContext, useState } from "react";
import Comp_A from "./Comp_A";
// comp_A => comp_B => comp_C
// A truyền B qua props
// B truyền C qua props

// chỉ khai báo context ở comp cha
export const ThemeContext = createContext();

export default function UseContex_Comp() {
  const [theme, setTheme] = useState("light");

  const handleChageTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={theme}>
      <>
        <button onClick={handleChageTheme}>Change theme</button>
        <Comp_A/>
      </>
    </ThemeContext.Provider>
  );
}
