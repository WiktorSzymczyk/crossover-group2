import React from "react";
import { Heading } from "../../common/Heading";
import "./price.css";
import PriceCard from "./PriceCard";

const Price = () => {
  return (
    <>
      <section className="price padding">
        <div className="container">
          <Heading
            title="Your Money Your Choice"
            subtitle="Paneer monterey jack hard cheese. Roquefort parmesan manchego macaroni cheese stilton port-salut blue castello camembert de normandie. Airedale ricotta cauliflower cheese paneer"
          />
          <PriceCard />
        </div>
      </section>
    </>
  );
};

export default Price;
