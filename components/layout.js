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
        href="https://fonts.googleapis.com/css?family=Source+Sans+Pro"
        rel="stylesheet"
        key="google-font-lato"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Poiret+One"
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
        background: url(https://i.pinimg.com/originals/eb/9e/cf/eb9ecf6ba9a6d335fa8a321ac7594f4b.jpg);
        background-size: cover;
      }
    `}</style>
  </div>
);
