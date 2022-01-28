import React from "react";
import { AiOutlineArrowDown } from "react-icons/ai";

function ResumeButton() {
    return (
        <>
            <a
                href="https://drive.google.com/file/d/1KGHdOZfmMbJAcqQssM16bm1cxbcPvmAH/view?usp=sharing"
                target={"_blank"}
                className="text-left 
                flex  items-center
                gap-2 group flex-shrink-0
                pr-4 py-2 w-fit relative
                dark:bg-teal-700 bg-teal-600 rounded-lg hover:shadow-md">
                <AiOutlineArrowDown className="text-white transform transition-transform ml-2" />
                <span className="text-sm text-white">MY RESUME</span>
            </a>
        </>
    );
}

export default ResumeButton;
