import React from "react";
import { IoSend } from "react-icons/io5";
// import emailjs from '@emailjs/browser';
import emailjs from "emailjs-com";

function Contact() {
    
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('gmail', 'template_xs0ut7q', e.target, 'user_RYJiCJa4ahC0PEaoHWa3d')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      };

    return (
        <form onSubmit={sendEmail}>
        <div className="grid grid-cols-12 gap-4">
            <div className="dark:bg-slate-800 transition-dark dark:text-slate-100 text-slate-800 bg-slate-200 rounded-lg py-2 px-4  col-span-6 flex flex-col">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="your name"
                    className="bg-transparent focus:outline-none py-1"
                />
            </div>
            <div className="dark:bg-slate-800 transition-dark dark:text-slate-100 text-slate-800 bg-slate-200 rounded-lg py-2 px-4  col-span-6 flex flex-col">
                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    required
                    placeholder="your_email@gmail.com"
                    className="bg-transparent focus:outline-none py-1"
                />
            </div>
            <div className="dark:bg-slate-800 transition-dark dark:text-slate-100 text-slate-800 bg-slate-200 rounded-lg py-2 px-4  col-span-12 flex flex-col">
                <div className="flex item-center gap-2">
                    <label htmlFor="message">Message</label>
                    <div className="text-red-500"></div>
                </div>
                <textarea
                    name="message"
                    className="bg-transparent focus:outline-none py-1"
                    required
                    placeholder="your message"
                    name="message"
                    id="message"
                    cols="10"
                    rows="8"></textarea>
            </div>
            <div className="col-span-full">
                <button
                    className="mx-4 px-4 py-2 
                    flex gap-2 items-center group
                    bg-teal-600 dark:bg-teal-700 text-slate-100 rounded-lg">
                    Send
                    <IoSend className="group-hover:-rotate-45 transform transition-transform" />
                </button>
            </div>
        </div>
        </form>
    );
}

export default Contact;
