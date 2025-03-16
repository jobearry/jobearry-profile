import { useState } from "react";
import './Burger.css';

const BurgerMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sections: string[] = ["Home", "Projects", "About"];

  return (
    <div className="relative my-2 mx-4">
      <button onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="block sm:hidden p-2 rounded focus:outline-none focus:bg-slate-700 text-slate-400">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>
      <div className={`absolute right-0 mt-2 w-48 the-nav rounded-md shadow-lg z-20 ${isMenuOpen ? 'block' : 'hidden'}`}>
        {sections.map((item, index) =>
          <a href={`#${sections[index].toLowerCase()}`} key={index} className="block px-4 py-2 text-gray-400 hover:bg-gray-500 hover:text-gray-300">
            {item}
          </a>
        )}
      </div>
    </div>
  );
}

export default BurgerMenu;