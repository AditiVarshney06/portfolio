import React, {  useState } from 'react'
import Title from '../layouts/Title';
import Education from './Education';
import Skills from './Skills';
import Achievement from './Achievement';
import Activity from "./Activity"

const Resume = () => {
   const [educationData, setEducationData] = useState(true);
   const [skillData, setSkillData] = useState(false);
   const [activity, setActivity] = useState(false);
   const [achievementData, setAchievementData] = useState(false);
  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      
       <div className="flex justify-center items-center text-center">
        <Title
          des="Resume" 
        />
      </div>
      <div>
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          
          <li
            onClick={() =>
              setEducationData(true) &
              setSkillData(false) &
              setActivity(false) &
              setAchievementData(false)
            }
            className={`${
              educationData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Education
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(true) &
              setActivity(false) &
              setAchievementData(false)
            }
            className={`${
              skillData ? "border-designColor rounded-lg" : "border-transparent"
            } resumeLi`}
          >
            Professional Skills
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(false) &
              setActivity(false) &
              setAchievementData(true)
            }
            className={`${
              achievementData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Achievements
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(false) &
              setActivity(true) &
              setAchievementData(false)
            }
            className={`${
              activity
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Extra Curricular Activities
          </li>
        </ul>
      </div>
      {educationData && <Education />}
      {skillData && <Skills />}
      {achievementData && <Achievement />} 
      {activity && <Activity/>} 
    </section>
  );
}

export default Resume