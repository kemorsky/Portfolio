import * as React from "react"

import { cn } from "@/lib/utils"

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
    style={{resize: "none"}}
      className={cn(
        "flex min-h-[8rem] w-full rounded-[0.35rem] bg-neutral-100 px-3 py-2 text-[1rem] shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = "Textarea"

export { Textarea }
