import React from "react";
import { p2e } from "./number.utils";
import { Profile } from "@profile";
import toast from "react-hot-toast";

export const changeHandler: (
  setProfileData: React.Dispatch<React.SetStateAction<any>>
) => React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> =
  (setProfileData) => (e) => {
    const { name, value } = e.target;

    setProfileData((prevData) => ({
      ...prevData,
      [name]: p2e(value),
    }));
  };

export const changeNumberHandler: (
  setProfileData: React.Dispatch<React.SetStateAction<any>>
) => React.ChangeEventHandler<HTMLInputElement> =
  (setProfileData) => (e) => {
    const { name, value } = e.target;
    if (
      "0123456789".includes(value.charAt(value.length - 1)) &&
      value.length < 18
    ) {
      setProfileData((prevData) => ({
        ...prevData,
        [name]: p2e(value.replaceAll(",", "")),
      }));
    }
  };

export const textListChangeHandler =
  (setProfileData: React.Dispatch<React.SetStateAction<any>>) =>
  (name: string, values: string[]) => {
    setProfileData((prev) => ({ ...prev, [name]: values }));
  };

export const datePickerChangeHandler =
  (setProfileData: React.Dispatch<React.SetStateAction<any>>) =>
  (date: Date) => {
    setProfileData((prev) => ({ ...prev, constructionDate: date }));
  };

export const submitHandler: (
  setLoading: React.Dispatch<React.SetStateAction<any>>,
  profileData: Profile,
  method: string,
  id?: string,
  cb?: () => any
) => React.MouseEventHandler =
  (
    setLoading,
    profileData,
    method,
    id,
    cb,
  ) =>
  async (e) => {
    setLoading(true);
    e.preventDefault();
    const res = await fetch(id ? `/api/profile/${id}` : "/api/profile", {
      method,
      body: JSON.stringify(profileData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    setLoading(false);
    if (data.error) {
      toast.error(data.error);
    } else {
      toast.success(data.message);
      if (cb) cb();
    }
  };
