import React from "react";

const FillerTemplate = (props) => {
  return (
    <div id="fx" className="h-auto bg-blk cstm-flex-col gap-5 p-10 text-center">
      <div
        className="cstm-text-grd-gr-1-3 font-sora font-extrabold text-4xl
                m-l:text-5xl  m-l:leading-normal
                t:text-6xl t:leading-relaxed 
                l-s:text-7xl l-s:leading-loose"
      >
        {props.head}
      </div>
      <div
        className="font-ibm text-xs text-wht
                  m-l:text-sm
                  t:w-8/12 t:text-base
                  l-s:text-lg"
      >
        {props.body}
      </div>
    </div>
  );
};

export default FillerTemplate;
