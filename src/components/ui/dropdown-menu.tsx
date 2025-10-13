"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

const DropdownMenu = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="relative inline-block text-left">
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(
            child as React.ReactElement<{
              open?: boolean;
              setOpen?: (open: boolean) => void;
            }>,
            {
              open,
              setOpen,
            }
          );
        }
        return child;
      })}
    </div>
  );
};

interface DropdownMenuTriggerProps {
  children: React.ReactNode;
  setOpen?: (open: boolean) => void;
  open?: boolean;
}

const DropdownMenuTrigger = ({
  children,
  setOpen,
  open,
}: DropdownMenuTriggerProps) => {
  return (
    <div onClick={() => setOpen?.(!open)} className="cursor-pointer">
      {children}
    </div>
  );
};

interface DropdownMenuContentProps {
  children: React.ReactNode;
  open?: boolean;
  setOpen?: (open: boolean) => void;
  className?: string;
  align?: "start" | "end" | "center";
}

const DropdownMenuContent = ({
  children,
  open,
  setOpen,
  className,
  align = "center",
}: DropdownMenuContentProps) => {
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen?.(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open, setOpen]);

  if (!open) return null;

  const alignmentClasses = {
    start: "left-0 origin-top-left rtl:left-auto rtl:right-0 rtl:origin-top-right",
    end: "right-0 origin-top-right rtl:right-auto rtl:left-0 rtl:origin-top-left",
    center: "left-1/2 -translate-x-1/2 origin-top",
  };

  return (
    <div
      ref={ref}
      className={cn(
        "bg-popover text-popover-foreground absolute z-50 mt-2 w-56 rounded-md border p-1 shadow-lg",
        alignmentClasses[align],
        className
      )}
    >
      {children}
    </div>
  );
};

const DropdownMenuItem = ({
  children,
  onClick,
  className,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground relative flex cursor-pointer items-center rounded-sm px-2 py-1.5 text-sm transition-colors outline-none select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      )}
    >
      {children}
    </div>
  );
};

const DropdownMenuLabel = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("px-2 py-1.5 text-sm font-semibold", className)}>
      {children}
    </div>
  );
};

const DropdownMenuSeparator = ({ className }: { className?: string }) => {
  return <div className={cn("bg-border -mx-1 my-1 h-px", className)} />;
};

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
};
