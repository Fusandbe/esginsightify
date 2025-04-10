
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-glow border border-primary/10",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent/5 hover:text-accent hover:border-primary/50 hover:shadow-glow",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:shadow-glow border border-primary/10",
        ghost: "hover:bg-accent/5 hover:text-accent hover:shadow-glow",
        link: "text-primary underline-offset-4 hover:underline",
        luxury: "french-button bg-background border border-primary/20 text-primary hover:border-primary/60 hover:shadow-glow-gold",
        gold: "bg-esg-gold-500 text-primary-foreground hover:bg-esg-gold-400 hover:shadow-glow-gold border border-esg-gold-300/50",
        burgundy: "bg-esg-burgundy-500 text-primary-foreground hover:bg-esg-burgundy-400 hover:shadow-glow-burgundy border border-esg-burgundy-300/50",
      },
      size: {
        default: "h-11 px-6 py-2.5",
        sm: "h-9 rounded-md px-5 py-2 text-xs",
        lg: "h-12 rounded-md px-8 py-3 text-base",
        icon: "h-10 w-10 rounded-full",
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
