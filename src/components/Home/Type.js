import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Front-end Developer (ReactJS)",
          "Back-end Developer (PHP, Laravel)",
          "Full-stack Developer (in progress)",
          "IT Intern",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
