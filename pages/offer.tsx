import Head from 'next/head';
import Script from 'next/script';
import styles from '../styles/Offer.module.scss';

export default function Offer() {
  return (
    <>
      <Head>
        <title>Ledneon Offer</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta
          name='Ledneon Offer'
          content='Неон, лампочки, вывески, подсветка'
        />
        <meta property='og:title' content='Ledneon' />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://ledneon.md' />
        <meta property='og:image' content='/favicon.ico' />
        <link rel='icon' href='/favicon.ico' sizes='32x32' />
        <link rel='apple-touch-icon' href='/favicon.ico' />
      </Head>
      <Script
        src='https://www.googletagmanager.com/gtag/js?id=G-3WDH6X8KC9'
        async
      />
      <Script id='google-analytics'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-3WDH6X8KC9');
        `}
      </Script>
      <div className={styles.offer__images}>
        <img
          className={`${styles.offer__image_desktop} ${styles.offer__image}`}
          src='/desktop.jpg'
          alt='image'
        />
        <img
          className={`${styles.offer__image_mobile} ${styles.offer__image}`}
          src='/mobile.jpg'
          alt='image'
        />
      </div>
    </>
  );
}
