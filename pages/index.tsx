import Head from 'next/head';
import Header from '../src/_components/Header';
import styles from '../styles/Home.module.css';
import { SmartPhoneCard } from '../src/_components/SmartPhoneCard';

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mi Proyecto Next.js</title>
        <meta name="description" content="Bienvenido a mi proyecto Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SmartPhoneCard
        brand="sammsug"
        name="blue"
        price="lol"
        key="prueba"
        imageSrc="/images/Image.png"
      />
      <main className={styles.main}>
        <h1 className={styles.title}>
          Bienvenido a <a href="#">Mi Proyecto Next.js!</a>
        </h1>
        <p className={styles.description}>
          Comienza a desarrollar tu aplicación con Next.js.
        </p>
      </main>
    </div>
  );
};

export default Home;
