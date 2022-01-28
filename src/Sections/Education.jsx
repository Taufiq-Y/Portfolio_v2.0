import React from "react";
import Heading from "../Components/common/Heading";
import { BiCalendar } from "react-icons/bi";
import { education } from "../Data";

const Content = ({ item, ltr }) => {
    const { qualification, at, location, start, end } = item;
    return (
        <>
            <h3 className="">{qualification}</h3>
            <p className="text-sm">
                {at}, <br /> {location}.
            </p>
            <div
                className={`flex ${
                    ltr ? "justify-end" : ""
                } items-center gap-2 text-gray-800 dark:text-gray-400 transition-dark text-sm mb-10`}>
                <BiCalendar />
                {start} - {end}
            </div>
        </>
    );
};

const ListItem = ({ item, ltr, last }) => {
    if (ltr)
        return (
            <>
                <div className="text-right">
                    <Content item={item} ltr={ltr} />
                </div>
                <div>
                    <span className="inline-block flex-shrink-0 w-3 h-3 rounded-full bg-teal-600" />
                    {!last && (
                        <div
                            className="w-px h-full bg-teal-600
                    transform translate-x-[6px] -translate-y-[7px]"></div>
                    )}
                </div>
                <div></div>
            </>
        );

    return (
        <>
            <div></div>
            <div className="">
                <div className="flex-shrink-0 w-3 h-3 rounded-full bg-teal-600"></div>
                {!last && (
                    <div
                        className="w-px h-full bg-teal-600
                    transform translate-x-[6px] -translate-y-[7px]"></div>
                )}
            </div>
            <div className="">
                <Content item={item} />
            </div>
        </>
    );
};

function Education() {
    return (
        <div className="my-20 flex items-center flex-col  scroll-mt-20">
            <Heading title={"Education"} />
            <div className="mt-10 grid grid-cols-[1fr_max-content_1fr] gap-x-4">
                {education.map((current, index) => (
                    <ListItem
                        key={index}
                        item={current}
                        ltr={index % 2 === 0}
                        last={education.length - 1 === index}
                    />
                ))}
            </div>
        </div>
    );
}

export default Education;
