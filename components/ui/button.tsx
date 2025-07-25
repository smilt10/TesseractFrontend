"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700",
        destructive: "bg-destructive text-white hover:bg-destructive/90",
        outline:
          "border border-input bg-white text-blue-500 hover:bg-gray-50 hover:text-blue-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-800",
        secondary:
          "bg-secondary text-gray-800 hover:bg-secondary/80 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600",
        ghost: "text-gray-800 hover:bg-accent hover:text-accent-foreground dark:text-gray-200 dark:hover:bg-gray-800",
        link: "text-blue-500 underline-offset-4 hover:underline dark:text-blue-400",
        gold: "bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-50 text-gray-900 hover:from-yellow-400 hover:via-yellow-300 hover:to-yellow-100 font-medium transition-all duration-200 shadow-sm border-0",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  scrollToTop?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, scrollToTop = true, onClick, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      if (scrollToTop) {
        window.scrollTo(0, 0)
      }
      if (onClick) {
        onClick(event)
      }
    }

    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} onClick={handleClick} {...props} />
    )
  },
)
Button.displayName = "Button"

export { Button, buttonVariants }
