import { motion } from "framer-motion";

const PROJECTS = [
    {
        title: "Today' Task",
        description:
            "This application was created to learn Laravel. Login authentication is implemented using breeze. This is my first application that I built when I was still a beginner. I remember it was very difficult.",
        src: "http://www.yncode-web.com/images/todays_task.png",
    },
    {
        title: "My Work",
        description:
            "This was the first mock site I created, and I struggled with CSS because I used TailwindCSS without fully understanding PureCSS. However, this experience helped me to deepen my understanding of CSS.",
        src: "http://www.yncode-web.com/images/work1.png",
    },
    {
        title: "創作",
        description:
            "For this mock site, we challenged ourselves to create a vertical layout. This gives the site a Japanese WA atmosphere. Also, by using a black background color, we were able to create a luxurious and rich site.",
        src: "http://www.yncode-web.com/images/work2.png",
    },
    {
        title: "Travel Blog",
        description:
            "This mock site is a complex two-column layout challenge. Currently it is only a look and feel, but our goal is to complete the site with actual article submission using Next.js and microCMS, which we are still learning.",
        src: "http://www.yncode-web.com/images/work3.png",
    },
    {
        title: "Cafe Belza",
        description:
            "This mock site also challenged me to design a layout. Learning from books and other sources helped me understand that margins are very important. We also used TailwindCSS, and by this time, the package manager made it easy to set up the details.",
        src: "http://www.yncode-web.com/images/work4.png",
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
                        className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
                    >
                        <motion.img
                            initial={{ y: -300, opacity: 0 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2 }}
                            viewport={{ once: true }}
                            src={project.src}
                            // src="http://www.yncode-web.com/images/todays_task.png"
                            alt=""
                        />

                        <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                            <h4 className="text-4xl font-semibold text-center">
                                <span className="underline decoration-[#F7AB0A]/50">
                                    Case Study {i + 1} of {PROJECTS.length}:
                                </span>{" "}
                                {/* Today&apos;s Task */}
                                {project.title}
                            </h4>

                            <p className="text-lg text-center md:text-left">
                                {/* This application was created to learn Laravel.
                                Login authentication is implemented using
                                breeze. This is my first application that I
                                built when I was still a beginner. I remember it
                                was very difficult. */}
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

// http://www.yncode-web.com/images/work1.png
// http://www.yncode-web.com/images/work2.png
