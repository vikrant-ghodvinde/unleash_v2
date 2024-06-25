/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import TemplateOne from "../Templates/TemplateOne/TemplateOne";
import FontSize from "./components/FontSize";
import Alignment from "./components/Alignment";
import Fonts from "./components/Fonts";
import Backgrounds from "./components/Backgrounds";
import Colors from "./components/Colors";
import { useSelector } from "react-redux";
import { aspectRatioConfiguration, backgroundConfiguration } from "./helper";
import CardCorners from "./components/CardCorners";
import UserDetails from "./components/UserDetails";
import UserImage from "./components/UserImage";
import SocialMedia from "./components/SocialMedia";
import PostCount from "./components/PostCount";
import RandomTemplate from "./components/RandomTemplate";
import PostContent from "./components/PostContent";
import { useMediaQuery } from "@mui/material";

const EditorCard = ({ canvasRef, loading }) => {
  const {
    primaryBackground,
    secondaryBackground,
    swapGradient,
    backgroundType,
    imageBackground,
    backgroundImageOpacity,
  } = useSelector((state) => state.backgrounds);

  const { templateType } = useSelector((state) => state.template);

  const isDesktop = useMediaQuery("(min-width:1024px)");
  return (
    <div
      role="button"
      ref={canvasRef}
      className="shrink-0 relative group w-[22rem] sm:w-[30rem] flex items-center justify-center p-5 sm:p-10 outline-none z-10"
      style={{
        background: backgroundConfiguration(
          backgroundType,
          primaryBackground,
          secondaryBackground,
          swapGradient
        ),
        aspectRatio: aspectRatioConfiguration(templateType),
      }}
    >
      {/* IMAGE BACKGROUND */}
      <div
        className="absolute top-0 left-0 w-full h-full -z-10"
        style={{
          backgroundImage: `url(${imageBackground})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          opacity: backgroundImageOpacity,
        }}
      ></div>

      {/* POST CARD */}
      <TemplateOne />

      {/* WATERMARK */}
      <div className="absolute bottom-0 left-0 w-full h-10 bg-black/40 flex items-center justify-center select-none">
        <div className="flex items-center justify-center gap-1">
          <span className="text-white text-xs font-normal">Created using</span>
          <div className="flex items-center justify-center gap-1">
            <span className="text-white text-xs font-bold">Unleash</span>
            <img src="/images/logo-white.svg" alt="" className="w-7" />
          </div>
        </div>
      </div>

      {/* CONFIGURATIONS */}
      <div className="absolute bottom-0 inset-x-0 translate-y-full flex transition-all opacity-100 group-hover:opacity-100">
        <div className="flex items-center flex-wrap">
          <UserImage />
          <UserDetails />
          {!isDesktop && <PostContent />}
          <SocialMedia />
          <PostCount />
          <FontSize />
          <Alignment />
          <Fonts />
          <Backgrounds />
          <Colors />
          <CardCorners />
          <RandomTemplate />
        </div>
      </div>
    </div>
  );
};

export default EditorCard;
