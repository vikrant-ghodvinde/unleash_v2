/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import TemplateOne from "../Templates/TemplateOne/TemplateOne";
import FontSize from "./components/FontSize";
import Alignment from "./components/Alignment";
import Fonts from "./components/Fonts";
import Backgrounds from "./components/Backgrounds";
import Colors from "./components/Colors";

const EditorCard = ({ canvasRef, loading }) => {
  return (
    <div
      className="shrink-0 relative group w-[22rem] sm:w-[30rem] aspect-square bg-gray-600 flex items-center justify-center p-5 sm:p-10 outline-none"
      role="button"
      ref={canvasRef}
    >
      {/* EXPORT POST */}
      {/* <div className="absolute -top-10 left-0 transition-opacity opacity-0 group-hover:opacity-100"></div> */}

      {/* POST CARD */}
      <TemplateOne />

      {/* CONFIGURATIONS */}
      <div className="absolute bottom-0 inset-x-0 translate-y-full flex transition-all opacity-100 group-hover:opacity-100">
        <div className="flex items-center bg-zinc-800">
          <FontSize />
          <Alignment />
          <Fonts />
          <Backgrounds />
          <Colors />
        </div>
      </div>
    </div>
  );
};

export default EditorCard;
