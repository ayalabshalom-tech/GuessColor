import { useState } from "react";

function ColorButton({ color, isTarget }) {
    
const [borderColor, setBorderColor] = useState("black")

function handleClick(){
    if(isTarget){setBorderColor('green')}
    else{setBorderColor('red')}

}

  return (
    <button 

    onClick={handleClick}
      style={{ 
        backgroundColor: color, 
         width: '80px', 
        height: '80px', 
        margin: '5px',
        border: `3.5px solid ${borderColor}`,
        borderRadius: '8px',
        cursor: 'pointer'
      }}
    >
     
    </button>
  );
}

export default ColorButton;


