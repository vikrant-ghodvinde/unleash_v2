/* eslint-disable react/prop-types */
import { DownloadIcon } from "@/icons";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/ui/shadcn/components/ui/dialog";

const ExportPostDialog = ({ handleDownload }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button type="button" className="btn btn-primary">Download</button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Choose format</DialogTitle>
          <DialogDescription className="font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
            asperiores!
          </DialogDescription>
        </DialogHeader>
        <div className="relative w-full grid grid-cols-12 gap-y-2 mt-5">
          <div className="col-span-12">
            <button
              type="button"
              className="relative w-full py-3 px-6 rounded-md flex items-center gap-x-2.5 text-white text-sm font-semibold bg-zinc-700 hover:bg-zinc-800 transition-all duration-300"
              onClick={() => handleDownload("PNG")}
            >
              <DownloadIcon width={16} /> Download PNG
            </button>
          </div>
          <div className="col-span-12">
            <button
              type="button"
              className="relative w-full py-3 px-6 rounded-md flex items-center gap-x-2.5 text-white text-sm font-semibold bg-zinc-700 hover:bg-zinc-800 transition-all duration-300"
              onClick={() => handleDownload("JPEG")}
            >
              <DownloadIcon width={16} /> Download JPG
            </button>
          </div>
          <div className="col-span-12">
            <button
              type="button"
              className="relative w-full py-3 px-6 rounded-md flex items-center gap-x-2.5 text-white text-sm font-semibold bg-zinc-700 hover:bg-zinc-800 transition-all duration-300"
              onClick={() => handleDownload("PDF")}
            >
              <DownloadIcon width={16} /> Download PDF
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ExportPostDialog;
