'use client'
import React, { useEffect, useRef } from "react";
import Typewriter from "typewriter-effect/dist/core";

export const Info = () => {
  const typeWriterRef = useRef();

  useEffect(() => {
    const typewriter = new Typewriter(typeWriterRef.current, {
      strings: ["Front-End Developer", "Web Developer"],
      autoStart: true,
      loop: true
    });

  }, []);

  return (
    <div className="text-white">
      <div>
        <h1 className="text-3xl">Hi</h1>
        <p className="text-3xl">I'm Haroon Hammad</p>
        <p className="text-2xl" ref={typeWriterRef}></p>
      </div>
    </div>
  );
};
