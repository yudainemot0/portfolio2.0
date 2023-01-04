import { motion } from "framer-motion";
import Image from "next/image";

export default function ExperienceCard() {
    return (
        <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <Image
                    className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
                    src="/スクリーンショット 2023-01-02 17.50.18.png"
                    alt=""
                    width={100}
                    height={100}
                />
            </motion.div>

            <div className="px-0 md:px-10">
                <h4 className="text-4xl font-light">Web Developer</h4>
                <p className="font-bold text-2xl mt-1">YNCode</p>
                <div className="flex gap-1 space-x-2 my-2">
                    <img
                        className="h-6 w-6"
                        src="https://www.freepnglogos.com/uploads/javascript-png/js-logo-png-5.png"
                        alt=""
                    />
                    <img
                        className="h-6 w-6"
                        src="https://www.freepnglogos.com/uploads/javascript-png/js-logo-png-5.png"
                        alt=""
                    />
                    <img
                        className="h-6 w-6"
                        src="https://www.freepnglogos.com/uploads/javascript-png/js-logo-png-5.png"
                        alt=""
                    />
                </div>
                <p className="uppercase py-5 text-gray-300">Started work... - Ended...</p>

                <ul className="list-disc space-y-4 ml-5 text-lg">
                    <li>Summary points</li>
                    <li>Summary points</li>
                    <li>Summary points</li>
                    <li>Summary points</li>
                </ul>
            </div>
        </article>
    );
}
