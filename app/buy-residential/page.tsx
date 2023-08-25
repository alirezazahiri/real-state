import BuyResidentialLayout from "@/components/layout/buy-residential";
import BuyResidentials from "@/components/template/BuyResidentials";
import React from "react";

function BuyResidentialsPage({
  searchParams,
}: {
  searchParams: { category?: string };
}) {
  return (
    <BuyResidentialLayout>
      <BuyResidentials category={searchParams?.category} />
    </BuyResidentialLayout>
  );
}

export default BuyResidentialsPage;
