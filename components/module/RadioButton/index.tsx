import React from "react";

interface Props {
  label: string;
  name: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  checked: boolean;
}

function RadioButton({ label, name, value, onChange, checked }: Props) {
  return (
    <div className="flex px-2 py-1 bg-blue-100 text-blue-600 gap-2 items-center rounded-md">
      <label htmlFor={value}>{label}</label>
      <input id={value} name={name} type="radio" onChange={onChange} checked={checked} value={value} />
    </div>
  );
}

export default RadioButton;
