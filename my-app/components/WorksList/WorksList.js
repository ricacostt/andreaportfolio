import React from "react";
import Work from "../Work/Work";
import { HiArrowRight } from "react-icons/hi";

export default function WorksList() {
  return (
    <div className="pt-16 ms:pt-32 xsm:px-2 px-8 ">
      <h1 className="text-base xsm:text-xl font-medium text-textPrimaryLight dark:text-textPrimaryDark">
        Selected work
      </h1>
      <div className="flex flex-row gap-32">
        <Work
          work={"Slack plugins - Web development"}
          company={"tryroots.io"}
        />

        {/* <div className="pt-8 text-base w-80 ">
          <div className="text-textPrimaryLight dark:text-textPrimaryDark">
            New HRIS console - Web application
          </div>
          <div className="text-textCompanyLight dark:text-textCompanyDark">
            @ Deel
          </div>
          <div className="flex flex-row gap-1 text-textPrimaryLight dark:text-textPrimaryDark pt-2">
            <div className="flex">Coming soon</div>
          </div>
        </div> */}

        <Work
          work={"Slack plugins - Web development"}
          company={"tryroots.io"}
        />
         <Work
          work={"Slack plugins - Web development"}
          company={"tryroots.io"}
        />
     
      </div>
    </div>
  );
}
