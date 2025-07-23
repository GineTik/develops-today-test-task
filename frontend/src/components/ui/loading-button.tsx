import { Loader2 } from "lucide-react";
import { Button } from "./button";

type LoadingButtonProps = React.ComponentProps<typeof Button> & {
  isLoading: boolean;
};

export function LoadingButton({
  children,
  isLoading,
  ...props
}: LoadingButtonProps) {
  return (
    <Button {...props}>
      {isLoading ? <Loader2 className="size-4 animate-spin" /> : children}
    </Button>
  );
}
