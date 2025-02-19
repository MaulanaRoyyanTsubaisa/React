import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Input,
} from "@heroui/react";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";

const signUpSchema = z.object({
  email: z.string().email("format email belum sesuai"),
  username: z.string().min(5, "Minimum 5 Karakter"),
  password: z.string().min(8, "Minimum 8 Karakter"),
});

const SignUpPage = () => {
  const form = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
    resolver: zodResolver(signUpSchema),
  });

  const registerUser = (data) => {
    alert(`data submitted! email: ${data.email}, username: ${data.username}`);
  };
  return (
    <div className="flex h-screen items-center justify-center">
      <Card className="w-[300px]">
        <CardHeader className="font-semibold text-lg ">SignUp</CardHeader>
        <Divider />
        <CardBody>
          <form
            onSubmit={form.handleSubmit(registerUser)}
            className="flex flex-col gap-4"
          >
            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => {
                return (
                  <Input
                    {...field}
                    type="email"
                    label="Email"
                    size="sm"
                    isInvalid={Boolean(fieldState.error)}
                    errorMessage={fieldState.error?.message}
                  />
                );
              }}
            />
            <Controller
              name="username"
              control={form.control}
              render={({ field, fieldState }) => {
                return (
                  <Input
                    {...field}
                    type="username"
                    label="Username"
                    size="sm"
                    isInvalid={Boolean(fieldState.error)}
                    errorMessage={fieldState.error?.message}
                  />
                );
              }}
            />
            <Controller
              name="password"
              control={form.control}
              render={({ field, fieldState }) => {
                return (
                  <Input
                    {...field}
                    label="Password"
                    type="password"
                    size="sm"
                    isInvalid={Boolean(fieldState.error)}
                    errorMessage={fieldState.error?.message}
                  />
                );
              }}
            />

            <Button type="Submit" color="primary">
              Sign Up
            </Button>
          </form>
        </CardBody>
        <CardFooter>
          <Link to="/whislist">To WishList Page</Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignUpPage;
