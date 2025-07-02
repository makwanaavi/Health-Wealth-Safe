const Loader = () => (
  <div className="fixed inset-0 z-[9999] flex items-center justify-center h-screen w-screen bg-[#0071B3]">
    <div className="relative w-[250px] aspect-square">
      <div
        className="absolute inset-[15%] rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-sm animate-none z-[96] loader-circle"
        style={{ animationDelay: "0s", animationDuration: "3.5s" }}
      ></div>
      <div
        className="absolute inset-[10%] rounded-full border-2 border-white/40 bg-white/15 backdrop-blur-sm animate-none z-[97] loader-circle"
        style={{ animationDelay: "0.5s", animationDuration: "4s" }}
      ></div>
      <div
        className="absolute inset-[5%] rounded-full border-2 border-white/50 bg-white/20 backdrop-blur-sm animate-none z-[98] loader-circle"
        style={{ animationDelay: "1s", animationDuration: "4.5s" }}
      ></div>
    </div>
    <style>
      {`
        @keyframes loaderRipple {
          0% {
            transform: scale(0.8);
            opacity: 1;
          }
          60% {
            transform: scale(1.18);
            opacity: 0.6;
          }
          100% {
            transform: scale(1.35);
            opacity: 0;
          }
        }
        .loader-circle {
          animation-name: loaderRipple;
          animation-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
          animation-iteration-count: infinite;
        }
      `}
    </style>
  </div>
);

export default Loader;
