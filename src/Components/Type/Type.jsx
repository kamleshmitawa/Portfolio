import Typewriter from "typewriter-effect";

export const Type = () => {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "Team Player and Collaborator",
          "Creative Thinker",
          "Explorer of New Places",
          "Mentor for Aspiring Developers",
          "Lifelong Learner and Tech Enthusiast"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 40,
      }}
    />
  );
};
