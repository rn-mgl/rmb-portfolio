"use client";
import Link from "next/link";
import React from "react";
import { AiOutlineCopy, AiOutlineArrowRight } from "react-icons/ai";
import DropMessage from "../msg/message";

const Contacts = () => {
  const [isCopied, setIsCopied] = React.useState(false);
  const [msg, setMsg] = React.useState({ active: false, msg: "" });

  const activeMesage = () => {
    setIsCopied((prev) => (prev ? prev : !prev));
  };

  const copyText = async (text) => {
    await window.navigator.clipboard?.writeText(text);
    setMsg({ active: true, msg: `${text} copied!` });
  };

  return (
    <div
      className="cstm-grdbg-gry-blk w-full rounded-md p-3 text-center cstm-flex-col gap-3 h-96 
                  l-s:h-auto"
    >
      {isCopied && <DropMessage msg={msg} setMsg={setMsg} />}

      <p
        className="cstm-text-grd-gr-1-3 font-sora font-bold text-xl
              m-l:text-2xl"
      >
        my contacts
      </p>
      <div className="cstm-grdbg-gr-1-3 rounded-md p-3 w-full">
        <p
          className="font-ibm font-medium text-sm mb-3
                    m-l:text-lg"
        >
          PHONE
        </p>
        <div className="cstm-flex-row gap-2 text-wht my-2">
          <p
            className="font-ibm text-xs 
                      m-l:text-sm
                      t:text-base"
          >
            0905 278 2728
          </p>
          <AiOutlineCopy
            onClick={() => {
              copyText("0905 278 2728");
              activeMesage();
            }}
            className="cursor-pointer"
          />
        </div>
        <div className="cstm-flex-row gap-2 text-wht ">
          <p
            className="font-ibm text-xs
                      m-l:text-sm
                      t:text-base"
          >
            0960 301 8916
          </p>
          <AiOutlineCopy
            onClick={() => {
              copyText("0960 301 8916");
              activeMesage();
            }}
            className="cursor-pointer"
          />
        </div>
      </div>
      <div className="cstm-grdbg-gr-1-3 rounded-md p-3 w-full">
        <p
          className="font-ibm font-medium text-sm mb-3
                    m-l:text-lg"
        >
          EMAIL
        </p>
        <div className="cstm-flex-row gap-2 text-wht ">
          <p
            className="font-ibm text-xs
                      m-l:text-sm
                      t:text-base"
          >
            reinb2ra@gmail.com
          </p>
          <AiOutlineCopy
            onClick={() => {
              copyText("reinb2ra@gmail.com");
              activeMesage();
            }}
            className="cursor-pointer"
          />
        </div>
      </div>
      <div className="cstm-grdbg-gr-1-3 rounded-md p-3 w-full">
        <p
          className="font-ibm font-medium text-sm mb-3
                    m-l:text-lg"
        >
          GITHUB
        </p>
        <Link
          href="https://github.com/rn-mgl"
          target="_blank"
          className="font-ibm text-xs text-wht cstm-flex-row gap-2
                      m-l:text-sm 
                      t:text-base"
          rel="noreferrer"
        >
          rn-mgl
          <AiOutlineArrowRight className="cursor-pointer" />
        </Link>
      </div>
    </div>
  );
};

export default Contacts;
