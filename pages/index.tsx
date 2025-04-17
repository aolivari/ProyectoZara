import styles from '../styles/Home.module.css';
import { SmartPhoneGrid } from '../src/_components/SmartPhoneGrid';
import { SearchBar } from '../src/_components/SearchBar';
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
