import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TextIcon,
  TwitterIcon,
  UploadIcon,
} from "@/icons";
import { GetContext } from "@/libs/context/context";
import { getFormattedDateTime } from "@/libs/helper";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/ui/shadcn/components/ui/popover";
import { Switch } from "@/ui/shadcn/components/ui/switch";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/ui/shadcn/components/ui/toggle-group";

const Content = () => {
  const {
    userImage,
    setUserImage,
    socialMedia,
    profileName,
    setProfileName,
    userName,
    setUserName,
    setSocialMedia,
    postContent,
    setPostContent,
    postCounts,
    setPostCounts,
    timeStamp,
    setTimeStamp,
  } = GetContext();
  const handleUserImage = (e) => {
    const image = e.target.files[0];
    console.log(image);
    if (image) {
      const imageUrl = URL.createObjectURL(image);
      setUserImage({ ...userImage, image: imageUrl });
    } else {
      console.error("No file selected");
    }
  };

  const handleTimeStamp = () => {
    setTimeStamp({
      ...timeStamp,
      visible: !timeStamp.visible,
      text: getFormattedDateTime(),
    });
  };
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          type="button"
          className="w-10 h-10 inline-flex items-center justify-center text-white text-xs hover:bg-zinc-900"
        >
          <TextIcon width={16} />
        </button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="grid grid-cols-12 w-80 h-[450px] overflow-y-auto scrollbar-y">
          <div className="relative col-span-12 p-2">
            <div className="w-full flex flex-col gap-1">
              <div className="w-full flex items-center gap-x-1 mb-1">
                <span className="text-xs mb-0.5">User Image</span>
                <Switch
                  value={userImage.visible}
                  checked={userImage.visible}
                  onCheckedChange={() =>
                    setUserImage({
                      ...userImage,
                      visible: !userImage.visible,
                    })
                  }
                />
              </div>
              <div className="relative h-10 flex items-center justify-center rounded-md bg-zinc-900">
                <input
                  type="file"
                  onChange={handleUserImage}
                  className="absolute w-full h-full left-0 top-0 opacity-0 cursor-pointer"
                />
                <span className="text-xs inline-flex items-center gap-1.5">
                  <UploadIcon width={16} /> Upload Image
                </span>
              </div>
            </div>
          </div>
          <div className="relative col-span-12 px-2 py-1">
            <div className="w-ful flex flex-col gap-1">
              <div className="relative w-full h-10">
                <ToggleGroup
                  type="multiple"
                  value={socialMedia}
                  onValueChange={(value) => setSocialMedia(value)}
                >
                  <ToggleGroupItem value="facebook">
                    <FacebookIcon width={16} />
                  </ToggleGroupItem>
                  <ToggleGroupItem value="instagram">
                    <InstagramIcon width={16} />
                  </ToggleGroupItem>
                  <ToggleGroupItem value="twitter">
                    <TwitterIcon width={16} />
                  </ToggleGroupItem>
                  <ToggleGroupItem value="linkedin">
                    <LinkedInIcon width={16} />
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>
            </div>
          </div>
          <div className="relative col-span-12 px-2 py-1">
            <div className="w-ful flex flex-col gap-1">
              <div className="w-full flex items-center gap-x-1 mb-1">
                <span className="text-xs mb-0.5">Profile Name</span>
              </div>
              <div className="relative w-full">
                <input
                  type="text"
                  className="w-full h-8 p-2 text-xs text-white border border-zinc-700 bg-transparent outline-none rounded-md"
                  value={profileName.text}
                  onChange={(e) =>
                    setProfileName({ ...profileName, text: e.target.value })
                  }
                />
              </div>
            </div>
          </div>
          <div className="relative col-span-12 px-2 py-1">
            <div className="w-full flex flex-col gap-1">
              <div className="w-full flex items-center gap-x-1 mb-1">
                <span className="text-xs mb-0.5">User name</span>
                <Switch
                  value={userName.visible}
                  checked={userName.visible}
                  onCheckedChange={() =>
                    setUserName({
                      ...userName,
                      visible: !userName.visible,
                    })
                  }
                />
              </div>
              <div className="relative w-full">
                <input
                  type="text"
                  className="w-full h-8 p-2 text-xs text-white border border-zinc-700 bg-transparent outline-none rounded-md"
                  value={userName.text}
                  onChange={(e) =>
                    setUserName({ ...userName, text: e.target.value })
                  }
                />
              </div>
            </div>
          </div>
          <div className="relative col-span-12 px-2 py-1">
            <div className="w-full flex flex-col gap-1">
              <div className="w-full flex items-center gap-x-1 mb-1">
                <span className="text-xs mb-0.5">Post Content</span>
              </div>
              <div className="relative w-full">
                <textarea
                  type="text"
                  className="w-full h-20 p-2 text-xs text-white border border-zinc-700 bg-transparent outline-none rounded-md resize-none scrollbar-y"
                  value={postContent}
                  onChange={(e) => setPostContent(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="relative col-span-12 px-2 py-1">
            <div className="w-full flex flex-col gap-1">
              <div className="w-full flex items-center gap-x-1 mb-1">
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
                    type="text"
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
                    type="text"
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
          <div className="relative col-span-12 px-2 py-1">
            <div className="w-full flex flex-col gap-1">
              <div className="w-full flex items-center gap-x-1 mb-1">
                <span className="text-xs mb-0.5">Verified Profile</span>
                <Switch
                  value={profileName.verified}
                  checked={profileName.verified}
                  onCheckedChange={() =>
                    setProfileName({
                      ...profileName,
                      verified: !profileName.verified,
                    })
                  }
                />
              </div>
            </div>
          </div>
          <div className="relative col-span-12 px-2 pt-1 pb-2">
            <div className="w-full flex flex-col gap-1">
              <div className="w-full flex items-center gap-x-1 mb-1">
                <span className="text-xs mb-0.5">Time Stamp</span>
                <Switch
                  value={timeStamp.visible}
                  checked={timeStamp.visible}
                  onCheckedChange={handleTimeStamp}
                />
              </div>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default Content;
