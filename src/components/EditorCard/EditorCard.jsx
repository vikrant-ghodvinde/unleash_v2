/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import TemplateOne from "../Templates/TemplateOne/TemplateOne";
import FontSize from "./components/FontSize";
import Alignment from "./components/Alignment";
import Fonts from "./components/Fonts";
import Backgrounds from "./components/Backgrounds";
import Colors from "./components/Colors";
import { useSelector } from "react-redux";
import { backgroundConfiguration } from "./helper";

const EditorCard = ({ canvasRef, loading }) => {
  const {
    primaryBackground,
    secondaryBackground,
    swapGradient,
    backgroundType,
    imageBackground,
    backgroundImageOpacity,
  } = useSelector((state) => state.backgrounds);

  // console.log(backgroundImageOpacity[0]);
  return (
    <div
      role="button"
      ref={canvasRef}
      className="shrink-0 relative group w-[22rem] sm:w-[30rem] aspect-square flex items-center justify-center p-5 sm:p-10 outline-none z-10"
      style={{
        background: backgroundConfiguration(
          backgroundType,
          primaryBackground,
          secondaryBackground,
          swapGradient
        ),
      }}
    >
      {/* IMAGE BACKGROUND */}
      <div
        className="absolute top-0 left-0 w-full h-full -z-10"
        style={{
          backgroundImage: `url(${imageBackground})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
          opacity: backgroundImageOpacity,
        }}
      ></div>

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
