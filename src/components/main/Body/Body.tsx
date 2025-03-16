import './Body.css';
import Home from './home/Home';
import Projects from './projects/Projects';
// interface BodyProps {
//   id: string;
// }
const Body = () => {
  return (
    <>
      <Home id='home'></Home>
      <Projects></Projects>
    </>
  );
}

export default Body;