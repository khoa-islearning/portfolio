import { useEffect, useState } from "react";
import PCModel from "./PCModel";
import { IoLogoPython } from "react-icons/io";
import { BiLogoTypescript } from "react-icons/bi";

const DynamicTitle = () => {
    const words = ["Khoa", "graduating in 2025", "a tinkerer", "an explorer", "a learner"];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalIndex = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 3000)
        return () => clearInterval(intervalIndex);
    }, []);

    return <h1>I'm {words[index]}</h1>;
};



export default function About() {
    return (
        <div className="about" id="about">
            <PCModel />
            <div className="about-text">
                <DynamicTitle />
                <p><b>My Tech Stack:</b></p>
                <ul>
                    <li>Language: <IoLogoPython style={{ cursor: "pointer" }} />, <BiLogoTypescript style={{ cursor: "pointer" }} />, C++</li>
                    <li>Tools: Git, neovim, Docker</li>
                    <li>Cloud: AWS, S3.</li>
                </ul>
                <p> <b>Work experience:</b> + job title tech used + request resume</p>
                <ul>
                    <li>IBM Canada </li>
                    <li>Yeaman Lab </li>
                    <li>Apheleia Inc. </li>
                </ul>
                <p><b>Competitions</b></p>
                <ul>
                    <li>2<sup>nd</sup> place in HTC 2021</li>
                    <li>Best use of Virtual Reality at CalgaryHacks 2022</li>
                </ul>
                <p><b>Currently learning about:</b></p>
                <ul>
                    <li>React</li>
                    <li>3.js</li>
                    <li>Software Information Security</li>
                    <li>3D Modeling</li>
                </ul>
            </div>
        </div>
    );
}
