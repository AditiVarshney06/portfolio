import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact, FaGit, FaGithub, FaHackerrank } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          Social Media Link
        </h2>
        <div className="flex gap-4">
          {/* <span className="bannerIcon">
            <FaFacebookF />
          </span> */}
          <a href="https://twitter.com/aditivarshney06" target="_blank">
          <span className="bannerIcon">
            <FaTwitter />
          </span>
          </a>
          <a href="https://www.linkedin.com/in/aditi-varshney-a29aa31b6/" target="_blank">
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
          </a>
          <a href="https://github.com/AditiVarshney06" target="_blank">
            <span className="bannerIcon">
              <FaGithub />
            </span>
          </a>
        </div>
      </div>
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          Coding Platform
        </h2>
        <div className="flex gap-4">
        <a href="https://auth.geeksforgeeks.org/user/aditivarshney2461" target="_blank">
            <span className="bannerIcon">
              GFG
            </span>
          </a>
          <a href="https://leetcode.com/aditivarshney_cs20/" target="_blank">
            <span className="bannerIcon">
             <p style={{'font-size': "12px"}}> Leetcode</p>
            </span>
          </a>
          <a href="https://www.hackerrank.com/aditi_varshney?hr_r=1" target="_blank">
            <span className="bannerIcon">
              <FaHackerrank />
            </span>
          </a>
          <a href="https://www.codechef.com/users/aditivarshney4" target="_blank">
            <span className="bannerIcon">
            <p style={{'font-size': "12px"}}> Codechef</p>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Media;
