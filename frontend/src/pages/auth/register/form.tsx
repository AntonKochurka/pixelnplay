import { Fieldset, Field, Label } from "@headlessui/react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format, parse } from "date-fns";
import { registerSchema, type RegisterFormValues } from "./validation";

function parseDateString(value: string) {
  if (!value) return null;
  const parsed = parse(value, "dd/MM/yyyy", new Date());
  return isNaN(parsed.getTime()) ? null : parsed;
}

export default function RegisterForm() {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: "",
      email: "",
      first_name: "",
      last_name: "",
      birthdate: "", 
      password: "",
      confirm: "",
    },
  });

  const onSubmit = async (data: RegisterFormValues) => {
    console.log("Submit data:", data);
    await new Promise((r) => setTimeout(r, 1500));
  };

  const renderField = (
    name: keyof RegisterFormValues,
    label: string,
    type = "text",
    placeholder?: string
  ) => (
    <Field className="w-full" key={name}>
      <Label className="text-sm font-semibold gr-text">{label}</Label>
      <input
        type={type}
        placeholder={placeholder}
        {...register(name)}
        className="w-full bg-zinc-900 text-white px-4 py-2 mt-1 rounded-lg border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-violet-500"
      />
      {errors[name] && (
        <p className="text-sm text-red-500 mt-1">{errors[name]?.message}</p>
      )}
    </Field>
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Fieldset className="space-y-4">
        {renderField("username", "Username")}
        <div className="flex gap-4">
          {renderField("first_name", "First Name")}
          {renderField("last_name", "Last Name")}
        </div>
        {renderField("email", "Email")}
        <div className="flex gap-4">
          {renderField("password", "Password", "password")}
          {renderField("confirm", "Confirm Password", "password")}
        </div>

        <Field className="w-full">
          <Label className="text-sm font-semibold gr-text">Date of Birth</Label>
          <Controller
            control={control}
            name="birthdate"
            render={({ field }) => (
              <ReactDatePicker
                selected={parseDateString(field.value)}
                onChange={(date) =>
                  field.onChange(date ? format(date, "dd/MM/yyyy") : "")
                }
                maxDate={new Date()}
                dateFormat="dd/MM/yyyy"
                placeholderText="DD/MM/YYYY"
                className="w-full bg-zinc-900 text-white px-4 py-2 mt-1 rounded-lg border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-violet-500"
                wrapperClassName="w-full"
                showYearDropdown
                dropdownMode="select"
                isClearable
              />
            )}
          />
          {errors.birthdate && (
            <p className="text-sm text-red-500 mt-1">{errors.birthdate.message}</p>
          )}
        </Field>

        <div className="flex flex-row gap-4">
          <button
            type="reset"
            onClick={() => reset()}
            className="flex-1 p-2 rounded-s-2xl bg-zinc-900 hover:bg-zinc-700"
          >
            Reset
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex-[3] p-2 rounded-e-2xl bg-indigo-500 hover:bg-indigo-400 disabled:opacity-60"
          >
            {isSubmitting ? (
              <svg
                className="animate-spin h-5 w-5 mx-auto text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                />
              </svg>
            ) : (
              "Confirm"
            )}
          </button>
        </div>
      </Fieldset>
    </form>
  );
}
