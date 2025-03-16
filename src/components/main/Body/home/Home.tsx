import profileIcon from '../../../../assets/profile-icon.svg';
import './home.css';
import { IHome } from './IHome';

const Home: React.FC<IHome> = ({id}) => {
  return (
    <div id={id} className='headline flex flex-col justify-center items-center' >
      <div className='text-center flex flex-col justify-center items-center'>
        <div className='text-end'>
          <h1 className='text-5xl font-bold text-orange-700'>Jonathan Golimlim </h1>
          <i className='text-2xl text-gray-400'>Software Developer</i>
        </div>
        <img className='h-96 m-10' src={profileIcon} alt="joby-profile"/>  
      </div>
    </div>
  );
}

export default Home;