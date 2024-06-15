/* eslint-disable react/prop-types */
import { HexColorPicker } from "react-colorful";

const ColorPicker = ({ color, setColor }) => {
  return (
    <div className="relative picker">
      <div className="relative p-2">
        <HexColorPicker color={color} onChange={setColor} />
      </div>
      <div className="color-input">
        <input
          type="text"
          placeholder="#000000"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </div>
    </div>
  );
};

export default ColorPicker;
