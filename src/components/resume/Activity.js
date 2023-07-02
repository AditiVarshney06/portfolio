import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Activity = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl font-bold">Job activity</h2>
        </div>
        <div className="mt-14 w-full h-[600px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Host At Cultural Event"
            subTitle="GLA University "
            des="In Cultural Event I got an opportunity to be a host and announce results of participants"
          />
          <ResumeCard
            title="Participated in SquareBoat Bootcamp"
            subTitle="GLA University - (1 june 2023)"
            des="In that bootcamp they taught us Reactjs and we have to create a single page web application with that at the end"
          />
        </div>
      </div>
      
      
    </motion.div>
  );
};

export default Activity;
