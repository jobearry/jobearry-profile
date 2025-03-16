import BurgerMenu from './Burger/Burger';
import logo from '../../../assets/joby-logo.svg';
import './Navbar.css';

function Navbar() {
  const sections: string[] = ["Home", "Projects", "About"];


  return (
    <>
      <nav className={`the-nav h-16 container mx-auto flex place-content-between w-full top-0 sticky`}>
        <div className='container mx-auto flex items-center'>
          <img
            className='h-14' 
            src={logo} alt="joby-logo"
          />
          <p className='hidden'>
            <strong className='text-slate-400'>Jonathan</strong>
            <p className='text-sm text-gray-400'>
              Software Developer
            </p>
          </p>
        </div>

        <div className='container flex justify-end items-center'>
          <ul className={`container mr-9 w-60 sm:flex justify-between hidden`}>
            {sections.map((item, index) => 
              <li key={index} className='text-gray-400'><a href="#">{item}</a></li>
            )}
          </ul>
					<BurgerMenu />
        </div>
      </nav>
    </>
  );
}

export default Navbar;