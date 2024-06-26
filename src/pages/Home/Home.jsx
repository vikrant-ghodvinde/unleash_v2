import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <div className="bg-black text-white overflow-x-hidden">
      <Navbar />
      <Header />
      <Slider />
      <section className="relative py-20">
        <div className="container">
          <div className="relative min-h-[300px] md:min-h-[500px] flex items-center justify-center">
            <div className="absolute w-[300px] md:w-[500px] min-h-[300px] md:min-h-[500px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 mx-auto z-10 before:absolute before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-[55%] before:h-[55%] before:bg-secondary-gradient before:blur-[100px] before:-z-10 opacity-80">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border border-secondary rounded-full opacity-30"></div>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border border-secondary rounded-full opacity-30"></div>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] border border-secondary rounded-full opacity-30"></div>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-[40%] border border-secondary rounded-full opacity-30"></div>
            </div>
            <div className="relative w-full max-w-3xl mx-auto text-center z-10 flex flex-col items-center justify-center gap-y-4">
              <h2 className="text-2xl md:text-5xl font-bold">
                <span className="bg-primary-gradient text-transparent bg-clip-text">Unleash</span> = Your Creative Partner
              </h2>
              <p className="text-sm md:text-lg max-w-2xl">
                It empowers you to bring your social media vision to life with
                ease 🛠️ and flair 💫. With its intuitive design features 🎨,
                smart automation 🤖, and customizable options 🎛️. Dive into a
                world 🌍 where design meets simplicity 🍃, and let your
                creativity soar 🚀 without limits 🚫.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
