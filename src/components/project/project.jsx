import React from "react";
import SingleProject from "./single-project";
import takomommy from "../../../public/takomommy logo.jpg";
import comms from "../../../public/comms logo.jpg";
import grasp from "../../../public/grasp logo.jpg";

const MyProjects = () => {
  return (
    <div id="m_p" className="min-h-screen h-auto cstm-flex-col text-center gap-5 p-5 px-10">
      <p
        className="font-sora cstm-text-grd-gry-blk font-extrabold text-4xl
                  m-l:text-5xl m-l:leading-normal
                  t:text-6xl t:leading-relaxed
                  l-s:text-7xl l-s:leading-loose"
      >
        my projects
      </p>
      <p
        className="font-ibm text-xs
                  m-l:text-sm
                  t:w-8/12 t:text-base
                  l-s:text-lg"
      >
        these are all <span className="text-pnk3">personal projects</span> built to{" "}
        <span className="text-pnk3">strengthen and widen my foundation</span> in web development.
      </p>
      <div
        className="csmt-flex-col w-full
                  t:w-8/12
                  l-s:w-11/12 l-s:cstm-flex-row"
      >
        <SingleProject
          projectName={
            <React.Fragment>
              tako <span className="text-pnk3">mommy</span>
            </React.Fragment>
          }
          projectDescription={
            <React.Fragment>
              <span className="text-pnk3">Tako mommy</span> is a website made for ordering our
              takoyaki. It has a client side where you can order, and an admin side where we can
              receive what you ordered.
            </React.Fragment>
          }
          techUsed={
            <React.Fragment>
              <p>React JS</p> <p> Vanilla CSS</p> <p>Node JS</p> <p>Express</p> <p>MongoDB</p>
            </React.Fragment>
          }
          url="https://takomommy.vercel.app/"
          preview={takomommy}
        />
        <SingleProject
          projectName={
            <React.Fragment>
              grasp <span className="text-pnk3">by rltn </span>
            </React.Fragment>
          }
          projectDescription={
            <React.Fragment>
              <span className="text-pnk3">Grasp by rltn</span> is a simple{" "}
              <span className="text-pnk3">learning management system</span> I made to get used to
              queries and managing data in the database.{" "}
              <span className="text-pnk3">Rltn means relation,</span> it is a term I used for my
              projects to have an identity.
            </React.Fragment>
          }
          techUsed={
            <React.Fragment>
              <p>React JS</p> <p>Tailwind CSS</p> <p>Node JS</p> <p>Express</p> <p>mySql</p>
            </React.Fragment>
          }
          url="https://grasp-rltn.vercel.app/"
          preview={grasp}
        />
        <SingleProject
          projectName={
            <React.Fragment>
              comms <span className="text-pnk3">by rltn</span>
            </React.Fragment>
          }
          projectDescription={
            <React.Fragment>
              <span className="text-pnk3">Comms by rltn</span> is a simple{" "}
              <span className="text-pnk3">messaging website</span> I made to know the basic usage
              and functionalities of <span className="text-pnk3">web sockets/socket.io.</span>
            </React.Fragment>
          }
          techUsed={
            <React.Fragment>
              <p>React JS</p> <p>Tailwind CSS</p> <p>Node JS</p> <p>Express</p> <p>mySql</p>
              <p>socket.io</p>
            </React.Fragment>
          }
          url="https://comms-rltn.vercel.app/"
          preview={comms}
        />
      </div>
    </div>
  );
};

export default MyProjects;
