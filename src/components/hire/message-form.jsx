"use client";
import React from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import DropMessage from "../msg/message";

const MessageForm = () => {
  const [messageData, setMessageData] = React.useState({
    senderName: "",
    senderEmail: "",
    msgSubject: "",
    msgBody: "",
  });
  const [msg, setMsg] = React.useState({ active: false, msg: "" });
  const [loading, setLoading] = React.useState(false);

  const router = useRouter();

  const sendMessage = async (e) => {
    e.preventDefault();
    const { senderName, senderEmail, msgSubject, msgBody } = messageData;
    setLoading(true);
    if (
      !senderName ||
      senderName.trim() === "" ||
      !senderEmail ||
      !senderEmail.includes("@") ||
      !msgBody ||
      msgBody.trim() === ""
    ) {
      setMsg({ active: true, msg: "Please enter fitting content to your message data." });
      return;
    }

    try {
      const { data } = await axios.post(`https://portfolio-server-h701.onrender.com/s_m`, {
        senderName,
        senderEmail,
        msgSubject,
        msgBody,
      });
      if (data) {
        console.log(data);
        setMessageData({
          senderName: "",
          senderEmail: "",
          msgSubject: "",
          msgBody: "",
        });
        setMsg({ active: true, msg: "Your message was sent. Thank you for reaching out." });
        router.refresh();
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  const handleMessageData = ({ name, value }) => {
    setMessageData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  return (
    <form
      className="cstm-grdbg-gry-blk rounded-md cstm-flex-col gap-3 text-center w-full p-5 h-96 
                    l-s:gap-5 l-s:h-auto"
      onSubmit={(e) => sendMessage(e)}
    >
      <fieldset disabled={loading} className="cstm-flex-col gap-3 w-full disabled:grayscale">
        <DropMessage msg={msg} setMsg={setMsg} />
        <div
          className="cstm-flex-col gap-3 w-full
                    l-s:cstm-flex-row l-s:gap-5"
        >
          <input
            onChange={(e) => handleMessageData(e.target)}
            required
            placeholder="your name"
            className="cstm-input"
            type="text"
            name="senderName"
            value={messageData.senderName}
          />
          <input
            onChange={(e) => handleMessageData(e.target)}
            required
            placeholder="your email"
            className="cstm-input"
            type="email"
            name="senderEmail"
            value={messageData.senderEmail}
          />
        </div>
        <input
          onChange={(e) => handleMessageData(e.target)}
          placeholder="subject"
          className="cstm-input"
          type="text"
          name="msgSubject"
          value={messageData.msgSubject}
        />
        <textarea
          onChange={(e) => handleMessageData(e.target)}
          required
          placeholder="message"
          rows={5}
          className="cstm-input resize-none"
          name="msgBody"
          value={messageData.msgBody}
        />
        <button className="cstm-grdbg-gr-1-3 w-full rounded-md p-2 font-sora font-medium cursor-pointer hover:text-wht transition-all">
          {loading ? "SENDING" : "SEND"}
        </button>
      </fieldset>
    </form>
  );
};

export default MessageForm;
