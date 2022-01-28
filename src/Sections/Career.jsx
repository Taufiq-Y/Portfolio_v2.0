import React from "react";
import Me from "../assets/images/me.jpg";
import { IoSend } from "react-icons/io5";

function Career() {
    return (
        <section className="flex flex-col items-center">
            <div className="dark:bg-slate-800 bg-slate-200 transition-dark p-8 rounded-xl">
                <div className="flex gap-8 justify-between">
                    <div className="dark:text-slate-200 text-slate-900 transition-dark ">
                        <h2 className="text-2xl font-bold">Have a Carrer Opportunity?</h2>
                        {/* <div className="block">Contact me</div> */}
                        <a
                            href="#hire-me"
                            className="py-2 mt-8 w-fit px-4
                            flex items-center gap-2 dark:bg-slate-700 bg-slate-300 text-slate-900 dark:text-white transition-dark rounded-lg">
                            Contact me
                            <IoSend />
                        </a>
                    </div>
                    <img src={Me} alt="Meyazhagan" className="w-28 h-28 object-cover rounded-xl " />
                </div>
            </div>
        </section>
    );
}

export default Career;
