import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="relative border-b border-b-white/20 z-50">
      <div className="container">
        <div className="flex items-center justify-between py-3">
          <div className="inline-flex flex-col items-center justify-center w-[70px]">
            <img src="/images/logo-colored.png" alt="Unleash by Erience" className="w-full" />
            <span className="uppercase font-bold bg-primary-gradient text-transparent bg-clip-text">
              Unleash
            </span>
          </div>
          <div className="flex items-center">
            <Link to="/editor" className="btn btn-primary">
              LAUNCH UNLEASH
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
