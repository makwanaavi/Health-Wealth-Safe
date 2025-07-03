import{j as e}from"./index-DIb0PC5L.js";const a=()=>e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
          @keyframes loaderWave {
            0% {
              transform: scale(0.25); /* Start smaller */
              opacity: 0.4;          /* Start more transparent */
            }
            50% {
              transform: scale(0.75); /* Peak of the pulse, slightly larger */
              opacity: 1;            /* Fully opaque at peak */
            }
            100% {
              transform: scale(1); /* Return to initial state */
              opacity: 0.4;          /* Return to initial transparency */
            }
          }

          /*
            Apply the animation properties to any element with the 'loader-circle' class.
            - animation-name: Specifies the keyframe animation to use.
            - animation-iteration-count: Ensures the animation repeats infinitely.
            - animation-timing-function: Provides a smooth start and end to the animation.
            - animation-duration: Controls the speed of one complete animation cycle.
          */
          .loader-circle {
            animation-name: loaderWave;
            animation-iteration-count: infinite;
            animation-timing-function: ease-in-out;
            animation-duration: 2.5s; /* Adjusted for a smoother, more continuous pulse */
          }
        `}),e.jsx("div",{className:"fixed inset-0 z-[9999] flex items-center justify-center h-screen w-screen bg-[#0071B3] font-inter",children:e.jsx("div",{className:"relative w-[120px] aspect-square",children:e.jsx("div",{className:"absolute inset-[5%] rounded-full bg-white/50 backdrop-blur-sm z-[98] loader-circle"})})})]});export{a as default};
