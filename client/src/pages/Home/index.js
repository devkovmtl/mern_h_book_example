import {
  Navbar,
  Header,
  Featured,
  PropertyList,
  FeaturedProperties,
} from '../../components';
import './index.css';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className='homeContainer'>
        <Featured />
        <h1 className='homeTitle'>Browse by property type</h1>
        <PropertyList />
        <h1 className='homeTitle'>Homes guest love</h1>
        <FeaturedProperties />
      </div>
    </div>
  );
};

export default Home;
