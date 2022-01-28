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

            <div className="mt-10 flex flex-col items-center">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} ltr={index % 2 === 1} />
                ))}
            </div>
        </div>
    );
}

export default Projects;
