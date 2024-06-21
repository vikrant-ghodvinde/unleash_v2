import { supabase } from "@/libs/supabase/config";

const LinkedInAuth = () => {
  const handleLinkedInLogin = () => {
    supabase.auth.signInWithOAuth({
      provider: "linkedin_oidc",
      options: {
        redirectTo: `${window.location.origin}/editor`,
      },
    });
  };
  return (
    <button
      type="button"
      className="inline-flex items-center justify-center gap-2 w-full h-10 py-2 px-6 text-sm rounded-lg border border-dark text-dark"
      onClick={handleLinkedInLogin}
    >
      <img src="/images/icons/linkedin.png" alt="google" className="w-4 h-4" />
      LinkedIn
    </button>
  );
};

export default LinkedInAuth;
