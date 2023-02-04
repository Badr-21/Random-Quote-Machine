import { useState } from "react";

const useGenerateRandomColor = () => {
   let hexaArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
   let randomColor = [];
   const [color, setColor] = useState("");
   const generateColor = () => {
      for (let i = 0; i < 6; i++) {
         randomColor.push(hexaArr[Math.floor(Math.random() * hexaArr.length)]);
      }
      setColor(`#${randomColor.join("")}`);
   };
   return { color, generateColor };
};
export default useGenerateRandomColor;
