/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      animation: {
        grow: "grow 0.5s linear 0s 1",
        scale: "scale 0.5s ease-in-out",
        move: "move 0.7s steps(3) infinite",
        lean: "lean 0.8s ease-in",
        strike: "strike 1s ease-in-forwards",
        right: "right 0.5s alternate infinite ease-in-out",
        grow2: "grow2 0.5s linear 0s 1",
        shake: "shake 0.5s infinite alternate ease-in-out",
        animation: "down 1s cubic-bexier(0.075, 0.82, 0.165, 1) infinite",
        fall: "fall 1s ease-out forwards",
      },
      keyframes: {
        grow: {
          "0%": {
            transform: "scale(5)",
          },
        },
        scale: {
          "0%": {
            transform: "scale(0.1)",
          },
        },
        move: {
          "0%": {
            transform: "translateX(-750px)",
          },
          "100%": {
            transform: "translateX(10px)",
          },
        },
        strike: {
          "100%": {
            transform: "translateX(250px)",
          },
        },
        right: {
          "0%": {
            transform: "translateX(-5px)",
          },
          "100%": {
            transform: "rotate(30deg) translateX(6px)",
          },
        },
        grow2: {
          "0%": {
            transform: "scale(0)",
          },
        },
        shake: {
          "0%": {
            transform: "rotateZ(-10deg)",
          },
          "100%": {
            transform: "rotateZ(10deg)",
          },
        },
        down: {
          "0%": {
            transform: "rotateX(-30deg)",
          },
          "50%": {
            transform: "rotateX(30deg) rotateY(-20deg)",
          },
          "100%": {
            transform: "rotateY(20deg)",
          },
        },
        fall: {
          to: {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
      },
    },
  },
  plugins: [],
};
