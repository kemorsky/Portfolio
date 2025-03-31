import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-1 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:"bg-sky-500 hover:bg-sky-600 text-white shadow-sm transition-colors ",
        "hire-me":"bg-Customs-CVButton hover:bg-Customs-CVButton/80 text-black shadow-sm border border-black",
        discover: "rounded-2xl bg-white text-black border border-black hover:bg-white/80",
        submit:"border border-input bg-neutral-200 hover:bg-gray-400 transition-colors shadow-sm hover:text-accent-foreground",
        secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 min-w-[8.5rem] px-3 py-2 text-[1rem] font-dm-sans font-semibold text-center rounded-[0.5rem] transition-transform hover:scale-105 duration-200",
        discover:"h-11 w-[8rem] px-3 py-2 text-[1rem] font-semibold",
        submit: "w-[8rem] h-11 px-3 py-2 text-[1rem] font-dm-sans font-semibold rounded-[0.5rem] border border-black transition-transform hover:scale-105 duration-200",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
