module.exports = {
    mode: "jit",
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
    darkMode: "class", // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                nunito: "'Nunito', 'sans-serif'",
                poppins: "'Poppins', 'sans-serif'",
                "special-elite": "'Special Elite', 'cursive'",
            },
            animation: {
                slite: "slite 5s ease-in-out infinite",
            },
            keyframes: {
                slite: {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(2rem)" },
                },
            },
        },
    },
    variants: {
        scrollbar: ["dark"],
        extend: {},
    },
    plugins: [require("tailwind-scrollbar")],
};
