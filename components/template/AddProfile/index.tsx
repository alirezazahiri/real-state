"use client";

import { Profile } from "@profile";
import React, { useState } from "react";
import AddOrEditProfileForm from "@/components/module/AddOrEditProfileForm";
import { Toaster } from "react-hot-toast";
import { submitHandler } from "@/utils/add-edit-profile.utils";
import LoadingTD from "@/components/module/LoadingTD";
import { useRouter } from "next/navigation";

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

function AddProfile() {
  const [profileData, setProfileData] = useState<Profile>(initialState);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  return (
    <>
      <div>
        <h3 className="bg-blue-100 text-blue-600 font-semibold p-2 rounded-md">
          فرم ثبت آگهی
        </h3>
        <AddOrEditProfileForm
          profileData={profileData}
          setProfileData={setProfileData}
        >
          {loading ? (
            <LoadingTD />
          ) : (
            <button
              onClick={submitHandler(
                setLoading,
                profileData,
                "POST",
                null,
                () => {
                  router.replace("/dashboard/my-profiles")
                }
              )}
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
          )}
        </AddOrEditProfileForm>
      </div>
      <Toaster position="top-center" />
    </>
  );
}

export default AddProfile;
