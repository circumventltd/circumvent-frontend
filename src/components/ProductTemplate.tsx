import React from "react";
import Arrowicon from "./svgs/Arrowicon";

type Props = {};

const ProductTemplate = (props: Props) => {
  return (
    <div>
      <div className="flex flex-col gap-[24px]">
        <h1 className="font-euclid text-[48px] lg:text-[72px] leading-[56px] lg:leading-[80px] text-headertext">
          CareSea
        </h1>
        <h2 className="text-[32px] lg:text-[48px] font-euclid leading-[32px] lg:leading-[56px] text-[#000933]">
          Just the perfect home care software
        </h2>
      </div>
      <div className="my-[80px]">
        <img src="/src/assets/image.png" alt="caresea" />
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-[24px]">
        <div className="rotate-90 lg:rotate-0">
          <Arrowicon />
        </div>
        <p className="font-euclid leading-[24px] text-[16px] text-[#000933a3] w-full lg:max-w-[480px]">
          Your reliable partner in modernizing the care industry. Explore
          user-friendly software solutions that improve care quality, make daily
          tasks easier, and enhance the well-being of those you care for.
        </p>
      </div>
    </div>
  );
};

export default ProductTemplate;
