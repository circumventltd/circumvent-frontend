import React from "react";
import Arrowicon from "./svgs/Arrowicon";

type Props = {};

const TestimonialsTemplate = (props: Props) => {
  return (
    <div className="flex flex-col lg:flex-row justify-between gap-[24px]">
      <div className="mt-[80px] lg:mt-auto">
        <div className="flex">
          <div className="-rotate-180">
            <Arrowicon />
          </div>
          <div>
            <Arrowicon />
          </div>
        </div>
      </div>
      <div className="w-full lg:max-w-[480px]">
        <div>
          <h2 className="text-[#000933] text-[24px] font-euclid500 leading-[32px]">
            Chidi Okpara
          </h2>
          <h2>CEO, Bridlyn Accountancy</h2>
        </div>
        <p className="font-euclid leading-[24px] text-[#000933a3] mt-[40px]">
          Circumvent has been an invaluable partner in our journey to digital
          transformation. Their software development expertise, coupled with
          their innovative approach, has consistently delivered top-notch
          solutions for our business. Their ability to understand our unique
          requirements and turn them into scalable, efficient software has
          greatly contributed to our success.
        </p>
      </div>
    </div>
  );
};

export default TestimonialsTemplate;
