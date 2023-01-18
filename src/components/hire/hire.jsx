import React from "react";
import Contacts from "./contacts";
import MessageForm from "./message-form";

const HireMe = () => {
  return (
    <div
      id="h_m"
      className="min-h-screen h-auto cstm-flex-col p-5 gap-5
                m-l:px-10"
    >
      <p
        className="cstm-text-grd-gry-blk font-sora font-extrabold text-4xl
                  m-l:text-5xl
                  t:text-6xl"
      >
        hire me
      </p>
      <div
        className="cstm-flex-col w-full gap-5
                  t:cstm-flex-row
                  l-s:w-8/12"
      >
        <MessageForm />
        <Contacts />
      </div>
    </div>
  );
};

export default HireMe;
