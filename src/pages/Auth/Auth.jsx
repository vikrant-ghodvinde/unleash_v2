import GoogleAuth from "./components/GoogleAuth";
import LinkedInAuth from "./components/LinkedInAuth";
// import PhoneAuth from "./components/PhoneAuth";

const Auth = () => {
  return (
    <section className="relative bg-[url('/images/pxfuel.jpg')] bg-cover">
      <div className="container">
        <div className="w-full min-h-screen py-10 flex items-center">
          <div className="relative mx-auto grid grid-cols-12 gap-x-5 gap-y-10">
            <div className="relative col-span-12 lg:col-span-8">
              <div className="w-full h-full flex items-center justify-center">
                <div className="inline-flex items-center gap-2">
                  <img src="/images/logo.png" alt="unleash" className="w-16" />
                  <h3 className="text-2xl font-black">Unleash</h3>
                </div>
              </div>
            </div>
            <div className="relative col-span-12 lg:col-span-4">
              <div className="relative w-full py-6 sm:py-10 px-2 sm:px-5 rounded-xl bg-white shadow-full shadow-black/10">
                <div className="p-4">
                  <div className="text-center">
                    <h2 className="text-xl font-bold">Sign In</h2>
                    <p className="text-sm text-zinc-600 font-light">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Facere, deleniti?
                    </p>
                  </div>
                  <div className="grid grid-cols-12 gap-y-8 gap-x-4 mt-8">
                    {/* <div className="col-span-12">
                      <PhoneAuth />
                    </div>
                    <div className="col-span-12">
                      <div className="flex items-center justify-center">
                        <div className="flex-1 w-full h-1 border-b border-zinc-300"></div>
                        <div className="flex-1 text-center text-sm">
                          Or with
                        </div>
                        <div className="flex-1 w-full h-1 border-b border-zinc-300"></div>
                      </div>
                    </div> */}
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
