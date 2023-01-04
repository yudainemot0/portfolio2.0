import Image from "next/image";
import { motion } from "framer-motion";

export default function Skill() {
    return (
        <div className="group relative flex cursor-pointer">
            <motion.div
                initial={{
                    
                    opacity: 0,
                }}
                whileInView={{ opacity: 1 }}
                transition={{ transition: 1 }}
            >
                <Image
                    className="rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
                    src="/pngegg.png"
                    width={100}
                    height={100}
                    priority
                />
            </motion.div>
        </div>
    );
}
