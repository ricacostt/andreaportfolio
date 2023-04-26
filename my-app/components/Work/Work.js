import React from "react";
import { HiArrowRight } from "react-icons/hi";

function Work({ work, company, category, status, link, project }) {
  return (
    <>
   <div className="childBoss">
          <div className="work text-textCategoryLight font-normal dark:text-textCategoryDark">
            {work} <a href={link} target="_blank" rel="noopener noreferrer">{company}</a> 
          </div>
          <div className="work text-textCategoryLight font-light text-sm dark:text-textCategoryDark">
            {category}
          </div>
          <div className="flex flex-row gap-1 text-textPrimaryLight font-medium dark:text-textPrimaryDark pt-2">
            <div className="flex"> <a href={project} target="_blank" rel="noopener noreferrer">{status}</a></div>
            {status === 'Learn more' ?  <div className="flex items-center ">
              <HiArrowRight />
            </div> : null}
          </div>
        </div>
    </>
  );
}

export default Work;

