import { BubbleChartIcon } from "@/icons";
import { GetContext } from "@/libs/context/context";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/ui/shadcn/components/ui/popover";
import { Switch } from "@/ui/shadcn/components/ui/switch";

const PostCount = () => {
  const { postCounts, setPostCounts } = GetContext();
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          type="button"
          title="Post Counts"
          className={`text-[10px] w-10 h-10 rounded-md inline-flex items-center justify-center text-white text-xs hover:bg-zinc-900`}
        >
          <BubbleChartIcon width={16} />
        </button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="relative w-80 max-h-[450px] p-2 overflow-y-auto scrollbar-y">
          <div className="relative w-full">
            <div className="w-full flex items-center gap-x-1 mb-1.5">
              <span className="text-xs mb-0.5">Post Counts</span>
              <Switch
                value={postCounts.visible}
                checked={postCounts.visible}
                onCheckedChange={() =>
                  setPostCounts({
                    ...postCounts,
                    visible: !postCounts.visible,
                  })
                }
              />
            </div>
            <div className="relative w-full flex items-center gap-1">
              <div className="w-full flex-1">
                <label className="text-xs mb-0.5">Likes</label>
                <input
                  type="number"
                  className="w-full h-8 p-2 text-xs text-white border border-zinc-700 bg-transparent outline-none rounded-md"
                  value={postCounts.likes}
                  onChange={(e) =>
                    setPostCounts({ ...postCounts, likes: e.target.value })
                  }
                />
              </div>
              <div className="w-full flex-1">
                <label className="text-xs mb-0.5">Replies</label>
                <input
                  type="number"
                  className="w-full h-8 p-2 text-xs text-white border border-zinc-700 bg-transparent outline-none rounded-md"
                  value={postCounts.replies}
                  onChange={(e) =>
                    setPostCounts({ ...postCounts, replies: e.target.value })
                  }
                />
              </div>
              <div className="w-full flex-1">
                <label className="text-xs mb-0.5">Shares</label>
                <input
                  type="number"
                  className="w-full h-8 p-2 text-xs text-white border border-zinc-700 bg-transparent outline-none rounded-md"
                  value={postCounts.shares}
                  onChange={(e) =>
                    setPostCounts({ ...postCounts, shares: e.target.value })
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default PostCount;
