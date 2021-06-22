import React from 'react';
import Typewriter from 'typewriter-effect';
import './Home.css';
function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          'Developer...',
          'Deep Learning Engineer',
          'MERN Stack Developer',
          'Open Source Contributor',
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
