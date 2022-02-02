import React, { useState } from "react";
import mpgr from "../../assets/projects/mpgr.png";
import krypt from "../../assets/projects/krypt.png";
import cars from "../../assets/projects/cars.png";
import blog from "../../assets/projects/blog.png";
import dis from "../../assets/projects/dis.png";
import mass from "../../assets/projects/mass.png";
import todo from "../../assets/projects/todo.png";
import eth from "../../assets/images/eth.png"
import sh from "../../assets/images/sh.png"
import html from "../../assets/images/html.png";
import css from "../../assets/images/css.png";
import js from "../../assets/images/js.png";
import mui from "../../assets/images/mui.png";
import gql from "../../assets/images/gql.png";
import nodejs from "../../assets/images/nodejs.png";
import react from "../../assets/images/react.png";
import mongodb from "../../assets/images/mongodb.png";
import router from "../../assets/images/router.svg";
import mysql from "../../assets/images/mysql.png";
import redux from "../../assets/images/redux.png";
import tailwindcss from "../../assets/images/tailwind.svg";
import socket from "../../assets/images/socket.svg";
import express from "../../assets/images/express.svg";
import AWS_S3 from "../../assets/images/s3.png";
import save_local from "../../assets/images/save_local.png";
import bootstrap from "../../assets/images/bootstrap.png";
import classNames from "classnames";
import { Transition } from "@headlessui/react";
import { BiLinkExternal } from "react-icons/bi";
import { IoMdKey } from "react-icons/io";
import { BsGithub } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";

const assertMap = {
    medical_pagr: mpgr,
    krypt: krypt,
    car_rental: cars,
    blog: blog,
    mass: mass,
    todo: todo,
    dis: dis,
    html,
    css,
    bootstrap,
    router,
    save_local,
    js,
    mui,
    eth,
    sh,
    gql,
    nodejs,
    react,
    redux,
    mongodb,
    mysql,
    tailwindcss,
    socket,
    express,
    AWS_S3,
};

const Button = ({ link, children }) => {
    return (
        <a
            className="px-4 py-2 dark:bg-slate-800 bg-slate-200 transition-dark 
            rounded-lg flex items-center gap-2 hover:ring-4 ring-teal-600"
            href={link}
            target={"_blank"}>
            {children}
        </a>
    );
};

const ProjectCard = ({ project }) => {
    const { title, desc, image, url, built, demoCredential } = project;
    const [open, setOpen] = useState(false);

    return (
        <div className="flex gap-4 my-10 justify-center md:items-start items-center md:flex-row flex-col w-fit">
            <div className="p-4 group transition-dark bg-slate-200 dark:bg-slate-800 rounded-lg ">
                <div className="overflow-hidden rounded-lg shadow-lg">
                    <img
                        src={assertMap[image]}
                        className="transition-transform duration-1000 transform group-hover:scale-150 w-96"
                        alt=""
                    />
                </div>
            </div>
            <div className="flex flex-col justify-evenly gap-4 max-w-sm">
                <h2 className="text-2xl">{title}</h2>

                <p className="max-w-[45ch] text-justify">{desc}</p>
                {/* <h3>Built Using</h3> */}
                <div className="flex gap-4 flex-wrap items-center">
                    {built.map((tech, index) => (
                        <div
                            key={index}
                            className="w-8 h-8 flex justify-center items-center 
                            dark:bg-slate-800 bg-gray-200 p-1 rounded-lg transition-dark">
                            <img src={assertMap[tech]} className="" alt={tech} />
                        </div>
                    ))}
                </div>
                <div className="space-x-4 flex justify-between">
                    <Button link={url.live}>
                        Live
                        <BiLinkExternal />
                    </Button>
                    <Button link={url.frontend}>
                        <BsGithub /> Client
                    </Button>
                    <Button link={url.backend}>
                        <BsGithub /> Server
                    </Button>
                    {/* 
                    <Button link={url.backend} action={"Backend Code"} /> */}

                    {/* {demoCredential && (
                        <button
                            onClick={() => setOpen((prev) => !prev)}
                            className="px-4 py-2 hover:ring-4 ring-teal-600
                             dark:bg-slate-800 bg-slate-200 transition-dark rounded-lg">
                            <IoMdKey />
                        </button>
                    )} */}
                </div>

                <Transition
                    show={open}
                    enterFrom="transition opacity-0"
                    enterTo="transition duration-500 opacity-100"
                    leaveFrom="transition opacity-100"
                    leaveTo="transition  duration-500 opacity-0">
                    <div className="p-4 relative grid grid-cols-[max-content_1fr] items-center w-fit ml-auto px-8 gap-x-2 dark:bg-slate-800 bg-slate-200 transition-dark rounded-lg">
                        <div className="bg-inherit absolute right-4 -top-2 w-4 h-4 transform rotate-45"></div>

                        <h2 className="col-span-full text-lg text-center mb-4 underline decoration-teal-600 underline-offset-2">
                            Demo Credentials
                        </h2>
                        {demoCredential?.map((credential, index) => (
                            <React.Fragment key={index}>
                                <div className="">
                                    <AiOutlineUser />
                                </div>
                                <div className="select-all">{credential.email}</div>
                                <div className="">
                                    <RiLockPasswordLine />
                                </div>
                                <div className="select-all">{credential.password}</div>
                                <div className="mb-4 col-span-full"></div>
                            </React.Fragment>
                        ))}
                    </div>
                </Transition>
            </div>
        </div>
    );
};

export default ProjectCard;
