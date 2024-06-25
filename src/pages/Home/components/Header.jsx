import { Link } from "react-router-dom";

const Header = () => {
  return (
    <section className="relative py-20">
      <div className="container">
        <div className="relative w-full h-full text-center flex items-center justify-center z-10 before:absolute before:w-[70%] before:h-[100%] before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-[100%] before:bg-primary-gradient before:-z-10 before:blur-[100px] before:opacity-40">
          <div className="w-full max-w-4xl mx-auto">
            <h1 className="text-2xl md:text-5xl font-bold mb-10 leading-snug md:leading-snug">
              <span className="relative before:absolute before:w-full before:h-1 before:top-full before:left-1/2 before:-translate-x-1/2 before:bg-primary-gradient before:rounded-[100%]">
                Unleash
              </span>{" "}
              Your Creativity: Effortless Design, Unforgettable Posts
            </h1>
            <p className="text-sm md:text-lg mb-8">
              The revolutionary tool 🚀 that transforms your ideas 💡 into
              unique and captivating social media graphics 🎨 with just a few
              clicks. Designed for creators who value innovation 🔍 and time ⏰,
              Unleash empowers you to stand out effortlessly ✨. Elevate your
              social media presence today 📆 and make every post a masterpiece
              🖼.
            </p>
            <Link to="/editor" className="btn btn-primary">
              LAUNCH UNLEASH
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
