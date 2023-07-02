import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-4xl font-bold">Achievement</h2>
        </div>
        <div className="mt-14 w-full h-[300px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Smart India Hackathon"
            subTitle="Selected among top 10 team from our collage at SIH 2022"
            result="Success"
            des=" Design an  Application to finding Pg’s for students and travelers, in a particular location. My role was to create frontend part of application"
          />
        </div>
      </div>
      
    </motion.div>
  );
};

export default Achievement;
