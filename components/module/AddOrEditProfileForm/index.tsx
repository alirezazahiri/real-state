import React from 'react'
import CustomDatePicker from "@/components/module/CustomDatePicker";
import RadioList from "@/components/module/RadioList";
import TextInput from "@/components/module/TextInput";
import TextList from "@/components/module/TextList";
import { RADIO_ITEMS } from "@/constants";
import { sp } from "@/utils/number.utils";
import {
    changeHandler,
  changeNumberHandler,
  textListChangeHandler,
  datePickerChangeHandler,
} from "@/utils/add-edit-profile.utils";
import { Profile } from '@profile';

interface Props {
    setProfileData: React.Dispatch<React.SetStateAction<Profile>>;
    profileData: Profile;
    children: React.ReactNode
}
function AddOrEditProfileForm({profileData, setProfileData, children}: Props) {
  return (
    <div className="flex flex-col gap-6 my-6">
          <TextInput
            label="عنوان آگهی"
            name="title"
            onChange={changeHandler(setProfileData)}
            value={profileData["title"]}
          />
          <TextInput
            label="توضیحات"
            name="description"
            component="textarea"
            onChange={changeHandler(setProfileData)}
            value={profileData["description"]}
          />
          <TextInput
            label="آدرس"
            name="address"
            onChange={changeHandler(setProfileData)}
            value={profileData["address"]}
          />
          <TextInput
            label="شماره تماس"
            name="phone"
            onChange={changeHandler(setProfileData)}
            value={profileData["phone"]}
          />
          <TextInput
            label="قیمت (تومان)"
            name="price"
            onChange={changeNumberHandler(setProfileData)}
            value={sp(Number(profileData["price"]))}
          />
          <TextInput
            label="بنگاه"
            name="realState"
            onChange={changeHandler(setProfileData)}
            value={profileData["realState"]}
          />
          <RadioList
            title="دسته بندی"
            items={RADIO_ITEMS}
            onChange={changeHandler(setProfileData)}
            value={profileData["category"]}
          />
          <TextList
            label="امکانات رفاهی"
            name="amenities"
            values={profileData["amenities"]}
            onChange={textListChangeHandler(setProfileData)}
          />
          <TextList
            label="قوانین"
            name="rules"
            values={profileData["rules"]}
            onChange={textListChangeHandler(setProfileData)}
          />
          <CustomDatePicker
            value={profileData["constructionDate"]}
            onChange={datePickerChangeHandler(setProfileData)}
          />
          {children}
        </div>
  )
}

export default AddOrEditProfileForm