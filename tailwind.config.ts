import { Plus_Jakarta_Sans } from "next/font/google";
module.exports = {
    mode: "jit",
    content: [
        "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
        "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
    ],
    darkMode: "class",
    theme: {
        screens: { md: { max: "1050px" }, sm: { max: "550px" } },
        extend: {
            colors: {
                gray: {
                    200: "#f1ece5",
                    500: "#a89e9e",
                    600: "#777c84",
                    900: "#111111",
                    "200_01": "#e9e7e7",
                    "600_01": "#7e7171",
                    "200_03": "#f1f0f0",
                    "900_01": "#141718",
                },
                green: { 800: "#049212", 900: "#026206" },
                black: {
                    600: "#656d76",
                    900: "#0b0a0a",
                    "900_4c": "#0000004c",
                    "900_01": "#000000",
                    "900_66": "#00000066",
                    "900_19": "#00000019",
                    A700_01: "#000000",
                },
                white: { A700: "#ffffff", A700_01: "#ffffff" },
                lime: { 900: "#774000" },
                blue_gray: { 100: "#d6dae2", 900: "#1b2834" },
                orange: { 50: "#ffecd5" },
                yellow: { 50: "#fff8f0", "700_01": "#ffbb3a" },
                gray_400: "#c2c1c1",
            },
            boxShadow: { xs: "0px 0px 13px 5px #00000029" },
            fontFamily: {
                plusjakartasans: "Plus_Jakarta_Sans",
                rubik: "Rubik",
                inter: "Inter",
                satoshi: "Satoshi",
                opensans: "Open Sans",
            },
        },
    },
    plugins: [require("@tailwindcss/forms")],
};
