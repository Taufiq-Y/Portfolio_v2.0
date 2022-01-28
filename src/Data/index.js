const aboutMe = {};

const skill = {};

const projects = [
    {
        title: "Car Rental Booking Website",
        desc: " To book cars in online and checkout for the slots and availablity of cars. Admin can post new cars. Integrated with Stripe For Payment",
        built: ["html", "css", "bootstrap", "react","redux","router","nodejs", "express", "mongodb"],
        image: "car_rental",

        url: {
            live: "https://muhammed-cars.herokuapp.com/login",
            frontend: "https://github.com/Taufiq-Y/Muhammed-s-Cars/tree/main/client",
            backend: "https://github.com/Taufiq-Y/Muhammed-s-Cars",
        },
        demoCredential: [
            {
                email: "cars.admin@gmail.com",
                password: "admin123",
            },
            
        ],
    },
    {
        title: "Crypto World",
        desc: "Krypt is a online web 3.0 application, which is developed to transfer ethereum's from one account to another account. in order to use this, you need to download metamask and get your account id.---use 0.00001 eth amount to transfer because of insufficient eth",
        integerated: " stripe for payment",
        image: "krypt",
        built:[
            "html",
            "css",
            "react",
            "eth",
            "sh",
            "tailwindcss",
            "router"
        ],
        url: {
            live: "https://cryptocurrency-web30-taufiq.netlify.app/",
            frontend: "https://github.com/Taufiq-Y/Blockchain_Web3.0/tree/main/client",
            backend: "https://github.com/Taufiq-Y/Blockchain_Web3.0/tree/main/smart_contract",
        },
        demoCredential: [
            {
                email: "MetaMask Required",
                password: "MetaMask Required"
            },
        ],
    },
    {
        title: "Medical Pagrr",
        desc: "Designed and developed for to integrate amoung doctors and patient, so that patients can get updated frequentely and to solve any issue. multiple users can also join the channels only if admin adds.",
        built: ["html", "css", "react", "nodejs", "express", "mongodb","router"],
        integerated: "AWS S3 for storing files",
        image: "medical_pagr",
        url: {
            live: "https://medicalpagrrnetwork.netlify.app/",
            frontend: "https://github.com/Taufiq-Y/Medical-Pagrr/tree/main/Client",
            backend: "https://github.com/Taufiq-Y/Medical-Pagrr/tree/main/Server",
        },
        demoCredential: [
            {
                email: "Ubayy",
                password: "ubayy123",
            },
            {
                email: "yusuf",
                password: "yusuf123",
            },
        ],
    },
    {
        title: "Private Blogging Application",
        desc: "Private Blogging Application, A web application designed for private or authorised user's.",
        image: "blog",
        built: [
            "html",
            "css",
            "react",
            "nodejs",
            "express",
            "mongodb",
            "mui",
            "router"
        ],

        url: {
            live: "https://blogbytaufiq.herokuapp.com",
            frontend: "https://github.com/Taufiq-Y/Blog-App/tree/main/client",
            backend: "https://github.com/Taufiq-Y/Blog-App/tree/main/server",
        },
        demoCredential: [
            {
                email: "mohammedtaufiq60gmail.com",
                password: "admin@123",
            },
        ],
    },
    {
        title: "Mentor-Assigning",
        desc: "Its an educational web app. which is developed primarly focus on assigning mentors on students issue, the admin of this app can add students and mentors in the DB and can assign / update mentor.",
        image: "mass",
        built: [
            "html",
            "css",
            "react",
            "nodejs",
            "express",
            "mongodb",
            "mui",
            "router"
        ],

        url: {
            live: "https://mentor-assigning-taufiq.netlify.app/",
            frontend: "https://github.com/Taufiq-Y/Mentor-Assigning/tree/main/client",
            backend: "https://github.com/Taufiq-Y/Mentor-Assigning/tree/main/server",
        },
        demoCredential: [
            {
                email: "Not Required",
                password: "Not Required",
            },
        ],
    },
    {
        title: "Todoss - CRUD",
        desc: "A simple todo app developed using ReactJS, with the implementation of CRUD.",
        image: "todo",
        built: [
            "html",
            "css",
            "react",
            "bootstrap",
            "save_local"
        ],

        url: {
            live: "https://react-todoss.netlify.app/",
            frontend: "https://github.com/Taufiq-Y/React-Todoss",
            backend: "https://github.com/Taufiq-Y/React-Todoss"
        }
        
    },
];

const education = [
    {
        qualification: "M.C.A  Computer Applications",
        at: "University of Madras (Correspondence)",
        location: "Chennai",
        start: "2021",
        end: "2023",
    },
    {
        qualification: "B.C.A Computer Applications",
        at: "The New College (Autonomous)",
        location: "Chennai",
        start: "2018",
        end: "2021",
    },
    {
        qualification: "Higher Secondary",
        at: "Gill Adarsh Matriculation Hr Sec School",
        location: "Chennai",
        start: "2017",
        end: "2018",
    },
];

export { aboutMe, skill, projects, education };
export default { aboutMe, skill, projects, education };
