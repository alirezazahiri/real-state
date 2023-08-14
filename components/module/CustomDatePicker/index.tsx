import React from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

interface Props {
  value: Date;
  onChange: (date: Date) => void;
}

function CustomDatePicker({ value, onChange }: Props) {
    const changeHandler = (date: DateObject) => {
        onChange(date.toDate());
    }
  return (
    <div className="flex flex-col gap-2 w-fit" dir="rtl">
      <p className="font-semibold">تاریخ ساخت</p>
      <DatePicker
        calendar={persian}
        locale={persian_fa}
        calendarPosition="bottom-end"
        value={value}
        onChange={changeHandler}
        inputClass="p-1 outline-none w-[10ch] text-center rounded-md border border-slate-200"
        multiple={false}
      />
    </div>
  );
}

export default CustomDatePicker;
