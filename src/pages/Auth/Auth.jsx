import { Link } from "react-router-dom";
import GoogleAuth from "./components/GoogleAuth";
import LinkedInAuth from "./components/LinkedInAuth";

const Auth = () => {
  return (
    <section className="relative bg-black bg-cover text-white">
      <div className="container">
        <div className="w-full min-h-screen flex items-center justify-center py-8">
          <div className="grid grid-cols-12 items-center gap-x-5 gap-y-10">
            <div className="col-span-12 lg:col-span-8">
              <div className="relative w-full h-full text-center flex items-center justify-center z-10 before:absolute before:w-[70%] before:h-[70%] before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-[100%] before:bg-primary-gradient before:-z-10 before:blur-[100px] before:opacity-40">
                <div className="flex flex-col items-center justify-center py-12">
                  <h1 className="text-2xl md:text-5xl font-bold mb-8 leading-snug md:leading-snug">
                    Sign In with{" "}
                    <span className="relative before:absolute before:w-full before:h-1 before:top-full before:left-1/2 before:-translate-x-1/2 before:bg-primary-gradient before:rounded-[100%]">
                      Unleash
                    </span>
                  </h1>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Placeat, necessitatibus!
                  </p>
                  <Link to="/" className="btn btn-primary">
                    Go Back
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative col-span-12 lg:col-span-4">
              <div className="relative w-full py-6 sm:py-10 px-2 sm:px-5 rounded-xl bg-white shadow-full shadow-black/10">
                <div className="p-4">
                  <div className="text-center">
                    <h2 className="text-xl text-black font-bold">Sign In</h2>
                    <p className="text-sm text-zinc-600 font-light">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Facere, deleniti?
                    </p>
                  </div>
                  <div className="grid grid-cols-12 gap-y-8 gap-x-4 mt-8">
                    <div className="col-span-12 sm:col-span-6">
                      <GoogleAuth />
                    </div>
                    <div className="col-span-12 sm:col-span-6">
                      <LinkedInAuth />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Auth;
