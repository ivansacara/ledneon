import { GetStaticPropsContext } from 'next';
import Head from 'next/head';
import { About } from '../components/About';
import { Contacts } from '../components/Contacts';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Reviews } from '../components/Reviews';
import { Works } from '../components/Woks';
import Offer from './offer';

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      lang: (await import(`../translations/${locale}.json`)).default,
    },
  };
}

export const getInstagramPhotos = () => {
  const token = process.env.NEXT_PUBLIC_INSTAGRAM_KEY;
  const url = `https://graph.instagram.com/me/media?fields=id,media_url,media_type,permalink&access_token=${token}`;
  return fetch(url);
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Ledneon</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta name='Ledneon' content='Неон, лампочки, вывески, подсветка' />
        <meta property='og:title' content='Ledneon' />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://ledneon.md' />
        <meta property='og:image' content='/favicon.ico' />
        <link rel='icon' href='/favicon.ico' sizes='32x32' />
        <link rel='apple-touch-icon' href='/favicon.ico' />
      </Head>
      <Offer />
      <div className='wrapper'>
        <Header />
        <main>
          <Hero />
          <Works />
          <About />
          <Reviews />
          <Contacts />
        </main>
        <Footer />
      </div>
    </>
  );
}
