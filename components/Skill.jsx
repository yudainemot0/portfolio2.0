import Image from "next/image";
import { motion } from "framer-motion";

const SKILLS = [
    {
        src: "/HTML.png",
        percentage: "85%",
    },
    {
        src: "/CSS.png",
        percentage: "85%",
    },
    {
        src: "/Tailwindcss.png",
        percentage: "50%",
    },
    {
        src: "/JavaScript.png",
        percentage: "40%",
    },
    {
        src: "/jQuery.png",
        percentage: "40%",
    },
    {
        src: "/Next.js.png",
        percentage: "35%",
    },
    {
        src: "/php.png",
        percentage: "30%",
    },
    {
        src: "/Laravel.png",
        percentage: "30%",
    },
    {
        src: "/WordPress.png",
        percentage: "40%",
    },
    {
        src: "/github.png",
        percentage: "30%",
    },
    {
        src: "/vscode.png",
        percentage: "50%",
    },
    {
        src: "/Metamask.png",
        percentage: "10%",
    },
];

export default function Skill() {
    return (
        <>
            {SKILLS.map((skill, i) => (
                <div key={i} className="group relative flex cursor-pointer">
                    <motion.div
                        initial={{
                            opacity: 0,
                        }}
                        whileInView={{ opacity: 1 }}
                        transition={{ transition: 1 }}
                        className="rounded-full border
                    border-gray-500 filter group-hover:grayscale
                    transition duration-300 ease-in-out"
                    >
                        <Image
                            src={skill.src}
                            width={100}
                            height={100}
                            priority
                            className="object-cover w-20 h-20 md:w-28 md:h-28
                    xl:w-32 xl:h-32"
                        />
                    </motion.div>
                    <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
                        <div className="flex items-center justify-center h-full">
                            <p className="text-3xl font-bold text-black opacity-100">
                                {skill.percentage}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}
