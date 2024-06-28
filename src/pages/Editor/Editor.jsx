import AITemplates from "@/components/AITemplates/AITemplates";
import AppWrapper from "@/components/AppWrapper/AppWrapper";
import EditorCard from "@/components/EditorCard/EditorCard";
import ExportPostDialog from "@/components/ExportPostDialog/ExportPostDialog";
import { useMediaQuery } from "@mui/material";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useRef, useState } from "react";
import { toast } from "sonner";

const Editor = () => {
  const canvasRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [templateGenerator, setTemplateGenerator] = useState(false);
  const matches = useMediaQuery("(min-width:640px)");
  const handleDownload = (type) => {
    setLoading(true);
    try {
      if (canvasRef.current === null) {
        setLoading(false);
        return;
      }

      if (type === "PNG") {
        html2canvas(canvasRef.current, {
          // scale: 10, Highest
          scale: !matches ? 3.07 : 2.25, // Responsive
          logging: false,
          useCORS: true,
        }).then((canvas) => {
          const dataUrl = canvas.toDataURL("image/png", 1);
          const link = document.createElement("a");
          link.href = dataUrl;
          link.download = "unleash-post.png";
          link.click();
          toast("Success", {
            description: "Post downloaded",
          });
        });
      } else if (type === "JPEG") {
        html2canvas(canvasRef.current, {
          // scale: 10, Highest
          scale: !matches ? 3.07 : 2.25, // Responsive
          logging: false,
          useCORS: true,
        }).then((canvas) => {
          const dataUrl = canvas.toDataURL("image/jpeg", 1);
          const link = document.createElement("a");
          link.href = dataUrl;
          link.download = "unleash-post.jpg";
          link.click();
          toast("Success", {
            description: "Post downloaded",
          });
        });
      } else if (type === "PDF") {
        const pdf = new jsPDF();
        html2canvas(canvasRef.current, {
          scale: pdf.internal.scaleFactor,
          logging: false,
          useCORS: true,
        }).then((canvas) => {
          const dataUrl = canvas.toDataURL("image/jpeg", 1);
          const pdfWidth = pdf.internal.pageSize.getWidth();
          const pdfHeight = pdf.internal.pageSize.getHeight();
          pdf.addImage(dataUrl, "JPEG", 0, 0, pdfWidth, pdfHeight);
          pdf.save();
          toast("Success", {
            description: "Post downloaded",
          });
        });
      } else {
        console.log("Invalid Format");
        toast("Error", {
          description: "Invalid Format",
        });
      }
    } catch (error) {
      console.log(error.message);
      toast("Error", {
        description: error.message,
      });
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };
  return (
    <AppWrapper open={templateGenerator} setOpen={setTemplateGenerator}>
      <section className="relative bg-dots py-12">
        <div className="w-full min-h-screen px-1 sm:px-3 flex flex-col items-center justify-center overflow-x-auto">
          <EditorCard canvasRef={canvasRef} loading={loading} />
          <div className="mt-36 sm:mt-20">
            <ExportPostDialog handleDownload={handleDownload} />
          </div>
        </div>
      </section>
      <AITemplates open={templateGenerator} setOpen={setTemplateGenerator} />
    </AppWrapper>
  );
};

export default Editor;
