"use client";

import Link from "next/link";

import React, {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useState,
} from "react";
import { Toaster, toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { ThreeDots } from "react-loader-spinner";

function Signup() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const changeHandler =
    (setter: Dispatch<SetStateAction<string>>) =>
    (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      setter(value);
    };

  const submitHandler = async (e: FormEvent) => {
    setLoading(true);
    e.preventDefault();
    if (password !== confirmPassword)
      return toast.error("رمز و تکرار آن یکسان نیستند.");

    const res = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    if (res.status == 201) {
      router.push("/signin");
      toast.success(data.message);
    } else {
      toast.error(data.error);
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center h-screen justify-center gap-4">
      <h1 className="text-blue-800 font-bold text-xl tracking-wide">
        فرم ثبت نام
      </h1>
      <form
        onSubmit={submitHandler}
        className="flex flex-col gap-8 border-2 bg-white border-blue-800 shadow-sm shadow-blue-800 rounded-md min-w-[290px] max-w-[480px] p-4"
      >
        <div className="flex flex-col gap-2 [&>input]:border-2 [&>input]:border-blue-200 [&>input]:rounded-sm [&>input]:p-1 [&>input]:text-blue-800 [&>input]:outline-none [&>label]:text-blue-600 [&>label]:font-semibold">
          <label htmlFor="email">ایمیل:</label>
          <input
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={changeHandler(setEmail)}
          />
        </div>
        <div className="flex flex-col gap-2 [&>input]:border-2 [&>input]:border-blue-200 [&>input]:rounded-sm [&>input]:p-1 [&>input]:text-blue-800 [&>input]:outline-none [&>label]:text-blue-600 [&>label]:font-semibold">
          <label htmlFor="password">گذرواژه:</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={changeHandler(setPassword)}
          />
        </div>
        <div className="flex flex-col gap-2 [&>input]:border-2 [&>input]:border-blue-200 [&>input]:rounded-sm [&>input]:p-1 [&>input]:text-blue-800 [&>input]:outline-none [&>label]:text-blue-600 [&>label]:font-semibold">
          <label htmlFor="confirmPassword">تایید گذرواژه:</label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            value={confirmPassword}
            onChange={changeHandler(setConfirmPassword)}
          />
        </div>
        {loading ? (
          <ThreeDots
            color="#304ffe"
            height={45}
            ariaLabel="three-dots-loading"
            visible={true}
            wrapperClass="mx-auto"
          />
        ) : (
          <button
            type="submit"
            className="bg-blue-800 text-white border border-blue-800 p-1 rounded-sm transition hover:text-blue-800 hover:bg-white disabled:bg-slate-400 disabled:border-slate-500 disabled:text-slate-50 disabled:cursor-not-allowed font-bold"
            disabled={!(email && password && confirmPassword)}
          >
            ثبت نام
          </button>
        )}
      </form>
      <div className="flex gap-1">
        <p>حساب کاربری دارید؟</p>
        <Link
          href="/signin"
          className="text-sm font-bold border-b-4 border-slate-600 text-blue-800"
        >
          ورود
        </Link>
      </div>
      <Toaster />
    </div>
  );
}

export default Signup;
