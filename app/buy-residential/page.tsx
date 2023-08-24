import BuyResidentials from "@/components/template/BuyResidentials";
import React from "react";

function BuyResidentialsPage({
  searchParams,
}: {
  searchParams: { category?: string };
}) {
  return <BuyResidentials category={searchParams?.category} />;
}

export default BuyResidentialsPage;
