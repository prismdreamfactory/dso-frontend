import Head from 'next/head';
import Nav from './Nav';

export default ({ children }) => (
  <div>
    <Head>
      <title>Designer Strains Only</title>
      <meta name="title" content="Designer Strains Only" />
      <meta name="description" content="Designer Strains Only" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>

    <Nav />

    {children}
  </div>
);
