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
        href="https://fonts.googleapis.com/css?family=Raleway"
        rel="stylesheet"
        key="google-font-lato"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Playfair+Display"
        rel="stylesheet"
        key="google-font-playfair"
      />
    </Head>

    <div className="container">{children}</div>

    <footer>
      <p>Copyright Designer Strains Only 2019</p>
    </footer>

    <style jsx>{`
      .container {
        width: 100%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      footer {
        width: 100%;
        height: 100px;
        margin-top: 4rem;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #000;
        color: #fff;
      }
    `}</style>
  </div>
);
