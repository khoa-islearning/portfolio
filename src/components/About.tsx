import { useEffect, useState } from "react";
import PCModel from "./PCModel";
import { IoLogoPython } from "react-icons/io";
import { BiLogoTypescript } from "react-icons/bi";
import DropdownList, { DropdownListItem } from "./utils/DropdownList";
import { TbBrandCpp } from "react-icons/tb";

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
    const experiences: DropdownListItem[] = [
        {
            title: "IBM Canada",
            time: "May 2022-August 2023",
            jobTitle: "QA/Test Developer Intern",
            techUsed: [
                "DB2", "perl", "python", "Jenkins", "Ansible", "Git", "Prometheus", "Grafana"
            ]
        },
        {
            title: "Yeaman Lab - University of Calgary",
            time: "October 2021-May 2022",
            jobTitle: "Research Assistant",
            techUsed: [
                "C#", "Unity", "R"
            ]
        },
        {
            title: "Apheleia Inc.",
            time: "Apr 2021-October 2021",
            jobTitle: "Backend Developer Intern",
            techUsed: [
                "TypeScript", "NestJS", "REST API", "Firestore"
            ]
        }
    ]

    return (
        <div className="about" id="about">
            <PCModel />
            <div className="about-text">
                <DynamicTitle />
                <p><b>My Tech Stack:</b></p>
                <ul>
                    <li>
                        Language: <IoLogoPython />,
                        <BiLogoTypescript />, <TbBrandCpp /></li>
                    <li>Tools: Git, neovim, Docker</li>
                    <li>Cloud: AWS, S3.</li>
                </ul>
                <p> <b>Work experience:</b></p>
                <DropdownList items={experiences} />
                <p><b>Competitions</b></p>
                <ul>
                    <li style={{ listStyleType: "'\\1F948" }}>
                        <a href="https://devpost.com/software/moosique" target="_blank" rel="noopener noreferrer">
                            2<sup>nd</sup> place in HTC 2021
                        </a>
                    </li>
                    <li style={{ listStyleType: "'\\1F3C6'" }}>
                        <a href="https://devpost.com/software/hymalayas" target="_blank" rel="noopener noreferrer">
                            Best use of Virtual Reality at CalgaryHacks 2022
                        </a>
                    </li>
                </ul>
                <p><b>Currently learning about:</b></p>
                <ul>
                    <li>React</li>
                    <li>3.js</li>
                    <li>Software Information Security</li>
                    <li>3D Modeling</li>
                </ul>
            </div>
        </div >
    );
}
