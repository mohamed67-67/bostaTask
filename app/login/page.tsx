"use client";

import ButtonComp from "@/components/Button";
import InputField from "@/components/InputField";
import { login } from "@/services/auth";
import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import { toast } from "sonner";
import { AxiosError } from "axios";
import { setCookie } from "cookies-next/client";
import { useRouter } from "next/navigation";
// import {  } from "next/cache";

export default function LoginPage() {
  const [credintials, setCredintials] = useState({
    username: "",
    password: "",
  });

  const router = useRouter();
  const LoginMutation = useMutation({
    mutationFn: login,
    mutationKey: ["login"],
    onSuccess: async (res) => {
      toast.success("loggedin successfully");
      setCookie("user", credintials.username);
      setCookie("token", res.token);
      router.push("/");
      router.refresh();
    },
    onError: (err: AxiosError) => {
      toast.error(err.response?.data as string);
    },
  });

  const handlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredintials((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    LoginMutation.mutate(credintials);
  };

  return (
    <div className="flex justify-center w-full items-center min-h-screen">
      <div className="border-2 rounded-xl min-w-[500px] border-bcolor p-5 flex flex-col gap-2">
        <div>
          <h1 className="font-semibold">Login</h1>
          <p className="text-sm text-gray-500">
            Enter your credentials to access your account
          </p>
        </div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <InputField
            label="User name"
            name="username"
            value={credintials.username}
            onChange={(e) => handlChange(e)}
            required
          />
          <InputField
            label="Passowrd"
            name="password"
            value={credintials.password}
            onChange={(e) => handlChange(e)}
            required
            type="password"
          />
          <ButtonComp
            className="mt-5 py-2 text-sm"
            dark
            title="Login"
            type="submit"
            loading={LoginMutation.isPending}
          />
        </form>
        <div className="bg-blue-50 text-sm p-5 rounded-xl mt-5">
          <p className="font-semibold animate-bounce">Demo credentials</p>
          <p>Username: johnd</p>
          <p>Password: m38rmF$</p>
        </div>
      </div>
    </div>
  );
}
