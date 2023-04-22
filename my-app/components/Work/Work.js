import React from "react";
import { HiArrowRight } from "react-icons/hi";

function Work({ work, company }) {
  return (
    <>
      <div className="pt-8 text-base ">
        <div className="text-textPrimaryLight dark:text-textPrimaryDark">
          {work}
        </div>
        <div className="text-textCompanyLight dark:text-textCompanyDark">
          @ {company}
        </div>
        <div className="flex flex-row gap-1 text-textPrimaryLight dark:text-textPrimaryDark pt-2">
<div className="flex">
 Learn more
</div>
<div className="flex ">
<HiArrowRight/>
</div>
</div>
      </div>
    </>
  );
}

export default Work;

