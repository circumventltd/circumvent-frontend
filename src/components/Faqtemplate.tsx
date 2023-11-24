import { motion } from "framer-motion";
import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

interface IFaqs {
  faq: {
    question: String;
    answer: String;
  };
}

const Faqtemplate = ({ faq }: IFaqs) => {
  const { question, answer } = faq;
  const [showAnswer, setShowAnswer] = useState<Boolean>(false);
  const handleshowfaqAnswer = () => {
    setShowAnswer((prevShowAnswer) => {
      const newShowAnswer = !prevShowAnswer;
      return newShowAnswer;
    });
  };

  return (
    <motion.div className="w-full  lg:max-w-[480px]">
      <div className="flex justify-between min-h-[80px] md:min-h-[150px] border-b border-b-[#00093329] pb-[24px] gap-[8px]">
        <h2 className="text-[#000933] text-[24px] font-euclid leading-[32px]">
          {question}
        </h2>
        <div className="min-w-[24px] flex justify-center">
          {!showAnswer ? (
            <AiOutlinePlus
              onClick={handleshowfaqAnswer}
              className="text-[24px]  text-[#343330] cursor-pointer"
            />
          ) : (
            <AiOutlineMinus
              onClick={handleshowfaqAnswer}
              className="text-[24px]  text-[#343330] cursor-pointer"
            />
          )}
        </div>
      </div>
      <div
        className={`overflow-hidden transition-max-h duration-500`}
        style={{
          maxHeight: showAnswer ? "300px" : "0",
        }}
      >
        <p className="font-euclid  leading-[24px] text-[#000933a3] pr-2 mt-[40px]">
          {answer}
        </p>
      </div>
    </motion.div>
  );
};

export default Faqtemplate;
