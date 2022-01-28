import React, { createContext, useContext, useReducer } from "react";

const AppContext = createContext();

const useAppContext = () => {
    return useContext(AppContext);
};

const initialState = {
    darkMode: JSON.parse(localStorage.getItem("theme")) ?? true,
};

function AppProvider({ children }) {
    const [state, dispatch] = useReducer(appStateReducer, initialState);
    return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
}
const action = {
    toggleDarkTheme: () => ({ type: "TOGGLE_DARK_MODE" }),
};

function appStateReducer(state = initialState, action) {
    switch (action.type) {
        case "TOGGLE_DARK_MODE":
            localStorage.setItem("theme", !state.darkMode);
            return {
                ...state,
                darkMode: !state.darkMode,
            };
        default:
            localStorage.setItem("theme", state.darkMode);
            return state;
    }
}

export default useAppContext;
export { AppProvider, action };
