import { Navbar, Header, Featured } from '../../components';
import './index.css';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className='homeContainer'>
        <Featured />
      </div>
    </div>
  );
};

export default Home;
