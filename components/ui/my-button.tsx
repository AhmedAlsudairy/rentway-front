import { cn } from "@/lib/utils";
import React, { forwardRef } from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const MyButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, disabled, type = "Button", ...props }, ref) => {
    return (
      <button
        ref={ref}
        {...props}
        className={cn(
          `
w-auto
rounded-full
bg-black
border-transparent
px-5
py-3
disabled:cursor-not-allowed
disabled:opacity-50
text-white
font-semibold
hover:opacity-75
transition





`,
          className
        )}
      >
        {children}
      </button>
    );
  }
);

MyButton.displayName = "Button";

export default MyButton;
