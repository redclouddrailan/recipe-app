"use client";
import React from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useRouter } from "next/navigation";
import { get } from "lodash";
import { setCookie, getCookie } from "cookies-next";
import { useForm } from "react-hook-form";

export default function Login() {
  const router = useRouter();
  const { register, handleSubmit } = useForm();
  const notify = (msg) => toast(msg);
  const test = getCookie("token");
  console.log(test);
  const onSubmit = (data) => {
    axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/login`, data)
      .then((data) => {
        // save data.token to cookie using cookies-next
        setCookie("token", get(data, "data.data.token"), {
          path: "/",
          maxAge: 3600, // Expires after 1hr
          sameSite: true,
        });
        notify(get(data, "data.message"));
        router.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="max-w-xs mx-auto mt-10">
      <ToastContainer />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            {...register("email", { required: true })}
            type="email"
            required
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            {...register("password", { required: true })}
            type="password"
            required
            placeholder="Password"
            className="input input-bordered w-full "
          />
        </div>
        <button type="submit" className="btn btn-primary mt-5 w-full">
          Sign In
        </button>
      </form>
    </div>
  );
}
