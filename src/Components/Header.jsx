import React, { useState } from "react";
import useAppContext, { action } from "../Context/AppContext";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { RiMenu3Fill } from "react-icons/ri";
import classNames from "classnames";
import { IoCloseOutline } from "react-icons/io5";

const NavList = ({ children }) => {
    return <ul className="flex justify-center items-center gap-4">{children}</ul>;
};

const Link = ({ children, ...rest }) => {
    return (
        <li>
            <a
                className={`dark:text-slate-300 text-slate-800 
            hover:font-semibold font-mono hover:bg-gray-100
            dark:hover:bg-slate-800 rounded-lg tracking-widest 
            transition-dark
            px-4 py-3 cursor-pointer `}
                {...rest}>
                {children}
            </a>
        </li>
    );
};

const MenuButton = ({ children, href, setOpen }) => {
    return (
        <li className="text-center">
            <button
                onClick={() => {
                    setOpen(false);
                    window.location = href;
                }}
                className={`dark:text-slate-300 text-slate-800 
                hover:font-semibold font-mono hover:bg-gray-100
                dark:hover:bg-slate-800 rounded-lg tracking-widest 
                transition-dark
                px-4 py-3 cursor-pointer `}>
                {children}
            </button>
        </li>
    );
};

function Header() {
    const {
        dispatch,
        state: { darkMode },
    } = useAppContext();

    const [open, setOpen] = useState(false);

    return (
        <>
            <div className="flex justify-between px-10 lg:px-24 py-4 fixed left-0 right-0 top-0 z-10 dark:bg-slate-900 bg-slate-50 transition-dark">
                <div className="text-xl font-special-elite tracking-wider text-slate-900 dark:text-slate-50 transition-dark">
                    Muhammed.dev
                </div>
                <div className="hidden lg:block">
                    <NavList>
                        <Link href="#home">Home</Link>
                        <Link href="#about">About</Link>
                        <Link href="#skill">Skill</Link>
                        {/* <Link href="#project"></Link> */}
                        <Link href="#project">Project</Link>
                        <a
                            href="#hire-me"
                            className="rounded-lg px-4 py-2 dark:bg-teal-600 bg-teal-500 text-white font-mono transition-dark">
                            Hire Me
                        </a>
                        <button
                            onClick={() => dispatch(action.toggleDarkTheme())}
                            className="relative bg-slate-200 dark:bg-slate-600 rounded-lg p-5 overflow-hidden">
                            <BsMoonFill
                                className={classNames(
                                    "absolute inset-0 m-auto dark:text-slate-100 text-slate-800",
                                    {
                                        "transition-transform duration-1000 translate-y-0":
                                            darkMode,
                                        "transition-transform duration-1000 translate-y-10":
                                            !darkMode,
                                    }
                                )}
                            />
                            <BsSunFill
                                className={classNames(
                                    "absolute inset-0 m-auto  dark:text-slate-100 text-slate-800",
                                    {
                                        "transition-transform duration-1000 translate-y-0":
                                            !darkMode,
                                        "transition-transform duration-1000 translate-y-10":
                                            darkMode,
                                    }
                                )}
                            />
                        </button>
                    </NavList>
                </div>

                <div className="flex gap-4 lg:hidden">
                    <div
                        onClick={() => setOpen(true)}
                        className="rounded-lg h-full w-10 flex justify-center items-center dark:bg-teal-600 bg-teal-500 text-white font-mono transition-dark">
                        <RiMenu3Fill size={"1.2rem"} />
                    </div>
                    <button
                        onClick={() => dispatch(action.toggleDarkTheme())}
                        className="relative bg-slate-200 dark:bg-slate-600 rounded-lg p-5 overflow-hidden transition-dark">
                        <BsMoonFill
                            className={classNames(
                                "absolute inset-0 m-auto dark:text-slate-100 text-slate-800",
                                {
                                    "transition-transform duration-1000 translate-y-0": darkMode,
                                    "transition-transform duration-1000 translate-y-10": !darkMode,
                                }
                            )}
                        />
                        <BsSunFill
                            className={classNames(
                                "absolute inset-0 m-auto  dark:text-slate-100 text-slate-800",
                                {
                                    "transition-transform duration-1000 translate-y-0": !darkMode,
                                    "transition-transform duration-1000 translate-y-10": darkMode,
                                }
                            )}
                        />
                    </button>
                </div>
            </div>
            {/* <Transition
                show={open}
                enterFrom="transition opacity-0 z-40"
                enterTo="transition duration-500 opacity-100 z-40"
                leaveFrom="transition opacity-100 z-40"
                leaveTo="transition duration-500 opacity-0 "> */}
            {open && (
                <>
                    {" "}
                    <div
                        onClick={() => setOpen(false)}
                        className="absolute right-10 top-10 w-10 h-10 z-40 rounded-lg 
                    flex justify-center items-center dark:bg-teal-600 bg-teal-500 text-white font-mono transition-dark">
                        <IoCloseOutline size={"1.2rem"} />
                    </div>
                    <div className="absolute inset-0 flex flex-col justify-center items-center  h-screen z-30 dark:bg-slate-700 bg-slate-50">
                        <ul className="space-y-10">
                            <MenuButton setOpen={setOpen} href="#home">
                                Home
                            </MenuButton>
                            <MenuButton setOpen={setOpen} href="#about">
                                About
                            </MenuButton>
                            <MenuButton setOpen={setOpen} href="#skill">
                                Skill
                            </MenuButton>
                            <MenuButton setOpen={setOpen} href="#project">
                                Project
                            </MenuButton>
                            <MenuButton setOpen={setOpen} href="#hire-me">
                                <div className="rounded-lg px-4 py-2 dark:bg-teal-600 bg-teal-500 text-white font-mono">
                                    Hire Me
                                </div>
                            </MenuButton>
                        </ul>
                    </div>{" "}
                </>
            )}
            {/* </Transition> */}
        </>
    );
}

export default Header;
