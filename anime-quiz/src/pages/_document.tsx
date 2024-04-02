// pages/_document.tsx

import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body style={{ fontSize: '16px', lineHeight: '1.6', color: '#333', padding: '0', margin: '0' }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
