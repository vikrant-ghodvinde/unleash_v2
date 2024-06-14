import { Button } from "@/ui/shadcn/components/ui/button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Link to="/editor">
        <Button>Enter App</Button>
      </Link>
    </div>
  );
};

export default Home;
