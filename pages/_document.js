import Document, { Head, Main, NextScript } from "next/document";
export default class MyDocument extends Document {
    render() {
        return (
            <html lang="pt-br">
                <Head>
                    <meta charset="utf-8" />
                    <meta name="author" content="Muncak" />
                    <meta name="description" content="Muncak" />
                    <meta name="msapplication-TileColor" content="#2870DB" />
                    <meta name="theme-color" content="#2870DB" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}
