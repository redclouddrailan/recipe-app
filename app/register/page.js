"use client";
import { toast, ToastContainer } from "react-toastify";
import { getCookie } from "cookies-next";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { get } from "lodash";
import axios from "axios";

export default function Register() {
  const notify = (msg) => toast(msg);
  const router = useRouter();
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    const token = getCookie("token");
    if (token) {
      router.push("/");
    }
  }, []);

  const onSubmit = (data) => {
    axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/register`, data)
      .then((data) => {
        notify(get(data, "data.message"));
        router.push("/login");
      })
      .catch((err) => {
        if (err.response) {
          console.log(err.response);
        } else if (err.request) {
          console.log(err.request);
        } else if (err.message) {
          console.log(err.message);
        }
      });
  };
  return (
    <div className="max-w-xs mx-auto mt-10">
      <ToastContainer />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            {...register("name", { required: true })}
            type="text"
            required
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>
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
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input
            {...register("c_password", { required: true })}
            type="password"
            required
            placeholder="Password"
            className="input input-bordered w-full "
          />
        </div>
        <button type="submit" className="btn btn-primary mt-5 w-full">
          Register
        </button>

        <button onClick={() => toast("test")}>Toast</button>
      </form>
    </div>
  );
}
