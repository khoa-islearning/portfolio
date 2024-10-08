import { useState } from "react";
import "@/styles/components/DropdownList.sass"

export type DropdownListItem = {
    title: string;
    time: string;
    jobTitle: string;
    techUsed: string[];
}

type DropdownProp = {
    items: DropdownListItem[]
}
const DropdownList = ({ items }: DropdownProp) => {
    const [openIndex, setOpenIndex] = useState<number>(0);
    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? -1 : index)
    }


    return (
        <ul>
            {items.map((item: DropdownListItem, index) => (
                <li className={index === openIndex ? "chosen" : "notchosen"} onClick={() => handleToggle(index)}>
                    <div>
                        <b className="itemTitle">{item.title}</b> {openIndex === index && item.time}
                    </div>
                    {openIndex === index && (
                        <div>
                            <div className="jobTitle">{item.jobTitle}</div>
                            <div>Technologies Used:&nbsp;&nbsp;{item.techUsed.join(", ")}</div>
                        </div>
                    )}
                </li>
            ))
            }
        </ul >
    )
}

export default DropdownList;
