import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html>
                <Head>
                    <title>صرافی ارزهای مجازی | ‌ارز تو ارز</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
                </Head>
                <body lang="fa">
                    <Main />
                    <NextScript />
                    <style>
                        {` #__next{height:100%;width:100%} `}
                    </style>
                </body>
            </Html>
        );
    }
}

export default MyDocument;
