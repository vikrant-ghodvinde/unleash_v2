import { auth, googleAuthProvider } from "@/libs/firebase/config";
import { setLogin } from "@/libs/redux/reducers/authReducer";
import { signInWithPopup } from "firebase/auth";
import { useDispatch } from "react-redux";
import { toast } from "sonner";

const GoogleAuth = () => {
  const dispatch = useDispatch();
  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleAuthProvider)
      .then((result) => {
        dispatch(setLogin({ user: result.user }));
        toast("Success", {
          description: "Login successful.",
        });
      })
      .catch((error) => {
        toast("Error", { description: error.message });
        toast("Error", { description: error.customData.email });
        toast("Error", {
          description: googleAuthProvider.credentialFromError(error),
        });
      });
  };
  return (
    <button
      type="button"
      className="inline-flex items-center justify-center gap-2 w-full h-10 py-2 px-6 text-sm rounded-lg border border-dark text-dark"
      onClick={handleGoogleLogin}
    >
      <img src="/images/icons/google.png" alt="google" className="w-4 h-4" />
      Sign in with Google
    </button>
  );
};

export default GoogleAuth;
