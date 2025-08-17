import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost" | "minimal";
    size?: "sm" | "md" | "lg";
    withArrow?: boolean;
    children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", withArrow = false, children, ...props }, ref) => {
        const baseClasses = "inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed";

        const variantClasses = {
            primary: "bg-primary text-white hover:bg-secondary rounded-lg",
            secondary: "bg-secondary text-white hover:bg-primary rounded-lg",
            outline: "border border-primary text-primary hover:bg-primary hover:text-white rounded-lg",
            ghost: "text-primary hover:bg-accent rounded-lg",
            minimal: "border border-gray-400 text-gray-800 hover:bg-gray-100 rounded-full group",
        };

        const sizeClasses = {
            sm: "px-4 py-2 text-sm",
            md: "px-6 py-3 text-base",
            lg: "px-8 py-4 text-lg",
        };

        return (
            <button
                ref={ref}
                className={cn(
                    baseClasses,
                    variantClasses[variant],
                    sizeClasses[size],
                    className
                )}
                {...props}
            >
                <span>{children}</span>
                {withArrow && (
                    <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                )}
            </button>
        );
    }
);

Button.displayName = "Button";

export default Button;