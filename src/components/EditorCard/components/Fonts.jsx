import { FontsIcon } from "@/icons";

const Fonts = () => {
  return (
    <div className="relative group">
      <button
        type="button"
        className="w-10 h-10 inline-flex items-center justify-center text-white text-xs hover:bg-zinc-900"
      >
        <FontsIcon width={16} />
      </button>
    </div>
  );
};

export default Fonts;
