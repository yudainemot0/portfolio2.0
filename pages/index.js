import Head from "next/head";
import { Inter } from "@next/font/google";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Skills from "../components/Skills";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <div className="bg-[rgb(36,36,36)] text-white snap-y snap-proximity h-screen overflow-scroll z-0">
            <Head>
                <title>Dai's portfolio</title>
            </Head>

            <Header />

            <section id="hero" className="snap-center">
                <Hero />
            </section>

            <sction id="about" className="snap-center">
                <About />
            </sction>

            <sction id="experience" className="snap-center">
                <Experience />
            </sction>

            <section id="skills" className="snap-start">
                <Skills />
            </section>

            {/* Project */}

            {/* Contact */}
        </div>
    );
}
