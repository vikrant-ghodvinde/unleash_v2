import EditorCard from "@/components/EditorCard/EditorCard";
import { Button } from "@/ui/shadcn/components/ui/button";
import { useMediaQuery } from "@mui/material";
import html2canvas from "html2canvas";
import { useRef, useState } from "react";

const Editor = () => {
  const canvasRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const matches = useMediaQuery("(min-width:640px)");
  const handleDownload = () => {
    setLoading(true);
    console.log("started");
    try {
      if (canvasRef.current === null) {
        setLoading(false);
        return;
      }

      html2canvas(canvasRef.current, {
        // scale: 10, Highest
        scale: !matches ? 3.07 : 2.25, // Responsive
        logging: false,
        useCORS: true,
      }).then((canvas) => {
        const dataUrl = canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = "unleash-post.png";
        link.click();
      });
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="relative bg-dots">
      <div className="w-full min-h-screen px-1 sm:px-3 flex flex-col items-center justify-center overflow-x-auto">
        <EditorCard canvasRef={canvasRef} loading={loading} />
        <div className="mt-20">
          <Button variant="outline" onClick={handleDownload}>
            Download
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Editor;
