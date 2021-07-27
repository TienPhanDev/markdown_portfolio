/* eslint-disable class-methods-use-this */
import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#2a9d8f" />
        <meta
          name="msapplication-TileImage"
          content="/favicons/apple-touch-icon.png"
        />
        <meta name="theme-color" content="#2a9d8f" />
        <meta
          name="description"
          content="How I Went From Pharmacy to Coding"
        />
        <meta
          name="robots"
          content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="/images/illustrations/phone-meta-banner.png"
        />
        <meta property="og:site_name" content="Tienphan.dev" />
        <meta
          property="og:title"
          content="Tien Phan | Full Stack Developer:Services and Solutions"
        />
        <meta
          property="og:description"
          content="Tien Phan | Full Stack Developer:Services and Solutions"
        />
        <meta property="og:url" content="https://www.tienphan.dev/" />
        {/* <meta
          name="google-site-verification"
          content="_ALiygRdnHtfZAhTKntcQt2mE40fZxWTEoHTUxWuapk"
        />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        /> */}
        <link
          href="https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i&display=swap"
          rel="stylesheet"
        />
        <script
          src="https://kit.fontawesome.com/4c273e6d43.js"
          crossOrigin="anonymous"
        />
      </Head>
      <body className="bg-gray-100 dark:bg-gray-800">
        <Main />
        <NextScript />
      </body>
    </Html>
    )
  }
}
