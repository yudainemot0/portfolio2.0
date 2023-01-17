import { motion } from "framer-motion";
import Image from "next/image";

const EXPERIENCNES = [
    {
        job: "EC-website development",
        title: "MrMax",
        src: "/MrMax.png",
        technologies: [
            "/windows.png",
            "/Excel.png",
            "/Canon.png",
            "/Gimp.png",
            "/figma.png",
        ],
        description: "2022-",
        summary:
            "I am currently working at MrMax, where I am responsible for taking product photos and editing images for our e-commerce website. I am also interested in working on creating website pages in the future and I believe I possess the necessary skills to do so. To demonstrate this, I plan to present a portfolio during our interview.",
    },
    {
        job: "Web site development",
        title: "Portfolio",
        src: "/Myshot.png",
        technologies: [
            "/html-icon.png",
            "/Tailwindcss.png",
            "/javascript-icon.png",
            "/Next.js.png",
            "/github.png",
        ],
        description: "2023-",
        summary:
            "This is a website for a surf shop run by a friend that I am currently creating. I am using WordPress to develop it. The only remaining tasks are to replace the images and complete the process of publishing it to a rental server, so it can be considered almost complete.",
    },
    {
        job: "Web Developer",
        title: "YNCode",
        src: "/YNCode.png",
        technologies: [
            "/html-icon.png",
            "/css-icon.png",
            "/javascript-icon.png",
            "/jQuery.png",
            "/github.png",
        ],
        description: "2022-",
        summary:
            "This is work that I am doing personally. As part of my programming learning, I am creating a website for a friend. I would appreciate it if you could give me feedback.",
    },
    {
        job: "Web site development",
        title: "JamSurf",
        src: "/Jamsurf.png",
        technologies: [
            "/html-icon.png",
            "/css-icon.png",
            "/jQuery.png",
            "/WordPress.png",
        ],
        description: "2022-",
        summary:
            "This is a website for a surf shop run by a friend that I am currently creating. I am using WordPress to develop it. The only remaining tasks are to replace the images and complete the process of publishing it to a rental server, so it can be considered almost complete.",
    },
];

export default function ExperienceCard() {
    return (
        <>
            {EXPERIENCNES.map((experience, i) => (
                <article
                    key={i}
                    className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[400px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-3 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden min-h-[650px]"
                >
                    <motion.div
                        initial={{ y: -100, opacity: 0 }}
                        transition={{ duration: 1.2 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <Image
                            className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
                            src={experience.src}
                            alt=""
                            width={100}
                            height={100}
                        />
                    </motion.div>

                    <div className="px-0 md:px-10">
                        <h4 className="text-center text-4xl font-light">
                            {experience.job}
                        </h4>
                        <p className="text-center font-bold text-2xl mt-1">
                            {experience.title}
                        </p>
                        <div className="flex justify-center gap-1 space-x-2 my-2">
                            {experience.technologies.map((technology, i) => (
                                <Image
                                    key={i}
                                    className="h-6 w-6"
                                    src={technology}
                                    width={100}
                                    height={100}
                                />
                            ))}
                        </div>
                        <p className="uppercase py-5 text-gray-300">
                            {experience.description}
                        </p>

                        <ul className="list-disc space-y-4 ml-5 text-lg">
                            {experience.summary}
                        </ul>
                    </div>
                </article>
            ))}
        </>
    );
}
