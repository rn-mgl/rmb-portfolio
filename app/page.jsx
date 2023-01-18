import AboutMe from "@/src/components/about/about";
import FillerTemplate from "@/src/components/filler/filler";
import HireMe from "@/src/components/hire/hire";
import Init from "@/src/components/me/me";
import MyProjects from "@/src/components/project/project";
import TechStack from "@/src/components/stack/stack";
import React from "react";

export default function Home() {
  return (
    <div className="font-sora font-light">
      <Init />
      <AboutMe />
      <FillerTemplate
        head="clean"
        body={
          <React.Fragment>
            What you can expect to my work is that it will{" "}
            <span className="text-pnk3">be clean and simple.</span> The UI of my projects are
            <span className="text-pnk3"> usually minimal in design,</span> but this can be{" "}
            <span className="text-pnk3">altered depending on what you want.</span>
          </React.Fragment>
        }
      />
      <TechStack />
      <FillerTemplate
        head="straightforward"
        body={
          <React.Fragment>
            Another trait you can expect to my work is that it is{" "}
            <span className="text-pnk3">straightforward.</span> The functionalities are{" "}
            <span className="text-pnk3">simple and expected</span> to work as it is;{" "}
            <span className="text-pnk3">no flashiness included to avoid confsion.</span> This way,
            the performance of the website will be{" "}
            <span className="text-pnk3">fast and consistent</span> because of the{" "}
            <span className="text-pnk3">light background work</span> it will be processing. However,
            this part can also be{" "}
            <span className="text-pnk3">altered depending on your liking.</span>
          </React.Fragment>
        }
      />
      <MyProjects />
      <FillerTemplate
        head="functional"
        body={
          <React.Fragment>
            One more trait you can expect to my work is that it is{" "}
            <span className="text-pnk3">functional.</span> The websites I make will always be{" "}
            <span className="text-pnk3">responsive and have a purpose,</span> may it be for me or
            for others.
            <br />
            <br />I <span className="text-pnk3">love creating functional websites</span> because it
            can be a <span className="text-pnk3">solution to a problem, challenge me</span> in
            implementing useful functions, and it gives me{" "}
            <span className="text-pnk3">lots of knowledge and experience</span> in the building
            process. Reinventing the wheel is not a bad thing for me because in order to build
            something new, I must first understand how an existing object is made.
          </React.Fragment>
        }
      />
      <HireMe />
    </div>
  );
}
