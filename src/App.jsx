import React from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Theme from "./Components/Theme";
import { AppProvider } from "./Context/AppContext";

function App() {
    return (
        <AppProvider>
            <Theme>
                <div
                    className="dark:bg-slate-900 dark:text-slate-50 bg-slate-50 min-h-screen transition-dark 
                ">
                    <Header />

                    <Main />
                </div>
            </Theme>
        </AppProvider>
    );
}

export default App;
