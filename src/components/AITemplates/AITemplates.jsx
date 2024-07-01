/* eslint-disable react/prop-types */
import { UploadIcon } from "@/icons";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/ui/shadcn/components/ui/dialog";
import { Switch } from "@/ui/shadcn/components/ui/switch";
import { useState } from "react";
import TemplateOne from "./Templates/TemplateOne";

const AITemplates = ({ open, setOpen }) => {
  const { userImage, setUserImage } = useState("");
  const handleUserImage = (e) => {
    const image = e.target.files[0];
    console.log(image);
    if (image) {
      const imageUrl = URL.createObjectURL(image);
      setUserImage(imageUrl);
    } else {
      console.error("No file selected");
    }
  };
  return (
    <Dialog modal open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-[98%] px-0">
        <DialogHeader className="px-4">
          <DialogTitle>Randomizer Template</DialogTitle>
          <DialogDescription className="text-xs">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum,
            accusantium.
          </DialogDescription>
        </DialogHeader>
        <div className="relative w-full max-h-[calc(100vh-150px)] py-10 px-0 md:px-4 overflow-y-auto scrollbar-y">
          <div className="w-full flex flex-col xl:flex-row items-center gap-5">
            <div className="relative w-full xl:w-auto flex-auto">
              <div className="w-full px-4">
                <div className="w-full grid grid-cols-12 gap-y-4 gap-x-5">
                  <div className="relative col-span-12">
                    <label className="flex items-center gap-2 text-white text-sm mb-2">
                      Title
                    </label>
                    <input
                      type="text"
                      className="w-full h-10 p-2 text-xs text-white border border-zinc-700 bg-transparent outline-none rounded-md"
                      placeholder="Enter user Name"
                    />
                  </div>
                  <div className="relative col-span-12">
                    <label className="flex items-center gap-2 text-white text-sm mb-2">
                      Description
                    </label>
                    <textarea className="w-full h-20 p-2 text-xs text-white border border-zinc-700 bg-transparent outline-none rounded-md resize-none scrollbar-y" />
                  </div>
                  <div className="relative col-span-12">
                    <label className="flex items-center gap-2 text-white text-sm mb-2">
                      <Switch />
                      Company Logo
                    </label>
                    <div className="relative h-10 flex items-center justify-center rounded-md bg-zinc-800">
                      <input
                        type="file"
                        onChange={handleUserImage}
                        className="absolute w-full h-full left-0 top-0 opacity-0 cursor-pointer"
                      />
                      <span className="text-xs inline-flex items-center gap-1.5 text-white">
                        <UploadIcon width={16} />
                        {userImage ? "Change Image" : "Upload Image"}
                      </span>
                    </div>
                  </div>
                  <div className="relative col-span-12 md:col-span-6">
                    <label className="flex items-center gap-2 text-white text-sm mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      className="w-full h-10 p-2 text-xs text-white border border-zinc-700 bg-transparent outline-none rounded-md"
                      placeholder="Enter Company Name"
                    />
                  </div>
                  <div className="relative col-span-12 md:col-span-6">
                    <label className="flex items-center gap-2 text-white text-sm mb-2">
                      Contact
                    </label>
                    <input
                      type="number"
                      className="w-full h-10 p-2 text-xs text-white border border-zinc-700 bg-transparent outline-none rounded-md"
                      placeholder="Enter Phone"
                    />
                  </div>
                  <div className="relative col-span-12">
                    <label className="flex items-center gap-2 text-white text-sm mb-2">
                      Address
                    </label>
                    <textarea className="w-full h-20 p-2 text-xs text-white border border-zinc-700 bg-transparent outline-none rounded-md resize-none scrollbar-y" />
                  </div>
                </div>
              </div>
            </div>
            <div className="relative w-auto p-5 flex items-center justify-center bg-dots rounded-2xl overflow-hidden">
              <div className=" relative group w-[18rem] md:w-[27rem] aspect-square bg-white z-10">
                <TemplateOne />
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AITemplates;
