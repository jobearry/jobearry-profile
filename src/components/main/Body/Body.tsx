import './Body.css';
import Home from './home/Home';
import Projects from './projects/Projects';
// interface BodyProps {
//   id: string;
// }
const Body: React.FC = () => {
  return (
    <>
      <Home id='home'></Home>
      <Projects id="projects"></Projects>
    </>
  );
}

export default Body;