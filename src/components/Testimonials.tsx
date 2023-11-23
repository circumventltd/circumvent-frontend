import React, { useEffect, useRef, useState } from "react";
import TestimonialsTemplate from "./TestimonialsTemplate";
import { testimonialData } from "../data/data";

type Props = {};

const Testimonials = (props: Props) => {
  const [index, setIndex] = useState(0);
  const myref = useRef<HTMLDivElement>(null);

  const handleArrow = (direction: string) => {
    setIndex((prevIndex) => {
      if (direction === "left") {
        return prevIndex !== 0 ? prevIndex - 1 : testimonialData.length - 1;
      }
      if (direction === "right") {
        return prevIndex !== testimonialData.length - 1 ? prevIndex + 1 : 0;
      }

      return prevIndex;
    });
  };
  const myFunction = () => {
    handleArrow("right");
  };
  useEffect(() => {
    const intervalId = setInterval(myFunction, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className=" overflow-hidden">
      <div className="p-[24px] lg:p-[40px]  flex flex-col">
        <div className="flex gap-[24px] items-center mb-[40px]">
          <h2 className="font-euclid600 leading-[24px] tracking-[4px] whitespace-nowrap text-[#00093366]">
            WHAT OUR CLIENTS SAY
          </h2>
          <div className="h-[1px] w-[80px] bg-[#00093366]"></div>
        </div>
        <h1 className="font-euclid text-[48px] lg:text-[72px] leading-[56px] lg:leading-[80px] text-headertext">
          Testimonials
        </h1>
      </div>
      <div
        ref={myref}
        style={{
          width: `${testimonialData.length * 100}vw`,
          transform: `translateX(${-100 * index}vw)`,
        }}
        className={`flex `}
      >
        {testimonialData.map((testimonial, index) => (
          <TestimonialsTemplate
            key={index}
            testimonial={testimonial}
            handleArrow={handleArrow}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
