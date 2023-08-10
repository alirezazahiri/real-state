import { e2p, s2n } from "@/utils/number.utils";
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
  onlyNumeric?: boolean;
  grouping?: boolean;
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
  onlyNumeric = false,
  grouping = false 
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
          value={e2p(grouping ? s2n(value) : value, { onlyNumeric, useGrouping: grouping })}
          onChange={onChange}
          className={["rounded-md p-1 shadow-md border outline-none", inputClass].join(" ")}
        />
      ) : (
        <textarea
          id={name}
          name={name}
          value={e2p(value, { onlyNumeric, useGrouping: grouping })}
          onChange={onChange}
          className={["rounded-md p-1 shadow-md border outline-none", inputClass].join(" ")}
        />
      )}
    </div>
  );
}

export default TextInput;
