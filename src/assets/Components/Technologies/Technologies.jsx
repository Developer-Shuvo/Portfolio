import React from "react";
import {
  RiCss3Fill,
  RiHtml5Fill,
  RiJavascriptFill,
  RiNextjsFill,
  RiNextjsLine,
  RiNodejsLine,
  RiReactjsLine,
  RiTailwindCssFill,
} from "react-icons/ri";
import { SiFigma, SiGithub, SiMongodb } from "react-icons/si";

const Technologies = () => {
  return (
    <div className="pb-24 ">
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
        {/* Next js */}
        <div>
          <RiNextjsLine className="text-7xl text-cyan-400" />
        </div>
        {/* Mongo DB */}
        <div>
          <RiTailwindCssFill className="text-7xl text-cyan-400" />
        </div>
        {/* Node js */}
        <div>
          <RiNodejsLine className="text-7xl text-cyan-400" />
        </div>
        {/* Mongo DB */}
        <div>
          <SiMongodb className="text-7xl text-cyan-400" />
        </div>
        {/* Github */}
        <div>
          <SiGithub className="text-7xl text-cyan-400" />
        </div>
        {/* Figma */}
        <div>
          <SiFigma className="text-7xl text-pink-500" />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
