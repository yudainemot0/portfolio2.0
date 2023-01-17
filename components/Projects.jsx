import { motion } from "framer-motion";
import Image from "next/image";

const PROJECTS = [
    {
        title: "Today' Task",
        description:
            "This application was created to learn Laravel. Login authentication is implemented using breeze. This is my first application that I built when I was still a beginner. I remember it was very difficult.",
        src: "/5.png",
    },
    {
        title: "My Work",
        description:
            "I struggled with CSS when using TailwindCSS on my first mock website, as I didn't fully understand PureCSS. However, this experience helped me deepen my understanding of CSS. At the time, I wasn't able to create a responsive website yet.",
        src: "/1.png",
    },
    {
        title: "創作",
        description:
            "For this mock site, we challenged ourselves to create a vertical layout. This gives the site a Japanese WA atmosphere. Also, by using a black background color, we were able to create a luxurious and rich site.",
        src: "/2.png",
    },
    {
        title: "Travel Blog",
        description:
            "This mock site is a complex two-column layout challenge. Currently it is only a look and feel, but our goal is to complete the site with actual article submission using Next.js and microCMS, which we are still learning.",
        src: "/3.png",
    },
    {
        title: "Cafe Belza",
        description:
            "This mock site also challenged me to design a layout. Learning from books and other sources helped me understand that margins are very important. We also used TailwindCSS, and by this time, the package manager made it easy to set up the details.",
        src: "/4.png",
    },
];

export default function Projects() {
    
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="h-screen relative flex flex-col overflow-hidden text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
        >
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
                Projects
            </h3>

            <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
                {PROJECTS.map((project, i) => (
                    <div
                        key={i}
                        className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-4 md:p-44 h-screen"
                    >
                        {/* <motion.img
                            initial={{ y: -300, opacity: 0 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2 }}
                            viewport={{ once: true }}
                            src={project.src}
                            alt=""
                        /> */}
                        <motion.div
                            initial={{ y: -100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1.2 }}
                            viewport={{ once: true }}
                        >
                            <Image src={project.src} width={900} height={100} />
                        </motion.div>

                        <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                            <h4 className="text-4xl md:text-2xl font-semibold text-center">
                                <span className="underline decoration-[#F7AB0A]/50">
                                    Case Study {i + 1} of {PROJECTS.length}:
                                </span>{" "}
                                {project.title}
                            </h4>

                            <p className="text-lg text-center md:text-left">
                                {project.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
        </motion.div>
    );
}