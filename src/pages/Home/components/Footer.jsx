import { LinkedInIcon, TwitterIcon } from "@/icons";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="pt-16 pb-8">
      <div className="container">
        <div className="relative pb-5 border-b border-b-white/20 text-center md:text-start">
          <img
            src="/images/logo-colored.png"
            alt="Unleash by Erience"
            className="w-16"
          />
        </div>
        <div className="relative pt-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-5">
            <p>&copy; {new Date().getFullYear()} Unleash {t("ByErience")}.</p>
            <div className="flex items-center gap-3">
              <Link
                to="https://twitter.com/erienceINT"
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-9 h-9 rounded-full bg-white/15 text-white/50 hover:text-primary flex items-center justify-center transition-all duration-300"
              >
                <TwitterIcon width={16} />
              </Link>
              <Link
                to="https://in.linkedin.com/company/erience"
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-9 h-9 rounded-full bg-white/15 text-white/50 hover:text-primary flex items-center justify-center transition-all duration-300"
              >
                <LinkedInIcon width={16} />
              </Link>
            </div>
          </div>
          <div className="relative pt-8 text-center">
            <p>
            {t("MadeWith")}{" "}
              <Link
                to="https://erience.co/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary"
              >
                Erience Solutions
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
