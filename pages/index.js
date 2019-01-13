import "../styles/Main.scss";
import Hero from "../layouts/Hero/Hero";
import Header from "../layouts/Header/Header";
import Features from "../layouts/Features/Features";
import Counters from "../layouts/Counters/Counters";
import News from "../layouts/News/News";
import Form from "../layouts/Form/Form";


export default () => (
    <div>
        <Header />
        <Hero />
        <Features />
        <Counters/>
        <News/>
        <Form/>
    </div>
)
