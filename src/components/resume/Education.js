import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Btech in Computer Science"
            subTitle=" GLA University  (2020 - 2024)"
            result="CPI-7.5"
            des="My journey as a computer science engineering student showcases my expertise in programming languages, software development, and problem-solving. "
          />
          <ResumeCard
            title="Higher Secondary School"
            subTitle="S.J.S Public School (2018-2020)"
            result="Percentage-76%"
            des="In my 12th-grade, I present my advanced knowledge in mathematics, physics, and chemistry, Through projects and assignments."
          />
          <ResumeCard
            title="Secondary School"
            subTitle="S.K.V Public School (2016 - 2018)"
            result="Percentage-78%"
            des="
            My 10th-grade I learn and growth in various subjects. It includes projects and coursework that highlight my academic abilities"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
