import { e2p, p2e } from "@/utils/number.utils";
import React from "react";

interface Props {
  name: string;
  label: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  component?: "input" | "textarea";
  containerClass?: string;
  labelClass?: string;
  inputClass?: string;
}

function TextInput({
  name,
  label,
  value,
  onChange,
  component = "input",
  containerClass,
  inputClass,
  labelClass,
}: Props) {
  return (
    <div className={["flex flex-col gap-2", containerClass].join(" ")}>
      <label htmlFor={name} className={["font-semibold", labelClass].join(" ")}>
        {label}
      </label>
      {component === "input" ? (
        <input
          type="text"
          id={name}
          name={name}
          value={e2p(value)}
          onChange={onChange}
          className={["rounded-md p-1 shadow-md border outline-none", inputClass].join(" ")}
        />
      ) : (
        <textarea
          id={name}
          name={name}
          value={e2p(value)}
          onChange={onChange}
          className={["rounded-md p-1 shadow-md border outline-none", inputClass].join(" ")}
        />
      )}
    </div>
  );
}

export default TextInput;
