import React from "react";

const ButtonOutline = ({ children, ...rest }) => {
    return (
        <a
            className="px-4 border-2  py-2 flex-shrink-0
            flex items-center gap-2 group
            border-teal-600 text-teal-600 
            dark:border-teal-500 dark:text-teal-500 
            hover:bg-teal-600 hover:text-white
            dark:hover:border-teal-700
            dark:hover:bg-teal-700 dark:hover:text-white
            rounded-lg transition-dark"
            {...rest}>
            {children}
        </a>
    );
};

export default ButtonOutline;
