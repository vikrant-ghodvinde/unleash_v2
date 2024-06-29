import { GetContext } from "@/libs/context/context";
import { getFormattedDateTime } from "@/libs/helper";
import { Switch } from "@/ui/shadcn/components/ui/switch";

const PostCount = () => {
    const { postCounts, setPostCounts, timeStamp, setTimeStamp } = GetContext();
  const handleTimeStamp = () => {
    setTimeStamp({
      ...timeStamp,
      visible: !timeStamp.visible,
      text: getFormattedDateTime(),
    });
  };
  return (
    <div className="relative">
      <div className="relative w-full">
        <div className="w-full flex items-center gap-x-1 mb-2">
          <span className="block text-xs font-medium uppercase">Post Counts</span>
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
        <div className="relative w-full flex flex-wrap items-center gap-1">
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
      <div className="relative mt-5 overflow-y-auto scrollbar-y">
        <div className="w-full flex items-center gap-x-1 mb-1">
          <span className="block text-xs font-medium uppercase">Time Stamp</span>
          <Switch
            value={timeStamp.visible}
            checked={timeStamp.visible}
            onCheckedChange={handleTimeStamp}
          />
        </div>
      </div>
    </div>
  );
};

export default PostCount;
