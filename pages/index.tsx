import { NavBar } from '../src/_components/NavBar';
import { PageModule } from './pageModule';
import { BagProvider } from '../src/context/BagContext';

const Home = () => {
  return (
    <>
      <BagProvider>
        <NavBar />
        <PageModule />
      </BagProvider>
    </>
  );
};

export default Home;
