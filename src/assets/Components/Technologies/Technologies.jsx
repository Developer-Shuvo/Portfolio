import React from "react";
import {
  RiCss3Fill,
  RiHtml5Fill,
  RiJavascriptFill,
  RiReactjsLine,
} from "react-icons/ri";

const Technologies = () => {
  return (
    <div className="pb-24">
      <h1 className="my-20 text-center text-4xl">Technologies</h1>

      {/* Icons */}
      <div className="flex flex-wrap items-center justify-center gap-4">
        {/* Html */}
        <div className="p4">
          <RiHtml5Fill className="text-7xl text-orange-500" />
        </div>
        {/* CSS */}
        <div className="p4">
          <RiCss3Fill className="text-7xl text-sky-600" />
        </div>
        {/* JavaScript */}
        <div className="p4">
          <RiJavascriptFill className="text-7xl text-yellow-400" />
        </div>
        {/* React */}
        <div>
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
