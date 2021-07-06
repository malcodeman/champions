import Document, { Html, Head, Main, NextScript } from "next/document";
import { ColorModeScript } from "@chakra-ui/react";

import theme from "../theme";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head lang="en">
          <meta charSet="utf-8" />
          <meta
            name="og:description"
            content="imagemods - free solution for image problems"
          />
          <meta
            name="description"
            content="imagemods - free solution for image problems"
          />
          <meta property="og:image" content="opengraph.png"></meta>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <div id="root" />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
