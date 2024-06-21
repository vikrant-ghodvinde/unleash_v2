import { SignOutIcon } from "@/icons";
import { setLogout } from "@/libs/redux/reducers/authReducer";
import { supabase } from "@/libs/supabase/config";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/ui/shadcn/components/ui/avatar";
import { useDispatch, useSelector } from "react-redux";

const AppHeader = () => {
  const dispatch = useDispatch();
  const { userName, userImage } = useSelector((state) => state.auth);
  const uName = userName
    ? `${userName?.split(" ")[0].slice(0, 1)}${userName
        ?.split(" ")[1]
        .slice(0, 1)}`
    : "";

  const signOut = () => {
    supabase.auth.signOut();
    dispatch(setLogout());
  };
  return (
    <header className="relative w-full bg-black shadow-lg shadow-zinc-800/50 h-[73px] z-[999]">
      <div className="container">
        <div className="w-full flex items-center justify-between py-3">
          <div className="inline-flex items-center gap-x-2">
            <img src="/images/logo-colored.png" alt="logo" className="w-14" />
            <h3 className="text-white text-lg font-bold">Unleash</h3>
          </div>
          <div className="relative group z-50">
            <button type="button">
              <Avatar>
                <AvatarImage src={userImage} alt={userName} />
                <AvatarFallback className="text-sm font-bold">
                  {uName}
                </AvatarFallback>
              </Avatar>
            </button>
            <ul className="absolute top-full -left-14 mt-1 bg-white border border-zinc-200 shadow-md shadow-black/10 p-1 rounded-lg opacity-0 invisible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-300">
              <li
                role="button"
                className="text-xs py-1.5 px-2 hover:bg-zinc-100 rounded whitespace-nowrap inline-flex items-center gap-x-1.5"
                onClick={signOut}
              >
                <SignOutIcon width={14} /> Sign Out
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
