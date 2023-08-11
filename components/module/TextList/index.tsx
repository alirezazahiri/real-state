import React from "react";
import TextItem from "@/components/module/TextItem";
import { MdOutlineLibraryAdd } from "react-icons/md";

interface Props {
  label: string;
  name: string;
  values: string[];
  onChange: (name: string, values: string[]) => void;
}

function TextList({ label, name, values, onChange }: Props) {
  const deleteHandler = (index: number) => {
    onChange(
      name,
      values.filter((_, i) => i != index)
    );
  };

  const addHandler = () => {
    onChange(name, [...values, ""]);
  };

  const changeHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    let newValues = [...values];
    newValues[index] = e.target.value;
    onChange(name, newValues);
  };

  return (
    <div className="flex flex-col gap-2">
      <span className="font-semibold">{label}</span>
      {values.map((value, index) => (
        <TextItem
          key={`${name}-${index}`}
          name={`${name}-${index}`}
          value={value}
          index={index}
          onChange={(e) => changeHandler(e, index)}
          onDelete={() => deleteHandler(index)}
        />
      ))}
      <button
        onClick={addHandler}
        className="flex gap-1 text-white bg-blue-800 border border-blue-800 py-1 px-2 rounded-md w-fit transition hover:text-blue-800 hover:bg-white"
      >
        افزودن
        <MdOutlineLibraryAdd />
      </button>
    </div>
  );
}

export default TextList;
