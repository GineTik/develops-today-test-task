import { Input } from "@/components/ui/input";

type GhostInputProps = React.ComponentProps<"input">;

export function GhostInput(props: GhostInputProps) {
  return (
    <Input
      className="bg-transparent border-none shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 p-0"
      {...props}
    />
  );
}
