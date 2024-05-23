"use client";

import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { useMediaQuery } from "react-responsive";

import { cn } from "@/lib/utils";

const Popover = PopoverPrimitive.Root;

const PopoverTrigger = PopoverPrimitive.Trigger;

const PopoverContent = React.forwardRef(
  (
    { className, align = "start", side = "right", sideOffset = 8, ...props },
    ref
  ) => {
    const isSmallScreen = useMediaQuery({ query: "(max-width: 640px)" });
    const finalSide = isSmallScreen ? "bottom" : side;

    return (
      <PopoverPrimitive.Portal>
        <PopoverPrimitive.Content
          ref={ref}
          align={align}
          side={finalSide}
          sideOffset={sideOffset}
          className={cn(
            "z-50 rounded-lg bg-popover text-popover-foreground text-xs shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            className
          )}
          {...props}
        />
      </PopoverPrimitive.Portal>
    );
  }
);
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

export { Popover, PopoverTrigger, PopoverContent };
