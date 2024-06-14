import { AlignLeftIcon } from "@/icons";

const Alignment = () => {
  return (
    <div className="relative group">
      <button
        type="button"
        className="w-10 h-10 inline-flex items-center justify-center text-white text-xs hover:bg-zinc-900"
      >
        <AlignLeftIcon width={16} />
      </button>
    </div>
  );
};

export default Alignment;
