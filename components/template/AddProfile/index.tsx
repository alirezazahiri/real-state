"use client";

import TextInput from "@/components/module/TextInput";
import { e2p, p2e } from "@/utils/number.utils";
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
  category: "",
  rules: [],
  amenities: [],
};

function AddProfile() {
  const [profileData, setProfileData] = useState<Profile>(initialState);
  const changeHandler: React.ChangeEventHandler<
    HTMLTextAreaElement | HTMLInputElement
  > = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: p2e(value, { onlyNumeric: false }),
    }));
  };

  const submitHandler: React.FormEventHandler = (e) => {
    e.preventDefault();
  }

  return (
    <div>
      <h3 className="bg-blue-100 text-blue-600 font-semibold p-2 rounded-md">
        فرم ثبت آگهی
      </h3>
      <div className="flex flex-col gap-4 my-6">
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
        onChange={changeHandler}
        value={profileData["price"]}
        onlyNumeric
        grouping
      />
      <TextInput
        label="بنگاه"
        name="realState"
        onChange={changeHandler}
        value={profileData["realState"]}
      />
      <button className="text-white bg-blue-800 border border-blue-800 py-1 px-2 mt-4 rounded-md w-fit transition hover:text-blue-800 hover:bg-white">ثبت آگهی</button>
      </div>
    </div>
  );
}

export default AddProfile;
