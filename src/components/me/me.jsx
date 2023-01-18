import { AiOutlineDown } from "react-icons/ai";

const Init = () => {
  return (
    <div id="r" className="h-screen bg-blk cstm-flex-col w-full text-center p-5 px-10">
      <div
        className="text-center cstm-flex-col gap-2  mt-auto
                  t:w-8/12"
      >
        <p
          className="font-ibm text-wht text-xs
                      m-l:text-sm
                      t:text-base
                      l-s:text-lg"
        >
          Hello there, I am
        </p>
        <p
          className="cstm-text-grd-gr-1-3 font-sora font-extrabold text-4xl
                      m-l:text-5xl
                      t:text-6xl
                      l-s:text-7xl"
        >
          Rein Miguel Buenaventura
        </p>
        <p
          className="font-ibm text-wht text-xs
                    m-l:text-sm
                    t:text-base
                    l-s:text-lg"
        >
          a <span className="cstm-text-grd-gr-1-3 font-medium">web-application</span> developer
        </p>

        <p
          className="font-ibm text-xs text-wht mt-10
                  m-l:text-sm
                  t:text-base
                  l-s:text-lg"
        >
          I am passionate in building web applications that have a purpose and I{" "}
          <span className="text-pnk3">love solving problems.</span> Creating something from the
          ground up excites me and{" "}
          <span className="text-pnk3">I always finish what I started.</span>
        </p>
      </div>
      <AiOutlineDown className="text-wht mt-auto animate-bounce opacity-50" />
    </div>
  );
};

export default Init;
