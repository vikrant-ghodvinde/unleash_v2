"use client";
import * as React from "react";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";

import { cn } from "@/ui/shadcn/lib/utils";
import { toggleVariants } from "@/ui/shadcn/components/ui/toggle";

const ToggleGroupContext = React.createContext({
  size: "default",
  variant: "default",
});

const ToggleGroup = React.forwardRef(
  ({ className, variant, size, children, ...props }, ref) => (
    <ToggleGroupPrimitive.Root
      ref={ref}
      className={cn("flex items-center justify-center gap-1", className)}
      {...props}
    >
      <ToggleGroupContext.Provider value={{ variant, size }}>
        {children}
      </ToggleGroupContext.Provider>
    </ToggleGroupPrimitive.Root>
  )
);

ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName;

const ToggleGroupItem = React.forwardRef(
  ({ className, children, variant, size, ...props }, ref) => {
    const context = React.useContext(ToggleGroupContext);

    return (
      <ToggleGroupPrimitive.Item
        ref={ref}
        className={cn(
          "w-10 h-10 flex items-center justify-center rounded-md border border-zinc-700 flex-1 text-white hover:bg-zinc-900 data-[state=on]:bg-zinc-900 data-[state=on]:border-zinc-900 hover:border-zinc-900",
          className
        )}
        {...props}
      >
        {children}
      </ToggleGroupPrimitive.Item>
    );
  }
);

ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName;

export { ToggleGroup, ToggleGroupItem };
