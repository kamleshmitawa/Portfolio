import Typewriter from "typewriter-effect";

export const Type = () => {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "Chess Enthusiast",
          "Creative Thinking",
          "Exploring New Places",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 40,
      }}
    />
  );
};
