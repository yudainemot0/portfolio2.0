import { motion } from "framer-motion";

export default function About() {
    return (
        <div className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center snap-center">
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
                    I am about to turn 40 and am trying to restructure my career
                    by acquiring IT skills. I used to work for one of the
                    largest auto parts manufacturers in the industry, but was
                    greatly influenced by Linda Gratton&apos;s &quot;LIFE
                    SHIFT&quot; and felt the need to restructure my career for a
                    multi-stage life.
                </p>
            </div>
        </div>
    );
}
