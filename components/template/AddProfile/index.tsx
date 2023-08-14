"use client";

import CustomDatePicker from "@/components/module/CustomDatePicker";
import RadioList from "@/components/module/RadioList";
import TextInput from "@/components/module/TextInput";
import TextItem from "@/components/module/TextItem";
import TextList from "@/components/module/TextList";
import { e2p, p2e, sp } from "@/utils/number.utils";
import { Profile } from "@profile";
import React, { useState } from "react";

const initialState: Profile = {
  title: "",
  description: "",
  address: "",
  phone: "",
  price: "",
  realState: "",
  constructionDate: new Date(),
  category: "villa",
  amenities: [],
  rules: [],
};

const RADIO_ITEMS = [
  { label: "ویلا", name: "category", value: "villa" },
  { label: "آپارتمان", name: "category", value: "apartment" },
  { label: "مغازه", name: "category", value: "store" },
  { label: "دفتر", name: "category", value: "office" },
];

function AddProfile() {
  const [profileData, setProfileData] = useState<Profile>(initialState);

  const changeHandler: React.ChangeEventHandler<
    HTMLTextAreaElement | HTMLInputElement
  > = (e) => {
    const { name, value } = e.target;

    setProfileData((prevData) => ({
      ...prevData,
      [name]: p2e(value),
    }));
  };
  const changeNumberHandler: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    const { name, value } = e.target;
    if ("0123456789".includes(value.charAt(value.length - 1)) && value.length < 18) {
      setProfileData((prevData) => ({
        ...prevData,
        [name]: p2e(value.replaceAll(",", '')),
      }));
    }
  };

  const textListChangeHandler = (name: string, values: string[]) => {
    setProfileData((prev) => ({ ...prev, [name]: values }));
  };

  const datePickerChangeHandler = (date: Date) => {
    setProfileData((prev) => ({ ...prev, constructionDate: date }));
  };

  const submitHandler: React.MouseEventHandler = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/profile", {
      method: "POST",
      body: JSON.stringify(profileData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    if (data.error) {
      console.log(data);
    } else {
      console.log("success", data);
    }
  };

  return (
    <div>
      <h3 className="bg-blue-100 text-blue-600 font-semibold p-2 rounded-md">
        فرم ثبت آگهی
      </h3>
      <div className="flex flex-col gap-6 my-6">
        <TextInput
          label="عنوان آگهی"
          name="title"
          onChange={changeHandler}
          value={profileData["title"]}
        />
        <TextInput
          label="توضیحات"
          name="description"
          component="textarea"
          onChange={changeHandler}
          value={profileData["description"]}
        />
        <TextInput
          label="آدرس"
          name="address"
          onChange={changeHandler}
          value={profileData["address"]}
        />
        <TextInput
          label="شماره تماس"
          name="phone"
          onChange={changeHandler}
          value={profileData["phone"]}
        />
        <TextInput
          label="قیمت (تومان)"
          name="price"
          onChange={changeNumberHandler}
          value={sp(Number(profileData["price"]))}
        />
        <TextInput
          label="بنگاه"
          name="realState"
          onChange={changeHandler}
          value={profileData["realState"]}
        />
        <RadioList
          title="دسته بندی"
          items={RADIO_ITEMS}
          onChange={changeHandler}
          value={profileData["category"]}
        />
        <TextList
          label="امکانات رفاهی"
          name="amenities"
          values={profileData["amenities"]}
          onChange={textListChangeHandler}
        />
        <TextList
          label="قوانین"
          name="rules"
          values={profileData["rules"]}
          onChange={textListChangeHandler}
        />
        <CustomDatePicker
          value={profileData["constructionDate"]}
          onChange={datePickerChangeHandler}
        />
        <button
          onClick={submitHandler}
          className="text-white bg-blue-800 border border-blue-800 py-1 px-2 mt-4 rounded-md w-full transition disabled:bg-slate-400 disabled:border-slate-500 disabled:text-slate-50 disabled:cursor-not-allowed hover:text-blue-800 hover:bg-white"
          disabled={
            !profileData.title ||
            !profileData.description ||
            !profileData.address ||
            !profileData.phone ||
            !profileData.price ||
            !profileData.realState ||
            !profileData.constructionDate ||
            !profileData.category
          }
        >
          ثبت آگهی
        </button>
      </div>
    </div>
  );
}

export default AddProfile;
