(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,18566,(t,e,s)=>{e.exports=t.r(76562)},80904,t=>{"use strict";var e=t.i(43476),s=t.i(71645),a=t.i(18566);t.s(["default",0,function(){let t=(0,a.useRouter)(),[i,o]=(0,s.useState)(0);return(0,s.useEffect)(()=>{let e=[setTimeout(()=>o(1),150),setTimeout(()=>o(2),500),setTimeout(()=>o(3),800),setTimeout(()=>o(4),1e3),setTimeout(()=>o(5),1300),setTimeout(()=>o(6),2200),setTimeout(()=>t.push("/app"),2800)];return()=>e.forEach(clearTimeout)},[t]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("style",{children:`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html, body { width: 100%; height: 100%; overflow: hidden; background: #542A44; }

        .splash-wrap {
          position: fixed; inset: 0;
          background: #542A44;
          display: flex; align-items: center; justify-content: center;
          opacity: ${+(6!==i)};
          transition: opacity 0.6s ease;
        }

        /* SVG principal — viewBox 287\xd7610 → on le centre et scale au viewport */
        .logo-svg {
          width: min(287px, 90vw);
          height: auto;
          overflow: visible;
        }

        /* Sablier — corps principal saumon */
        .hourglass-body {
          opacity: ${+(i>=1)};
          transform-origin: 143px 220px;
          transform: scale(${i>=1?1:.6});
          transition: opacity 0.5s cubic-bezier(0.22,1,0.36,1),
                      transform 0.5s cubic-bezier(0.22,1,0.36,1);
        }

        /* Accents orange (sable) — apparaissent apr\xe8s le sablier */
        .sand-top {
          opacity: ${+(i>=2)};
          transform-origin: 170px 196px;
          transform: translateY(${i>=2?0:-12}px) scale(${i>=2?1:.3});
          transition: opacity 0.35s ease ${i>=2?"0s":""},
                      transform 0.35s cubic-bezier(0.34,1.56,0.64,1);
        }
        .sand-bottom {
          opacity: ${+(i>=2)};
          transform-origin: 120px 247px;
          transform: translateY(${i>=2?0:12}px) scale(${i>=2?1:.3});
          transition: opacity 0.35s ease 0.08s,
                      transform 0.35s cubic-bezier(0.34,1.56,0.64,1) 0.08s;
        }

        /* CLU — slide depuis la gauche */
        .text-clu {
          opacity: ${+(i>=3)};
          transform: translateX(${i>=3?0:-20}px);
          transition: opacity 0.4s ease, transform 0.4s cubic-bezier(0.22,1,0.36,1);
        }

        /* TCH — slide depuis la droite */
        .text-tch {
          opacity: ${+(i>=4)};
          transform: translateX(${i>=4?0:20}px);
          transition: opacity 0.4s ease, transform 0.4s cubic-bezier(0.22,1,0.36,1);
        }

        /* Tagline fade apr\xe8s logo complet */
        .tagline {
          position: absolute;
          bottom: 18%;
          left: 50%;
          transform: translateX(-50%);
          font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,191,158,0.7);
          opacity: ${+(i>=5)};
          transition: opacity 0.5s ease;
          white-space: nowrap;
        }

        /* Indicateur de chargement discret */
        .loader-dot {
          position: absolute;
          bottom: 12%;
          left: 50%;
          transform: translateX(-50%);
          display: flex; gap: 6px;
          opacity: ${+(i>=5)};
          transition: opacity 0.4s ease 0.2s;
        }
        .loader-dot span {
          width: 4px; height: 4px; border-radius: 50%;
          background: rgba(255,191,158,0.4);
          animation: dotpulse 1.2s ease-in-out infinite;
        }
        .loader-dot span:nth-child(2) { animation-delay: 0.2s; }
        .loader-dot span:nth-child(3) { animation-delay: 0.4s; }

        @keyframes dotpulse {
          0%,100% { opacity: 0.3; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.2); }
        }

        /* Lueur derri\xe8re le sablier au moment du logo complet */
        .glow {
          position: absolute;
          width: 200px; height: 200px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(226,124,0,0.18) 0%, transparent 70%);
          top: 50%; left: 50%;
          transform: translate(-50%, -60%);
          opacity: ${+(i>=5)};
          transition: opacity 0.8s ease;
          pointer-events: none;
        }
      `}),(0,e.jsxs)("div",{className:"splash-wrap",children:[(0,e.jsx)("div",{className:"glow"}),(0,e.jsxs)("svg",{className:"logo-svg",viewBox:"0 0 287.075 610.465",xmlns:"http://www.w3.org/2000/svg",fill:"none",children:[(0,e.jsx)("g",{className:"hourglass-body",children:(0,e.jsx)("path",{fill:"#FFBF9E",d:"M185.38,206.473l10.697-10.695l-36.604-36.604l-10.696,10.697l-0.806,32.382l-8.621,0.29 l0.862-34.607c0.027-1.104,0.478-2.156,1.26-2.938l14.957-14.957c1.682-1.682,4.408-1.682,6.089,0l42.692,42.691 c1.681,1.682,1.681,4.408,0,6.089l-14.959,14.958c-0.781,0.781-1.831,1.231-2.937,1.259l-85.845,2.14l-10.696,10.696 l36.604,36.603l10.696-10.697l0.802-32.189l8.617-0.141l-0.854,34.266c-0.028,1.104-0.478,2.156-1.261,2.938 l-14.957,14.957c-1.681,1.682-4.407,1.682-6.089,0l-42.69-42.691c-1.683-1.682-1.683-4.408,0-6.089 l14.957-14.958c0.781-0.781,1.832-1.232,2.938-1.259L185.38,206.473z"})}),(0,e.jsx)("g",{className:"sand-top",children:(0,e.jsx)("polygon",{fill:"#E27C00",points:"153.217,202.325 183.263,201.578 188.846,195.994 182.948,190.122 153.521,190.121"})}),(0,e.jsx)("g",{className:"sand-bottom",children:(0,e.jsx)("polygon",{fill:"#E27C00",points:"127.452,257.386 133.035,251.803 133.422,236.09 106.192,236.09"})}),(0,e.jsxs)("g",{className:"text-clu",children:[(0,e.jsx)("path",{fill:"#FFBF9E",d:"M58.82,317.094c0-9.375,5.157-15.151,13.532-15.151c6.837,0,12.073,4.538,12.514,10.814h-5.877 c-0.58-3.318-3.198-5.497-6.637-5.497c-4.537,0-7.355,3.758-7.355,9.834c0,6.077,2.818,9.855,7.376,9.855 c3.458,0,6.057-2.039,6.636-5.217h5.877c-0.499,6.236-5.577,10.533-12.533,10.533 C63.997,332.266,58.82,326.489,58.82,317.094z"}),(0,e.jsx)("path",{fill:"#FFBF9E",d:"M109.315,331.526h-18.87v-28.845h6.037v23.588h12.833V331.526z"}),(0,e.jsx)("path",{fill:"#FFBF9E",d:"M120.391,320.952c0,3.638,2.179,5.956,6.037,5.956c3.877,0,6.057-2.318,6.057-5.956v-18.271h6.036 v18.891c0,6.396-4.697,10.693-12.093,10.693c-7.376,0-12.074-4.297-12.074-10.693v-18.891h6.037V320.952z"})]}),(0,e.jsxs)("g",{className:"text-tch",children:[(0,e.jsx)("path",{fill:"#E27C00",d:"M152.555,331.526V307.84h-8.655v-5.158h23.348v5.158h-8.655v23.687H152.555z"}),(0,e.jsx)("path",{fill:"#E27C00",d:"M170.207,317.094c0-9.375,5.157-15.151,13.532-15.151c6.837,0,12.073,4.538,12.514,10.814h-5.877 c-0.58-3.318-3.198-5.497-6.637-5.497c-4.537,0-7.355,3.758-7.355,9.834c0,6.077,2.818,9.855,7.376,9.855 c3.458,0,6.057-2.039,6.636-5.217h5.877c-0.499,6.236-5.577,10.533-12.533,10.533 C175.384,332.266,170.207,326.489,170.207,317.094z"}),(0,e.jsx)("path",{fill:"#E27C00",d:"M220.861,331.526v-12.054h-12.992v12.054h-6.037v-28.845h6.037v11.635h12.992v-11.635h6.037v28.845H220.861z"})]})]}),(0,e.jsx)("div",{className:"tagline",children:"Quelqu'un t'attend"}),(0,e.jsxs)("div",{className:"loader-dot",children:[(0,e.jsx)("span",{}),(0,e.jsx)("span",{}),(0,e.jsx)("span",{})]})]})]})}])}]);