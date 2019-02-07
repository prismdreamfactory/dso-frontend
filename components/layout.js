import Head from 'next/head';
import Nav from './nav';

export default ({ children }) => (
  <div>
    <Head>
      <title>Designer Strains Only</title>
      <meta name="title" content="Designer Strains Only" />
      <meta name="description" content="Designer Strains Only" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <link
        href="https://fonts.googleapis.com/css?family=Lato"
        rel="stylesheet"
        key="google-font-lato"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Playfair+Display"
        rel="stylesheet"
        key="google-font-playfair"
      />
    </Head>

    <Nav />

    <div className="container">{children}</div>

    <style jsx>{`
      .container {
        // max-width: 75rem;
        width: 100%;
        margin: 1rem 0 auto;
      }
    `}</style>
  </div>
);
