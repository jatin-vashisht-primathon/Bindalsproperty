import Breadcumb from "@/components/common/Breadcumb";
import Cta from "@/components/common/Cta";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import CommercialProperties from "@/components/properties/CommercialProperties";
import React from "react";

export const metadata = {
  title: "Commercial Properties || Bindals Property Hub - Real Estate",
  description: "Bindals Property Hub - Real Estate",
};
export default function page() {
  return (
    <>
      <div id="wrapper">
        <Header1 />
        <Breadcumb
          items={[
            { label: "Home", href: "/" },
            { label: "Property" },
            { label: "Commercials" },
          ]}
        />
        <div className="main-content">
          <CommercialProperties />
          <Cta />
        </div>
        <Footer1 />
      </div>
    </>
  );
}
