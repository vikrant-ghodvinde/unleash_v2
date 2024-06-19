import { SignOutIcon } from "@/icons";
import { setLogout } from "@/libs/redux/reducers/authReducer";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/ui/shadcn/components/ui/avatar";
import { useDispatch, useSelector } from "react-redux";

const AppHeader = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  console.log(user);
  return (
    <header className="relative bg-dots z-[999]">
      <div className="container">
        <div className="w-full flex items-center justify-between py-3">
          <div className="inline-flex items-center gap-x-2">
            <img src="/images/logo-colored.png" alt="logo" className="w-14" />
            <h3 className="text-white text-lg font-bold">Unleash</h3>
          </div>
          <div className="relative group z-50">
            <button type="button">
              <Avatar>
                <AvatarImage src={user?.photoURL} alt={user?.displayName} />
                <AvatarFallback>{`${user?.displayName
                  .split(" ")[0]
                  .slice(0, 1)} ${user?.displayName
                  .split(" ")[1]
                  .slice(0, 1)}`}</AvatarFallback>
              </Avatar>
            </button>
            <ul className="absolute top-full mt-1 bg-white border border-zinc-200 shadow-md shadow-black/10 p-1 rounded-lg opacity-0 invisible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-300">
              <li
                role="button"
                className="text-xs py-1.5 px-2 hover:bg-zinc-100 rounded whitespace-nowrap inline-flex items-center gap-x-1.5"
                onClick={() => dispatch(setLogout())}
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
