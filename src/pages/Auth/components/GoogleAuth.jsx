import { supabase } from "@/libs/supabase/config";

const GoogleAuth = () => {
  const handleGoogleLogin = () => {
    supabase.auth.signInWithOAuth({
      // provider: "linkedin_oidc",
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/editor`,
      },
    });
  };
  return (
    <button
      type="button"
      className="inline-flex items-center justify-center gap-2 w-full h-10 py-2 px-6 text-sm rounded-lg border border-dark text-dark"
      onClick={handleGoogleLogin}
    >
      <img src="/images/icons/google.png" alt="google" className="w-4 h-4" />
      Google
    </button>
  );
};

export default GoogleAuth;
