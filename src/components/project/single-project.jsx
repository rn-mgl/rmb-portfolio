"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { GiHorizontalFlip } from "react-icons/gi";

const SingleProject = (props) => {
  const [switched, setSwitched] = React.useState(false);

  const handleSwitched = () => {
    setSwitched((prev) => !prev);
  };

  return (
    <div className="w-full">
      <Link href={`${props.url}`} target="_blank">
        <Image
          className="w-full rounded-md
                  l-s:w-11/12"
          src={props.preview}
          alt={props.preview}
        />
      </Link>
      <div
        className="bg-blk font-ibm w-full h-36 rounded-md relative -translate-y-8 shadow-upper-md p-3 overflow-y-auto cstm-scrollbar
                  m-l:h-52
                  l-s:w-11/12 l-s:h-44
                  l-l:h-56"
      >
        <p
          className={`text-wht text-sm font-medium 
                    m-l:text-lg
                    t:text-xl`}
        >
          {props.projectName}
          <GiHorizontalFlip onClick={handleSwitched} className="mx-auto cursor-pointer" />
        </p>
        <div
          className={`${
            switched ? "cstm-flex-col" : "indent-10"
          } text-xs text-wht text-justify  mt-5
                    m-l:text-sm
                    t:text-base`}
        >
          {switched ? (
            <>
              <p className="font-medium text-sm mb-3">technologies used</p>
              {props.techUsed}
            </>
          ) : (
            props.projectDescription
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
