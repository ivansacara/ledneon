import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { NextIntlProvider } from 'next-intl';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextIntlProvider messages={pageProps.lang}>
      <Component {...pageProps} />
    </NextIntlProvider>
  );
}

export default MyApp;
