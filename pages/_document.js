import Document, { Head, Main, NextScript } from "next/document";
export default class MyDocument extends Document {
    render() {
        return (
            <html lang="en">
                <Head>
                    <meta name="author" content="Muncak" />
                    <meta name="description" content="Muncak" />
                    <meta name="msapplication-TileColor" content="#2870DB" />
                    <meta name="theme-color" content="#2870DB" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                    <meta property="og:title" content="Muncak" />
                    <meta property="og:site_name" content="Muncak" />
                    <meta property="og:url" content="http://muncak.com" />
                    <meta property="og:description" content="Here is the hiking information you need to decide if it is right for you, and to make it more interesting, enjoyable, and safe." />
                    <meta property="og:type" content="website" />
                    <meta property="og:image" content="http://muncak.com/static/images/hero_illustration.webp" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}
