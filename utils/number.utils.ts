const DEFAULT_OPTIONS = {
  onlyNumeric: true,
};

const PERSIAN_DIGITS = "۰۱۲۳۴۵۶۷۸۹";

export const e2p = (
  str: string,
  options: {
    onlyNumeric: boolean;
    useGrouping?: boolean
  } = {...DEFAULT_OPTIONS, useGrouping: false}
) => {
  if (options.onlyNumeric) {
    // - method 1
      return BigInt((str).replaceAll("٬", "")).toLocaleString("fa-IR", { useGrouping: options.useGrouping });
    // - method 2
    // return [...str].map((digit) => PERSIAN_DIGITS[+digit]).join("");
  } else {
    return [...str]
      .map((char) =>
        "0123456789".includes(char) ? PERSIAN_DIGITS[+char] : char
      )
      .join("");
  }
};

export const p2e = (
  str: string,
  options: {
    onlyNumeric: boolean;
  } = DEFAULT_OPTIONS
) => {
  const digitsMap: {[irDigit: string]: string | number} = {};

  [...PERSIAN_DIGITS].forEach((irDigit, enDigit) => {
    digitsMap[irDigit] = enDigit;
  });

  if (options.onlyNumeric) {
    return [...str].map((irDigit) => digitsMap[irDigit]).join("");
  } else {
    return [...str]
      .map((char) => (PERSIAN_DIGITS.includes(char) ? digitsMap[char] : char))
      .join("");
  }
};


export const s2n = (str: string) => {
  return [...str].filter(char => /\d/.test(char)).join("")
}