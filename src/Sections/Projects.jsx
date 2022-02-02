import React, { useState } from "react";
import Heading from "../Components/common/Heading";

import { projects } from "../Data";
import ProjectCard from "../Components/common/ProjectCard";

function Projects() {
    const [open, setOpen] = useState(false);

    return (
        <div
            id="project"
            className="my-20 flex justify-evenly items-center flex-col text-slate-800 dark:text-slate-300 scroll-mt-20">
            <Heading title="Projects" />
            <div>
                {/* <p className="mt-8 text-center text-lg underline decoration-blue-500 underline-offset-4 ml-2 ">Credentials</p> */}
                <p className="text-2xl mt-8 text-center font-special-elite underline decoration-green-500 underline-offset-8 ">Credentials</p>
                <div className="my-4 text-center text-xl">
                <p>Id: admin@example.com</p>
                <p>Pwd: uselogin@123</p>
                </div>
            </div>
            <div className="mt-10 flex flex-col items-center">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} ltr={index % 2 === 1} />
                    ))}
            </div>
        </div>
    );
}

export default Projects;
