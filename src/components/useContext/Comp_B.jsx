import React, { useContext } from "react";
import { ThemeContext } from "./UseContex_Comp";

export default function Comp_B() {
  const theme = useContext(ThemeContext);
  return (
    <>
      <p className={theme}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, eos?
        Unde adipisci optio officiis id, velit accusamus cupiditate aperiam iure
        laudantium, earum omnis nobis dolore necessitatibus libero placeat
        blanditiis. Officia!
      </p>
    </>
  );
}
