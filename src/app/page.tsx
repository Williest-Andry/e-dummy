"use client";

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldSet,
  FieldError,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { useLogin } from "@/hooks/auth/use-auth";
import { AuthLogin, AuthLoginSchema } from "@/schema/auth/auth-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { BaseSyntheticEvent } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";

export default function LoginPage() {
  const { control, handleSubmit } = useForm({
    resolver: zodResolver(AuthLoginSchema),
  });

  const { mutate: login, isPending, isError, error, data } = useLogin();
  console.log("error : ", error);
  console.log("data : ", data);

  const sendCredentials: SubmitHandler<AuthLogin> = (
    data: AuthLogin,
    event?: BaseSyntheticEvent<object, any, any>,
  ) => {
    event?.preventDefault();
    login(data);
  };

  return (
    <FieldSet className="w-full max-w-xs m-auto">
      <form onSubmit={handleSubmit(sendCredentials)}>
        <FieldGroup>
          <Controller
            name="username"
            control={control}
            defaultValue=""
            render={({ field, fieldState }) => (
              <Field>
                <FieldLabel htmlFor={field.name}>Username</FieldLabel>
                <Input
                  {...field}
                  id={field.name}
                  placeholder="John Doe"
                  aria-invalid={fieldState.invalid}
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field, fieldState }) => (
              <Field>
                <FieldLabel htmlFor={field.name}>Password</FieldLabel>
                <Input
                  {...field}
                  id={field.name}
                  placeholder="••••••••"
                  type="password"
                  aria-invalid={fieldState.invalid}
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <Field orientation="responsive">
            <Button type="submit" disabled={isPending}>
              {isPending ? <Spinner /> : "Login"}
            </Button>
          </Field>
        </FieldGroup>

        {isError && (
          <FieldError
            errors={[{ message: "Error when login, retry again !" }]}
            className="mt-4 text-center"
          />
        )}
      </form>
    </FieldSet>
  );
}
