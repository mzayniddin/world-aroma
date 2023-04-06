// COMPONENTS
import AboutUs from "../components/about-us/AboutUs";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import SubHero from "../components/sub-hero/SubHero";

export default function Home() {
    return (
        <div>
            <Header />
            <Hero />
            <SubHero />
            <AboutUs />
        </div>
    );
}
