import React from "react";
import Work from "../Work/Work";
import { HiArrowRight } from "react-icons/hi";

export default function WorksList() {
  return (
    <div className="pt-16 ms:pt-32 xsm:px-2 px-8 pb-32">
      <h1 className="text-base xsm:text-xl font-medium pb-8 text-textPrimaryLight dark:text-textPrimaryDark">
        Selected work
      </h1>
      <div className="parent">
        

          
       <Work work={'Slack plugins - Web development'} company={'tryroots.io'} status={'Learn more'} link={''}/>
       <Work work={'New HRIS console - Web application'} company={'Deel'} status={'Coming soon'} />

       <Work work={'New API Docs - Web application'} company={'Form3'} status={'Learn more'} link={''}/>
       <Work work={'New Admin UI - Web application'} company={'From3'} status={'Learn more'} link={''}/>
       <Work work={'New Brand guidelines - Brand identity'} company={'Deel'} status={'Learn more'} link={''}/>
       <Work work={'New Grabyo components - Design Sysyem'} company={'Grabyo'} status={'Learn more'} link={''}/>

       <Work work={'New Grabyo Editor - Web application'} company={'Grabyo'} status={'Learn more'} link={''}/>
       <Work work={'New Grabyo web pages - Web development'} company={'Deel'} status={'Learn more'} link={''}/>
       <Work work={'HiParkr - Mobile application'} company={'Client'} status={'Learn more'} link={''}/>

      </div>
    </div>
  );
}
