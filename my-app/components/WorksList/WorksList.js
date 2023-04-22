import React from "react";
import Work from "../Work/Work";
import { HiArrowRight } from "react-icons/hi";

export default function WorksList() {
  return (
    <div className="pt-16 ms:pt-32 xsm:px-2 px-8 ">
      <h1 className="text-base xsm:text-xl font-medium text-textPrimaryLight dark:text-textPrimaryDark">
        Selected work
      </h1>
      <div className="parent">
        <div className="childBoss">
          <div className=" work pt-8 text-base text-textPrimaryLight dark:text-textPrimaryDark">
            Slack plugins - Web development{" "}
          </div>
          <div className="company text-textCompanyLight dark:text-textCompanyDark">
            @ tryroots.io
          </div>
          <div className="flex flex-row gap-1 text-textPrimaryLight dark:text-textPrimaryDark pt-2">
            <div className="flex">Learn more</div>
            <div className="flex items-center ">
              <HiArrowRight />
            </div>
          </div>
        </div>

        <div className="childBoss">
          <div className=" work pt-8 text-base text-textPrimaryLight dark:text-textPrimaryDark">
            New HRIS console - Web application{" "}
          </div>
          <div className="company text-textCompanyLight dark:text-textCompanyDark">
            @ Deel
          </div>
          <div className="">Coming soon</div>
        </div>

        <div className="childBoss">
          <div className=" work pt-8 text-base text-textPrimaryLight dark:text-textPrimaryDark">
            Slack plugins - Web development{" "}
          </div>
          <div className="company text-textCompanyLight dark:text-textCompanyDark">
            @ tryroots.io
          </div>
          <div className="flex flex-row gap-1 text-textPrimaryLight dark:text-textPrimaryDark pt-2">
            <div className="flex">Learn more</div>
            <div className="flex items-center ">
              <HiArrowRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
