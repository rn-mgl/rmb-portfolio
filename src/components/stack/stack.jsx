import React from "react";

const TechStack = () => {
  return (
    <div id="t_s" className="h-screen cstm-flex-col text-center p-5 gap-5">
      <p
        className="cstm-text-grd-gry-blk font-sora font-extrabold text-4xl
                  m-l:text-5xl  m-l:leading-normal
                  t:text-6xl t:leading-relaxed
                  l-s:text-7xl l-s:leading-loose"
      >
        my tech stack
      </p>
      <p
        className="text-xs font-ibm
                  m-l:text-sm
                  t:text-base
                  l-s:text-lg"
      >
        here are technologies that I am <span className="text-pnk3">currently working with:</span>{" "}
      </p>
      <div
        className="cstm-flex-col gap-5 font-ibm
                  t:cstm-flex-row t:items-start t:w-8/12
                  l-s:w-7/12
                  l-l:w-6/12"
      >
        <div
          className="text-xs
                      m-l:text-sm
                      t:mr-auto t:text-base t:text-left
                      l-s:text-lg"
        >
          <p
            className="font-semibold text-xl
                      m-l:text-2xl
                      t:text-3xl"
          >
            FRONT-END
          </p>
          <p>React JS</p>
          <p>Next JS</p>
          <p>Tailwind CSS</p>
        </div>
        <div
          className="text-xs
                    m-l:text-sm
                    t:text-base t:text-right
                    l-s:text-lg"
        >
          <p
            className="font-semibold text-xl
                      m-l:text-2xl
                      t:text-3xl"
          >
            BACK-END
          </p>
          <p>Node JS</p>
          <p>Express</p>
          <p>mySql</p>
          <p>MongoDB</p>
        </div>
      </div>
      <p
        className="font-ibm text-xs font-medium
                  m-l:text-sm
                  t:text-base
                  l-s:text-lg"
      >
        <span className="text-pnk3">other technologies</span> I can use:
      </p>
      <div
        className="font-ibm text-xs cstm-flex-row gap-5 flex-wrap 
                  m-l:text-sm
                  t:text-base t:w-8/12
                  l-s:text-lg"
      >
        <p>HTML</p>
        <p>CSS</p>
        <p>Javascript</p>
        <p>Git/Github</p>
        <p>Adobe Illustrator</p>
        <p>Adobe Photoshop</p>
      </div>
    </div>
  );
};

export default TechStack;
