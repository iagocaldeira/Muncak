import "../styles/Main.scss";
import Counters from "../layouts/Counters/Counters";
import Features from "../layouts/Features/Features";
import Header from "../layouts/Header/Header";
import Hero from "../layouts/Hero/Hero";
import News from "../layouts/News/News";
import Subscribe from "../layouts/Subscribe/Subscribe";
import Footer from "../layouts/Footer/Footer";
import Head from "next/head";


class Index extends React.Component {
    render() {
        return (
            <div>
                <Head>
                    <title>Muncak</title>
                </Head>
                <header role="banner">
                    <Header />
                    <nav role="navigation">

                    </nav>
                    <Hero />
                </header>
                <main role="main">
                    <Features />
                    <Counters />
                    <News />
                    <Subscribe />
                </main>
                <Footer />
            </div>

        )
    }
}


export default Index;