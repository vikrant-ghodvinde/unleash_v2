import { CodeIcon } from "@/icons";
import { GetContext } from "@/libs/context/context";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/ui/shadcn/components/ui/tooltip";
import { useRef } from "react";

const PostContent = () => {
  const inputRef = useRef(null);
  const { postContent, setPostContent } = GetContext();
  const handleColorInsertion = () => {
    const inputElement = inputRef.current;
    const startPos = inputElement.selectionStart;
    const endPos = inputElement.selectionEnd;
    const selectedText = postContent.substring(startPos, endPos);
    const newText = `<c>${selectedText}</c>`;

    const updatedText =
      postContent.substring(0, startPos) +
      newText +
      postContent.substring(endPos);

    // Update the state with a new object
    setPostContent(updatedText);
  };
  return (
    <div className="relative w-full">
      <label className="block text-xs font-medium uppercase mb-2">
        Post Content
      </label>
      <div className="border border-zinc-700 rounded-md">
        <div className="w-full h-7 border-b border-b-zinc-700">
          <Tooltip>
            <TooltipTrigger asChild>
              <span
                role="button"
                className="w-7 h-7 inline-flex items-center justify-center border-r border-r-zinc-700"
                onClick={handleColorInsertion}
              >
                <CodeIcon width={12} />
              </span>
            </TooltipTrigger>
            <TooltipContent>Insert Highlight</TooltipContent>
          </Tooltip>
        </div>
        <textarea
          type="text"
          ref={inputRef}
          className="w-full h-32 p-2 text-xs text-white border-none bg-transparent outline-none resize-none scrollbar-y"
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
        />
      </div>
    </div>
  );
};

export default PostContent;
