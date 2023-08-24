import CategoryCard from "@/components/module/CategoryCard";
import { CATEGORIES, CITIES, SERVICES } from "@/constants";
import React from "react";
import { BiSolidCity } from "react-icons/bi";
import { BsCircle } from "react-icons/bs";

function Home() {
  return (
    <div>
      <section className="Banner flex flex-col items-center gap-6 py-20">
        <h1 className="text-blue-600 text-3xl font-bold">
          سامانه خرید و اجاره ملک
        </h1>
        <ul className="flex gap-3">
          {SERVICES.map((service) => (
            <li
              key={service}
              className="rounded-md p-1 flex gap-1 items-center bg-blue-100 text-blue-600 text-sm font-semibold"
            >
              <BsCircle />
              {service}
            </li>
          ))}
        </ul>
      </section>
      <section className="Cards grid grid-cols-2 md:grid-cols-4 gap-4">
        {CATEGORIES.map((item) => (
          <CategoryCard key={item.category} {...item} />
        ))}
      </section>
      <section className="Banner flex flex-col items-center gap-6 py-20">
        <h2 className="text-blue-600 text-xl font-semibold">
          شهرهای پر بازدید
        </h2>
        <ul className="grid grid-cols-4 gap-2 w-full">
          {CITIES.map((city) => (
            <li
              key={city}
              className="rounded-md p-1 flex gap-1 items-center justify-center bg-blue-100 text-blue-600 font-semibold"
            >
              <BiSolidCity />
              {city}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Home;
