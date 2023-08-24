import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  category: string;
  title: string;
}

function CategoryCard({ category, title }: Props) {
  return (
    <Link
      className="shadow-md transition hover:-rotate-12 flex flex-col gap-3 p-1 rounded-md bg-white cursor-pointer w-fit"
      href={`/buy-residential?category=${category}`}
    >
      <div className="overflow-clip rounded-md">
        <Image
          src={`/images/${category}.png`}
          width={240}
          height={144}
          alt={category}
        />
      </div>
      <h3 className="text-blue-600 font-bold text-center">{title}</h3>
    </Link>
  );
}

export default CategoryCard;
