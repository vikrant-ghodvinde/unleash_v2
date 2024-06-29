import { TextSnippetIcon } from "@/icons";
import { GetContext } from "@/libs/context/context";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/ui/shadcn/components/ui/popover";
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
    const newText = `<B>${selectedText}</B>`;

    const updatedText =
      postContent.substring(0, startPos) +
      newText +
      postContent.substring(endPos);

    // Update the state with a new object
    setPostContent(updatedText);
  };
  return (
    <Popover>
      <Tooltip>
        <TooltipTrigger>
          <PopoverTrigger asChild>
            <span
              role="button"
              className="w-10 h-10 inline-flex items-center justify-center text-white text-xs bg-zinc-800 hover:bg-zinc-900"
            >
              <TextSnippetIcon width={16} />
            </span>
          </PopoverTrigger>
        </TooltipTrigger>
        <TooltipContent>Post Content</TooltipContent>
      </Tooltip>
      <PopoverContent>
        <div className="relative w-80 max-h-[450px] p-2 overflow-y-auto scrollbar-y">
          <div className="relative w-full">
            <div className="w-full flex items-center gap-x-1 mb-1.5">
              <span className="text-xs mb-0.5">Post Content</span>
            </div>
            <div className="relative w-full">
              <div className="border border-zinc-700 rounded-md">
                <div className="w-full h-7 border-b border-b-zinc-700">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span
                        role="button"
                        className="w-7 h-7 font-bold inline-flex items-center justify-center border-r border-r-zinc-700"
                        onClick={handleColorInsertion}
                      >
                        B
                      </span>
                    </TooltipTrigger>
                    <TooltipContent>Insert Highlight</TooltipContent>
                  </Tooltip>
                </div>
                <textarea
                  type="text"
                  ref={inputRef}
                  className="w-full h-28 p-2 text-xs text-white border-none bg-transparent outline-none resize-none scrollbar-y"
                  value={postContent}
                  onChange={(e) => setPostContent(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default PostContent;
