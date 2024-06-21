import { GetContext } from "@/libs/context/context";

const PostContent = () => {
  const { postContent, setPostContent } = GetContext();
  return (
    <div className="relative w-full">
      <label className="block text-xs font-medium uppercase mb-2">
        Post Content
      </label>
      <textarea
        type="text"
        className="w-full h-32 p-2 text-xs text-white border border-zinc-700 bg-transparent outline-none rounded-md resize-none scrollbar-y"
        value={postContent}
        onChange={(e) => setPostContent(e.target.value)}
      />
    </div>
  );
};

export default PostContent;
