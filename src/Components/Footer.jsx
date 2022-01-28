import React from "react";
import { BsSuitHeartFill } from "react-icons/bs";

function Footer() {
    return (
        <div className="p-4 flex justify-center flex-col items-center">
            <div className="flex justify-center items-center gap-2">
                Designed & developed by Muhammed Taufiq Y with <BsSuitHeartFill className="text-red-500" />
            </div>
            <div>
                Using{" "}
                <a
                    href="https://reactjs.org/"
                    target={"_blank"}
                    className="underline decoration-violet-500 underline-offset-2">
                    React
                </a>
                ,
                <a
                    href="https://tailwindcss.com/"
                    target={"_blank"}
                    className="underline decoration-blue-500 underline-offset-2 ml-2">
                    Tailwind CSS
                </a>
            </div>
        </div>
    );
}

export default Footer;
