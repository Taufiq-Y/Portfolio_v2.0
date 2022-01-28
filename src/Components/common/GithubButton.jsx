import React from "react";
import { BsGithub } from "react-icons/bs";
import ButtonOutline from "./ButtonOutline";

function GithubButton() {
    return (
        <ButtonOutline href="https://github.com/Taufiq-Y" target={"_blank"}>
            <BsGithub />
        </ButtonOutline>
    );
}

export default GithubButton;
