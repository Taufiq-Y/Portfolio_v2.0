import React from "react";
import useAppContext from "../Context/AppContext";

function Theme({ children }) {
    const {
        state: { darkMode },
    } = useAppContext();
    return <div className={darkMode ? "dark" : ""}>{children}</div>;
}

export default Theme;
