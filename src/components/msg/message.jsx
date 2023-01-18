import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

const DropMessage = ({ msg, setMsg }) => {
  if (msg.active) {
    setTimeout(() => {
      setMsg({ active: false, msg: "" });
    }, [5000]);
  }
  const closeMessage = () => {
    setMsg({ active: false, msg: "" });
  };
  return (
    msg.active && (
      <div
        className={`fixed -bottom-1 transition-all left-2/4 flex-wrap -translate-x-2/4 cstm-grdbg-gry-blk cstm-flex-row w-72 rounded-md p-3 text-wht text-xs 
                    t:text-sm t:w-80
                  ${msg.active ? "-translate-y-4" : "translate-y-4"}  `}
      >
        <p className="w-10/12"> {msg.msg}</p>

        <AiOutlineCloseCircle
          onClick={closeMessage}
          className="absolute translate-x-32 cursor-pointer 
                    t:translate-x-36"
        />
      </div>
    )
  );
};

export default DropMessage;
