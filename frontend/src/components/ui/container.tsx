import { cn } from "@/lib/utils";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  size?: "none" | "md" | "lg" | "xl";
};

export function Container({
  children,
  className,
  size = "none",
}: ContainerProps) {
  return (
    <div
      className={cn("px-4 mx-auto", className, {
        "max-w-md": size === "md",
        "max-w-lg": size === "lg",
        "max-w-xl": size === "xl",
      })}
    >
      {children}
    </div>
  );
}
