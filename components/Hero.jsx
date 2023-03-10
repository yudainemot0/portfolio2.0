import Image from "next/image";
import Link from "next/link";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

export default function Hero() {
    const [text, count] = useTypewriter({
        words: [
            "Hi, The Name's yudai nemoto",
            "I am learning programing",
            "My job is...",
            "Developer",
            "Photography",
            "Image processing",
        ],
        loop: true,
        delaySpeed: 2000,
    });

    return (
        <div className="h-screen flex flex-col space-y-8 justify-center items-center text-center overflow-hidden">
            <BackgroundCircles />
            <Image
                className="relative rounded-full h-32 w-32 mx-auto object-cover"
                src="/Myshot.png"
                alt=""
                width={100}
                height={100}
                priority
            />
            <div className="z-20">
                <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
                    Web Developer
                </h2>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold px-10">
                    <span className="mr-3">{text}</span>
                    <Cursor cursorColor="#F7AB0A" />
                </h1>

                <div className="pt-5">
                    <Link href="#about">
                        <button className="heroButton">About</button>
                    </Link>
                    <Link href="#experience">
                        <button className="heroButton">Experience</button>
                    </Link>
                    <Link href="#skills">
                        <button className="heroButton">Skills</button>
                    </Link>
                    <Link href="#projects">
                        <button className="heroButton">Project</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
