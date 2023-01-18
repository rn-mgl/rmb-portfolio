"use client";
import React from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [currActive, setCurrActive] = React.useState("");

  const handleCurrentActive = (current) => {
    setCurrActive(current);
  };

  const handleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  const NavIcon = isVisible ? AiOutlineClose : AiOutlineMenu;

  React.useEffect(() => {
    const anchor = window.location.hash;
    if (anchor) {
      setCurrActive(anchor.slice(1));
    }
  }, [setCurrActive]);

  React.useEffect(() => {
    window.addEventListener("wheel", (e) => {
      if (e.deltaY < 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });

    return () => window.removeEventListener("wheel", setIsVisible);
  }, []);

  return (
    <React.Fragment>
      <NavIcon
        onClick={handleVisibility}
        className={`${
          isVisible ? "text-pnk3" : "text-gr3"
        } scale-105 z-20 fixed top-5 right-5 cursor-pointer
         t:hidden`}
      />

      <div
        className={`${
          isVisible ? "translate-y-0" : "-translate-y-96"
        }             fixed top-3.5 left-2/4 -translate-x-2/4 scroll-smooth z-10
                      cstm-flex-col flex-wrap p-3 gap-5 
                      font-ibm font-medium text-sm text-gr3
                      backdrop-blur-sm bg-wht bg-opacity-80 border-wht border-[1px] border-opacity-10 w-11/12 rounded-md shadow-xl
                      transition-all duration-75

                      t:cstm-flex-row t:gap-20 t:top-0 t:p-5 t:w-full t:rounded-none`}
      >
        <a
          href="#r"
          onClick={() => {
            handleCurrentActive("r");
            handleVisibility();
          }}
          className={`${currActive === "r" || currActive === "" ? "text-pnk3" : ""}`}
        >
          rein
        </a>
        <a
          href="#a_m"
          onClick={() => {
            handleCurrentActive("a_m");
            handleVisibility();
          }}
          className={`${currActive === "a_m" ? "text-pnk3" : ""}`}
        >
          about me
        </a>
        <a
          href="#t_s"
          onClick={() => {
            handleCurrentActive("t_s");
            handleVisibility();
          }}
          className={`${currActive === "t_s" ? "text-pnk3" : ""}`}
        >
          tech stack
        </a>
        <a
          href="#m_p"
          onClick={() => {
            handleCurrentActive("m_p");
            handleVisibility();
          }}
          className={`${currActive === "m_p" ? "text-pnk3" : ""}`}
        >
          my projects
        </a>
        <a
          href="#h_m"
          onClick={() => {
            handleCurrentActive("h_m");
            handleVisibility();
          }}
          className={`${currActive === "h_m" ? "text-pnk3" : ""}`}
        >
          hire me
        </a>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
