import React from "react";

const AboutMe = () => {
  return (
    <div
      id="a_m"
      className="h-auto min-h-screen cstm-flex-col bg-wht gap-5 p-5 px-10
                t:py-20 
                l-s:cstm-flex-row"
    >
      <div
        className="cstm-flex-col gap-5 text-center  
                  l-s:w-10/12 l-s:cstm-flex-row"
      >
        <div
          className="cstm-flex-col gap-5
                    l-s:items-start l-s:text-left"
        >
          <p
            className="font-sora cstm-text-grd-gry-blk font-extrabold text-4xl
                  m-l:text-5xl
                  t:text-6xl
                  l-s:text-7xl"
          >
            about me
          </p>
          <p
            className="font-ibm text-xs
                  m-l:text-sm
                  t:w-8/12 t:text-base
                  l-s:text-lg l-s:w-full"
          >
            I am a <span className="text-pnk3">self-taught full-stack web developer,</span> and
            currently a 3rd year college student.
            <br />
            <br />I chose web development because it is the field of programming that{" "}
            <span className="text-pnk3">I genuinely love and enjoy doing.</span> Building solutions
            or requests is something that always excites me because I get to learn new things,
            implement new ideas, and it{" "}
            <span className="text-pnk3">turns my needs or imagination into a reality.</span>
            <br />
            <br />
            <span className="text-pnk3">I like building projects</span> to further improve my
            knowledge in web development. I love to study new things and I can easily adapt to new
            changes.
            <br />
            <br />I{" "}
            <span className="text-pnk3">continuously challenge myself, move, and improve</span> to
            further strengthen my foundation in this field because I see web development{" "}
            <span className="text-pnk3">not only as a job, but as a part of my daily living.</span>
          </p>
        </div>

        <div className="w-fit rounded-md cstm-grdbg-gr-1-3 cstm-flex-col p-1">
          <div
            className="w-56 h-56 bg-blk rounded-md
                    m-m:w-72 m-m:h-72"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
