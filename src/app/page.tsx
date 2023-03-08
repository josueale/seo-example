import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from './page.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const shmall = 5;

  return (
    <main className={styles.main}>
      <Image
        src="/logo-eldetalle.png"
        width={1718 / shmall}
        height={1647 / shmall}
        alt="main_logo"
      />
    </main>
  );
}
