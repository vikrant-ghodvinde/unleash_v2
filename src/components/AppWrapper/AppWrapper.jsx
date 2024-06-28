/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import Sidebar from "../Sidebar/Sidebar";
import AppHeader from "../Header/AppHeader";
import { SettingIcon } from "@/icons";
import { useState } from "react";

const AppWrapper = ({ children, setOpen }) => {
  const { user } = useSelector((state) => state.auth);
  const [sidebar, setSidebar] = useState(false);
  return (
    <div className="relative w-full h-full min-h-screen bg-dots">
      <div className="relative w-full">{user ? <AppHeader /> : null}</div>
      <div
        className={`absolute top[73px] ${
          sidebar ? "left-0" : "-left-full"
        } lg:left-0 w-72 h-[calc(100vh-73px)] bg-zinc-900 overflow-y-auto scrollbar-y z-50 transition-all duration-300`}
      >
        <div
          className={`fixed block lg:hidden w-full h-full -z-[999] bg-black/50 ${
            sidebar ? "visible opacity-100" : "invisible opacity-0"
          } transition-all duration-1000`}
          onClick={() => setSidebar(false)}
        ></div>
        <div className="w-full z-50">
          <Sidebar setOpen={setOpen} />
        </div>
      </div>
      <div className="absolute top[73px] left-0 lg:left-72 w-full lg:w-[calc(100%-288px)] h-[calc(100vh-73px)] overflow-y-auto scrollbar-y">
        <div className="relative w-full flex lg:hidden items-center mb-12">
          <button
            type="button"
            className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-6 text-xs bg-zinc-800 text-white border-r border-r-zinc-950"
            onClick={() => setSidebar(true)}
          >
            <SettingIcon width={16} />
            Template Settings
          </button>
          <button
            type="button"
            className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-6 text-xs bg-zinc-800 text-white"
            onClick={() => setOpen(true)}
          >
            <SettingIcon width={16} />
            AI Templates
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default AppWrapper;
