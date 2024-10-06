import { useEffect, useState } from "react";
import PCModel from "./PCModel";

const DynamicText = () => {
  const words = ["maker", "tinkerer", "explorer", "learner"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 1500); // Change word every 2 seconds

    return () => clearInterval(intervalId);
  }, []);

  return <h1>I'm a {words[index]}</h1>;
};

export default function About() {
  return (
    <div className="about">
      <PCModel />
      <div className="about-text">
        <DynamicText />
        <p>Hi! My name is Khoa, and I will be a recent graduate in 2025.</p>
        <p>
          Studying Computer Science introduced me to coding and technology, soon
          I was fascinated with the possibilities.
        </p>
        <p>
          My Tech Stack: <br /> My Text Editor: Nvim \\Language: python,
          typescript, c++ Currently I'm learning about: react, 3js, information
          security in software
        </p>
        <p> Work experience + tech used + request resume</p>
        <p> IBM Canada </p>
        <p> Yeaman Lab </p>
        <p> Apheleia Inc. </p>
        <p>
          Competitions: With my friends, we placed 2nd in HTC 2021 and won
          CalgaryHack in Best use of Virtual Reality
        </p>
        <p>
          Hobby: photography, 3dprinting, building self-host service with my
          homelab
        </p>
      </div>
    </div>
  );
}
