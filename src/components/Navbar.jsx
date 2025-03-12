
import { useEffect } from "react";
import PropTypes from "prop-types"; // Import PropTypes

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home">
              <span className="text-blue-500">
                <b><i>PORT</i></b>
              </span>
              <span className="text-white">
                <b><i>FOLIO</i></b>
              </span>
          </a>

          <div
            className="w-10 h-7 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              onClick={() => setMenuOpen(false)}
              className="text-gray-200 hover:text-white transition-colors"
            >
              Home
            </a>

            <a
              href="#projects"
              onClick={() => setMenuOpen(false)}
              className="text-gray-200 hover:text-white transition-colors"
            >
              Projects
            </a>

            <a
              href="#skills"
              onClick={() => setMenuOpen(false)}
              className="text-gray-200 hover:text-white transition-colors"
            >
              Skills
            </a>

            <a
              href="#education"
              onClick={() => setMenuOpen(false)}
              className="text-gray-200 hover:text-white transition-colors"
            >
              Education
            </a>
          
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="text-gray-200 hover:text-white transition-colors"
            >
              Contact
            </a>


            {/* Download Resume Button */}
            <a
              href="https://drive.google.com/file/d/1NQUC5lJoO3lXIvdEGRhxLGBNdDp3F2pF/view?usp=drive_link"
              download="Resume.pdf"
              className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transition"
            >
              Download Resume
            </a>

          </div>
        </div>
      </div>
    </nav>
  );
};


Navbar.propTypes = {
  menuOpen: PropTypes.bool.isRequired, // menuOpen must be a boolean
  setMenuOpen: PropTypes.func.isRequired, // setMenuOpen must be a function
};

export default Navbar;