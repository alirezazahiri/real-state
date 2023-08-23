"use client";

import AddOrEditProfileForm from "@/components/module/AddOrEditProfileForm";
import { submitHandler } from "@/utils/add-edit-profile.utils";
import { Profile } from "@profile";
import React, { useState } from "react";
import { Toaster } from "react-hot-toast";
import LoadingTD from "@/components/module/LoadingTD";
import { useRouter } from "next/navigation";

interface Props {
  id: string;
  profile: Profile;
}

function EditProfile({ id, profile }: Props) {
  const [profileData, setProfileData] = useState<Profile>(profile);
  const [loading, setLoading] = useState(false);
  const router = useRouter()

  return (
    <>
      <div>
        <h3 className="bg-blue-100 text-blue-600 font-semibold p-2 rounded-md">
          فرم ویرایش آگهی
        </h3>
        <AddOrEditProfileForm
          profileData={profileData}
          setProfileData={setProfileData}
        >
          {loading ? (
            <LoadingTD />
          ) : (
            <button
              onClick={submitHandler(setLoading, profileData, "PATCH", id, () => {
                router.refresh()
              })}
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
              ویرایش آگهی
            </button>
          )}
        </AddOrEditProfileForm>
      </div>
      <Toaster position="top-center" />
    </>
  );
}

export default EditProfile;
