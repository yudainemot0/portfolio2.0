import Head from "next/head";
import { Inter } from "@next/font/google";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <div className="bg-[rgb(36,36,36)] text-white h-screen snap-mandatory snap-y overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/50">
            <Head>
                <title>Dai&apos;s portfolio</title>
            </Head>

            <Header />

            <section id="hero" className="snap-start">
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

            <section id="projects" className="snap-start">
                <Projects />
            </section>

            <section id="contact" className="snap-start">
                <ContactMe />
            </section>

            <Link href="#hero">
                <footer className="relative w-full cursor-pointer">
                    <div className="fixed bottom-7 right-4 md:right-12">
                        <img
                            className="w-10 h-10 bg-white rounded-md cursor-pointer"
                            src="http://www.yncode-web.com/images/favicon-logo.png"
                            alt=""
                        />
                    </div>
                </footer>
            </Link>
        </div>
    );
}