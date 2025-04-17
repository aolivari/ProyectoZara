import styles from '../styles/Home.module.css';
import { SmartPhoneGrid } from '../src/_components/SmartPhoneGrid';
import { SearchBar } from '../src/_components/SearchBar';

const Home = () => {
  return (
    <>
      <SearchBar />
      <div className={styles.container}>
        <SmartPhoneGrid
          smartPhones={[
            {
              brand: 'sammsug',
              model: 'blue',
              price: 1450,
              imageSrc: '/images/Image.png',
            },
            {
              brand: 'sammsug',
              model: 'blue',
              price: 1450,
              imageSrc: '/images/Image.png',
            },
            {
              brand: 'sammsug',
              model: 'blue',
              price: 1450,
              imageSrc: '/images/Image.png',
            },
            {
              brand: 'sammsug',
              model: 'blue',
              price: 1450,
              imageSrc: '/images/Image.png',
            },
            {
              brand: 'sammsug',
              model: 'blue',
              price: 1450,
              imageSrc: '/images/Image.png',
            },
            {
              brand: 'sammsug',
              model: 'blue',
              price: 1450,
              imageSrc: '/images/Image.png',
            },
          ]}
        />
      </div>
    </>
  );
};

export default Home;
