import { UserDetailsIcon } from "@/icons";
import { GetContext } from "@/libs/context/context";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/ui/shadcn/components/ui/popover";
import { Switch } from "@/ui/shadcn/components/ui/switch";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/ui/shadcn/components/ui/tooltip";

const UserDetails = () => {
  const { profileName, setProfileName, userName, setUserName } = GetContext();
  return (
    <Popover>
      <Tooltip>
        <TooltipTrigger>
          <PopoverTrigger asChild>
            <span
              role="button"
              className="w-10 h-10 inline-flex items-center justify-center text-white text-xs bg-zinc-800 hover:bg-zinc-900"
            >
              <UserDetailsIcon width={16} />
            </span>
          </PopoverTrigger>
          <TooltipContent>Profile Details</TooltipContent>
        </TooltipTrigger>
      </Tooltip>
      <PopoverContent>
        <div className="relative w-80 max-h-[450px] p-2 overflow-y-auto scrollbar-y">
          <div className="grid grid-cols-12 gap-y-4">
            <div className="relative col-span-12">
              <div className="w-full flex items-center gap-x-1 mb-1.5">
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
            <div className="relative col-span-12">
              <div className="w-full flex items-center gap-x-1 mb-1.5">
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
            <div className="relative col-span-12">
              <div className="w-full flex items-center gap-x-1">
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
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default UserDetails;
