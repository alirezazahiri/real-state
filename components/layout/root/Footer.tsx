import React from "react";

function Footer() {
  return (
    <footer className="flex flex-col lg:flex-row text-white font-medium justify-between bg-blue-800 px-4 py-4 my-4 rounded-md">
      <div className="flex flex-col text-white font-normal basis-9/12">
        <h3 className="font-semibold">سامانه خرید و اجاره ملک</h3>
        <p className="text-sm mt-2">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است.
        </p>
      </div>
      <div className="basis-3/12 flex flex-col items-start mt-2 lg:items-end px-4 lg:px-0">
        <ul className="w-fit [&>li>p]:font-semibold text-sm list-disc">
          <li>
            <p>تعرفه قانونی</p>
          </li>
          <li>
            <p>دسترسی سریع</p>
          </li>
          <li>
            <p>مشاورین خبره</p>
          </li>
          <li>
            <p>قولنامه محضری</p>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
