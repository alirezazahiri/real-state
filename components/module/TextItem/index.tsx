import { GoTrash } from "react-icons/go";

import React from "react";

interface Props {
  index: number;
  name: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onDelete: (index: number) => void;
}

function TextItem({ index, name, value, onChange, onDelete }: Props) {
  return (
    <div className="flex gap-2 flex-row">
      <input
        type="text"
        name={name}
        value={value}
        className="p-1 shadow-md rounded-md border  basis-10/12"
        onChange={onChange}
      />
      <button
        onClick={() => onDelete(index)}
        className="basis-2/12 flex gap-1 transition-all items-center justify-center px-2 rounded-md w-fit border bg-red-50 border-red-500 text-red-500 hover:text-red-50 hover:bg-red-500"
      >
        حذف
        <GoTrash />
      </button>
    </div>
  );
}

export default TextItem;
