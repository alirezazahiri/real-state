import React from "react";

interface Props {
  message: string;
  color:
    | "slate"
    | "gray"
    | "zinc"
    | "neutral"
    | "stone"
    | "red"
    | "green"
    | "orange"
    | "amber"
    | "yellow"
    | "lime"
    | "emerald"
    | "teal"
    | "cyan"
    | "sky"
    | "blue"
    | "indigo"
    | "violet"
    | "purple"
    | "fuchsia"
    | "pink"
    | "rose"
}

function Prompt({ message, color }: Props) {
  return (
    <h3 className={`bg-${color}-100 text-${color}-500 rounded-md p-2 font-semibold w-full`}>
      {message}
    </h3>
  );
}

export default Prompt;
