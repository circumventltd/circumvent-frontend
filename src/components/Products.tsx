import React from "react";
import ProductTemplate from "./ProductTemplate";

type Props = {};

const Products = (props: Props) => {
  return (
    <div className="p-[24px] lg:p-[80px]">
      <div className="flex gap-[24px] items-center mb-[40px]">
        <h2 className="font-euclid600 leading-[24px] tracking-[4px] text-[#00093366]">
          FEATURED PRODUCT
        </h2>
        <div className="h-[1px] w-[80px] bg-[#00093366]"></div>
      </div>
      <ProductTemplate />
    </div>
  );
};

export default Products;
