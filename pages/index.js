import Head from "next/head";
import { Inter } from "@next/font/google";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <div className="bg-[rgb(36,36,36)] text-white snap-y snap-proximity h-screen overflow-scroll z-0">
            <Head>
                <title>Dai&apos;s portfolio</title>
            </Head>

            <Header />

            <section id="hero" className="snap-start">
                <Hero />
            </section>

            <sction id="about" className="snap-start">
                <About />
            </sction>

            <sction id="experience" className="snap-start">
                <Experience />
            </sction>

            <section id="skills" className="snap-start">
                <Skills />
            </section>

            <section id="projects" className="snap-start">
                <Projects />
            </section>
        </div>
    );
}
