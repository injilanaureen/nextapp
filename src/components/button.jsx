"use client";
const Button = ({ children, href }) => {
  return (
    <button
      style={{
        '--bezier': 'cubic-bezier(0.22, 0.61, 0.36, 1)',
        '--edge-light': 'hsla(0, 0%, 50%, 0.8)',
        '--text-light': 'rgba(255, 255, 255, 0.4)',
        '--back-color': '240, 40%',
      }}
      className="relative inline-block px-7 py-1 my-2 text-md text-white uppercase bg-gradient-to-br from-[#00c6ff] to-[#0072ff] shadow-[0px_4px_0px_#0072ff] transition-all duration-200 ease-in-out cursor-pointer whitespace-nowrap"
    >
      {children}

      {/* Top-left and bottom-right borders */}
      <span className="absolute top-[-3px] left-[-3px] w-0 h-0 border-t-3 border-l-3 border-white rounded-full"></span>
      <span className="absolute bottom-[-3px] right-[-3px] w-0 h-0 border-b-3 border-r-3 border-white rounded-full"></span>

      {/* Hover and active states */}
      <style jsx>{`
        .button:hover {
          transform: translateY(-2px);
          box-shadow: 0px 6px 0px #0072ff;
        }

        .button:active {
          transform: translateY(0px);
          box-shadow: none;
          background-image: linear-gradient(to bottom right, #0072ff, #00c6ff);
        }
      `}</style>
    </button>
  );
};

export default Button;
