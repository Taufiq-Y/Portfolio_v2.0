import React from "react";
import Heading from "../Components/common/Heading";

function About() {
    return (
        <div
            id="about"
            className="my-20  scroll-mt-20 flex justify-evenly items-center flex-col text-slate-800 dark:text-slate-300">
            <Heading title={"About"} />
            <div className="space-y-4 font-poppins">
                <h2>
                    Hello, <br /> My name is <em className="font-semibold text-lg">Muhammed Taufiq Y</em>
                </h2>
                <div className="text-justify space-y-4 max-w-[45ch] tracking-wide ">
                    <p>
                        I'm a Full Stack Developer, I have been studying web
                        development and I develop primarily with{" "}
                        <em className="font-semibold not-italic underline underline-offset-2 dark:decoration-blue-400 decoration-blue-500">
                            React
                        </em>{" "}
                        and{" "}
                        <em className="font-semibold not-italic underline underline-offset-2 dark:decoration-green-400 decoration-green-500">
                            Node.js,
                        </em>{" "}
                    </p>
                    <p>
                        I used to provide responsive Frontend interfaces, Backend development and
                        Single Page Web Applications to meet both technical and consumer needs, and
                        see through a project from conception to the end product. Also I have the
                        ability to work with many frameworks, client and server side languages.
                    </p>
                
                    <p>Thank you, Enjoy.</p>
                </div>
            </div>
        </div>
    );
}

export default About;
