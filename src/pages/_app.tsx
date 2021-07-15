import type { AppProps } from 'next/app';
import Head from 'next/head';

import GlobalStyle from '../assets/styles/global';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Boilerplate NextJS</title>
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};
export default MyApp;
