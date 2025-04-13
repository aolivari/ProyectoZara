import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header>
      <h1>Mi Proyecto Next.js</h1>
      <nav>
        <ul>
          <li>
            <Link href="/">Inicio</Link>
          </li>
          <li>
            <Link href="/about">Acerca de</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
