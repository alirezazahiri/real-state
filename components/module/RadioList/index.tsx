import React from "react";
import RadioButton from "@/components/module/RadioButton";

interface Props {
  title: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  items: {
    label: string;
    name: string;
    value: string;
  }[];
}

function RadioList({ title, onChange, items }: Props) {
  return (
    <fieldset className="flex flex-col gap-2">
      <span className="font-semibold">{title}</span>
      <div className="flex flex-wr gap-4">{items.map(item => (
        <RadioButton key={item.value} onChange={onChange} {...item}/>
      ))}</div>
    </fieldset>
  );
}

export default RadioList;
