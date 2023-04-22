import React from "react";
import { HiArrowRight } from "react-icons/hi";

function Work({ work, company, status, link }) {
  return (
    <>
   <div className="childBoss">
          <div className=" work  text-base text-textPrimaryLight dark:text-textPrimaryDark">
            {work}
          </div>
          <div className="company text-textCompanyLight dark:text-textCompanyDark">
            @ {company}
          </div>
          <div className="flex flex-row gap-1 text-textPrimaryLight dark:text-textPrimaryDark pt-2">
            <div className="flex"> <a href={link} target="_blank"
              rel="noopener noreferrer">{status} </a></div>
            
            {status === 'Learn more' ?  <div className="flex items-center ">
              <HiArrowRight />
            </div> : null}
           
          </div>
        </div>
    </>
  );
}

export default Work;

