const e2p = (s: string) => s.toString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[+d]);

const p2e = (s: string) =>
  s.toString().replace(/[۰-۹]/g, (d) => [..."۰۱۲۳۴۵۶۷۸۹"].indexOf(d).toString());

const sp = (number: number) => {
  const seperatedNumber = number
    .toString()
    .match(/(\d+?)(?=(\d{3})+(?!\d)|$)/g);
  const joinedNumber = seperatedNumber.join(",");
  return e2p(joinedNumber);
};

export { e2p, p2e, sp };