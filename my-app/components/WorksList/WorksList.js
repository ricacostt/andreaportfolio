import React from "react";
import Work from "../Work/Work";
import { HiArrowRight } from "react-icons/hi";

export default function WorksList() {
  return (
    <div className="pt-16 ms:pt-32 xsm:px-2 px-8 pb-24">
      <h1 className="text-base xsm:text-xl font- pb-8 text-textPrimaryLight dark:text-textPrimaryDark">
        Selected work
      </h1>
      <div className="parent">
        
       <Work work={'Slack plugins'} link={'https://www.deel.com/hr'} company={'tryroots.io'} category={'Web development'} status={'Case study'} project={'https://www.figma.com/proto/el4YFh8G7dWD8LRXKd9sJ7/SLACK-Plugins-%40-Roots?page-id=511%3A3428&node-id=511-3700&viewport=661%2C485%2C0.12&scaling=scale-down-width&starting-point-node-id=511%3A3700'}/>
       <Work work={'New HRIS console'} link={'https://www.deel.com/'} company={'Deel'} category={'Web application'} status={'Coming soon'} />
       <Work work={'New API Docs'} link={'https://www.form3.tech/'} company={'Form3'} category={'Web application'} status={'Case study'} project={'https://www.figma.com/proto/lnOGK42AUpcfpfanyOL1tM/API-Docs---Case-Study?page-id=0%3A1&node-id=214-31&viewport=654%2C546%2C0.03&scaling=min-zoom&starting-point-node-id=214%3A31'}/>
       <Work work={'New Admin UI '} link={'https://www.form3.tech/'} company={'Form3'} category={'Web application'} status={'Case study'} project={'https://www.figma.com/proto/hpb8yATIxwWZAxTXcGATPV/Form3-ADMIN-UI---Case-study?page-id=2480%3A4004&node-id=2602-8541&viewport=661%2C430%2C0.05&scaling=min-zoom&starting-point-node-id=2602%3A8541'}/>
       <Work work={'New Brand guidelines'} link={'https://www.form3.tech/'} company={'tryroots.io'} category={'Brand identity'} status={'Case study'} project={'https://www.figma.com/proto/Ya5vPXFUeqbQp5jrcdWWc4/BRAND-System-2020-Proto?page-id=794%3A0&node-id=877-2381&viewport=492%2C369%2C0.05&scaling=contain&starting-point-node-id=877%3A2381'}/>
       <Work work={'New Grabyo components'} link={'https://about.grabyo.com/'} company={'Grabyo'} category={'Design Sysyem'} status={'Case study'} project={'https://www.figma.com/proto/3aNocId1PgUU8maJIbxTlL/New-Grabyo-Components?page-id=0%3A1&node-id=977-470&viewport=738%2C239%2C0.3&scaling=scale-down-width'}/>
       <Work work={'New Grabyo Editor'} link={'https://about.grabyo.com/'} company={'Grabyo'} category={'Web application'} status={'Case study'} project={'https://www.figma.com/proto/0KRIOXJJJ88aOJYSADvVZh/Grabyo-New-EDITOR?page-id=0%3A1&node-id=2-238&viewport=600%2C225%2C0.04&scaling=min-zoom&starting-point-node-id=2%3A238'}/>
       <Work work={'New Grabyo web pages'} link={'https://about.grabyo.com/'} company={'Grabyo'} category={'Web development'} status={'Case study'} project={'https://www.figma.com/proto/tyNheOW9w7i8MqsCSg56K7/Grabyo-New-web-templates?page-id=1286%3A966&node-id=1286-977&viewport=241%2C48%2C0.06&scaling=scale-down-width&starting-point-node-id=1286%3A977&show-proto-sidebar=1'}/>
       <Work work={'HiParkr'} company={'Client'} category={'Mobile application'} status={'Case study'} project={'https://www.figma.com/proto/QPA9zNYO2bNq66Fdoxbrpu4d/HiParkr_-Project?page-id=0%3A1&node-id=91-3583&viewport=561%2C96%2C0.1&scaling=scale-down-width&starting-point-node-id=91%3A3583'}/>
      </div>
    </div>
  );
}
