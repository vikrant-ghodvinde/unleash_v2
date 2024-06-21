import { BardIcon } from "@/icons";
import PostContent from "./components/PostContent";
import TemplateType from "./components/TemplateType";

const Sidebar = () => {
  return (
    <div className="relative w-full h-full text-white">
      <div className="grid grid-cols-12 gap-2">
        <div className="relative col-span-12">
          <div className="relative w-full p-5 bg-black">
            <div className="grid grid-cols-1 gap-y-5">
              <div className="flex items-center justify-between">
                <h6 className="text-sm font-bold">AI Template Generator</h6>
              </div>
              <div className="relative">
                <button
                  type="button"
                  className="inline-flex items-center justify-center gap-2 py-3 px-6 text-xs bg-zinc-800 hover:bg-zinc-900 w-full rounded-md transition-all duration-300"
                >
                  <BardIcon width={16} />
                  Generate Template
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative col-span-12">
          <div className="relative w-full p-5 bg-black">
            <div className="grid grid-cols-1 gap-y-5">
              <div className="flex items-center justify-between">
                <h6 className="text-sm font-bold">Template Settings</h6>
              </div>
              <div className="relative">
                <TemplateType />
              </div>
              <div className="relative">
                <PostContent />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
