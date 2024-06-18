import { UploadIcon, UserImageIcon } from "@/icons";
import { GetContext } from "@/libs/context/context";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/ui/shadcn/components/ui/popover";
import { Switch } from "@/ui/shadcn/components/ui/switch";

const UserImage = () => {
  const { userImage, setUserImage } = GetContext();
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
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          type="button"
          title="User Image"
          className={`text-[10px] w-10 h-10 rounded-md inline-flex items-center justify-center text-white text-xs hover:bg-zinc-900`}
        >
          <UserImageIcon width={16} />
        </button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="relative w-80 max-h-[450px] p-2 overflow-y-auto scrollbar-y">
          <div className="w-full flex items-center gap-x-1 mb-1.5">
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
              <UploadIcon width={16} />
              {userImage.image ? "Change Image" : "Upload Image"}
            </span>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default UserImage;
