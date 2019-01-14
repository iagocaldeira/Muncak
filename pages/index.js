import "../styles/Main.scss";
import Counters from "../layouts/Counters/Counters";
import Features from "../layouts/Features/Features";
import Header from "../layouts/Header/Header";
import Hero from "../layouts/Hero/Hero";
import News from "../layouts/News/News";
import Subscribe from "../layouts/Subscribe/Subscribe";
import Footer from "../layouts/Footer/Footer";


export default () => (
    <div>
        <Header />
        <Hero />
        <Features />
        <Counters/>
        <News/>
        <Subscribe/>
        <Footer/>
    </div>
)
