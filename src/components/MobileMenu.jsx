import { useState } from "react";
import PropTypes from "prop-types";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-screen bg-[rgba(10,10,10,0.8)] z-50 flex flex-col items-center justify-center
                 transition-transform duration-300 ease-in-out transform
                 ${menuOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"}
                `}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
        aria-label="Close Menu"
      >
        &times;
      </button>

      {["Home", "Projects", "Skills", "Education","Contact"].map((item) => (
        <a
          key={item}
          href={`#${item.toLowerCase()}`}
          onClick={() => setMenuOpen(false)}
          className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
                     ${menuOpen ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"}
                    `}
        >
          {item}
        </a>
      ))}
    </div>
  );
};

// Prop Validation
MobileMenu.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
  setMenuOpen: PropTypes.func.isRequired,
};

// Parent Component Example
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setMenuOpen(true)}
        className="fixed top-6 left-6 z-50 text-white text-3xl bg-black p-2 rounded"
      >
        ☰
      </button>
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </div>
  );
}
