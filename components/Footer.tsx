import styles from '../styles/Footer.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className='container'>
        <div className={styles.footer__inner}>
          <div className={styles.footer__logo}>
            <Image src={'/logo.png'} width={230} height={40} alt='logo' />
          </div>
          <div className={styles.footer__socials}>
            <Link href={'https://www.facebook.com/ledneon.md'}>
              <a
                className={`${styles.footer__social} ${styles.footer__social_fb}`}
                target={'_blank'}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                >
                  <path d='M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z' />
                </svg>
              </a>
            </Link>
            <Link href={'https://www.instagram.com/ledneon.md/'}>
              <a
                className={`${styles.footer__social} ${styles.footer__social_insta}`}
                target={'_blank'}
              >
                <svg
                  fill='#000000'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 50 50'
                  width='24px'
                  height='24px'
                >
                  {' '}
                  <path d='M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z' />
                </svg>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
