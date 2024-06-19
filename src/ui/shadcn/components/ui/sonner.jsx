"use client";
import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";

const Toaster = ({ ...props }) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group py-3 px-4 font-karla toast group-[.toaster]:bg-white group-[.toaster]:text-black group-[.toaster]:border-white group-[.toaster]:shadow-lg dark:group-[.toaster]:bg-white dark:group-[.toaster]:text-black dark:group-[.toaster]:border-white",
          description:
            "group-[.toast]:text-zinc-500 dark:group-[.toast]:text-zinc-400 text-xs",
          actionButton:
            "group-[.toast]:bg-zinc-900 group-[.toast]:text-zinc-50 dark:group-[.toast]:bg-zinc-50 dark:group-[.toast]:text-zinc-900",
          cancelButton:
            "group-[.toast]:bg-zinc-100 group-[.toast]:text-zinc-500 dark:group-[.toast]:bg-zinc-800 dark:group-[.toast]:text-zinc-400",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
