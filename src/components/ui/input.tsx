import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full border-input rounded-md px-3 bg-gray-200 py-2 text-base shadow-sm shadow-gray-800 transition-all duration-300 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-gray-400 focus:placeholder:text-gray-200 focus:outline-none focus:shadow-md focus:bg-gray-500 focus:text-white disabled:cursor-not-allowed disabled:opacity-50 bg-white",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
)
Input.displayName = "Input"

export { Input }
