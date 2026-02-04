import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-lg font-medium md:font-semibold transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border border-white/80 bg-white/10 backdrop-blur-md shadow-sm text-black hover:bg-white/20 hover:border-white/30 shadow-[0_0_12px_rgba(124,58,237,0.3)] transition-all duration-300 dark:bg-white/5 dark:text-white dark:hover:bg-white/10",

        secondary: "bg-[#1e597c] text-white hover:bg-[#1e597c]/92",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: `
          px-3 py-1.5 text-sm
          sm:px-4 sm:py-2 sm:text-base
          md:px-5 md:py-2.5 md:text-lg
          lg:px-6 lg:py-3 lg:text-lg
          h-auto rounded-md has-[>svg]:px-3
        `,
        icon: "size-8 sm:size-9 md:size-10 lg:size-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  showArrow = false, // optional prop to show the arrow
  children,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    showArrow?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {children}

      {showArrow && <span>→</span>}
    </Comp>
  );
}

export { Button, buttonVariants };
