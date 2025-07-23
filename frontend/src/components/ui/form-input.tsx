import { Control, FieldValues } from "react-hook-form";
import { Path } from "react-hook-form";
import {
  FormField,
  FormLabel,
  FormItem,
  FormControl,
  FormMessage,
} from "./form";
import { Input } from "./input";
import { Label } from "./label";

type FormInputProps<T extends FieldValues> = React.ComponentProps<"input"> & {
  name: Path<T>;
  label: string;
  control: Control<T>;
};

export function FormInput<T extends FieldValues>({
  name,
  label,
  control,
  ...props
}: FormInputProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <Input {...props} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
