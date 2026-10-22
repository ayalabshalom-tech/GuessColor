

import ColorButton from "./ColorButton";

function ColorList({ colors, target }) {
  return (
    <div>
     {colors.map((color, index) => {
        const isTarget = color === target;
        return (
          <ColorButton 
            key={index} 
            color={color} 
            isTarget={isTarget} 
          />
        );
      })}
    </div>
  );
}

export default ColorList;
