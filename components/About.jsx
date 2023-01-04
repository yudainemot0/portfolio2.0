import { motion } from "framer-motion";

export default function About() {
    return (
        <div className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
            <h3 className="md:absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl mt-10 md:mt-0">
                About
            </h3>

            <motion.img
                initial={{
                    x: -200,
                    opacity: 0,
                }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                src="http://www.yncode-web.com/images/myshot.png"
                className="md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
            />

            <div className="space-y-10 px-0 md:px-10">
                <h4 className="text-4xl font-semibold">
                    Here is a{" "}
                    <span className="underline decoration-[#F7AB0A]/50">
                        little
                    </span>{" "}
                    background
                </h4>
                <p className="text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quasi, numquam pariatur minus excepturi quidem eius
                    blanditiis id nulla similique nesciunt ullam sapiente
                    adipisci placeat ad sunt? Nemo saepe ducimus asperiores.
                </p>
            </div>
        </div>
    );
}
