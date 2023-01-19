import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
    return (
        <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
            <motion.div
                initial={{
                    x: -500,
                    opacity: 0,
                    scale: 0.5,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    duration: 1.5,
                }}
                className="flex flex-row items-center"
            >
                {/* Social Icons */}

                <SocialIcon
                    url="https://www.instagram.com/yudainemoto410/"
                    fgColor="gray"
                    bgColor="transparent"
                />
                <SocialIcon
                    url="https://twitter.com/YN_Code"
                    fgColor="gray"
                    bgColor="transparent"
                />
                <SocialIcon
                    url="https://github.com/yudainemot0"
                    fgColor="gray"
                    bgColor="transparent"
                />
            </motion.div>

            <Link href="#contact">
                <motion.div
                    initial={{
                        x: 500,
                        opacity: 0,
                        scale: 0.5,
                    }}
                    animate={{
                        x: 0,
                        opacity: 1,
                        scale: 1,
                    }}
                    transition={{
                        duration: 1.5,
                    }}
                    className="flex flex-row items-center text-gray-300 cursor-pointer pr-3 gap-3"
                >
                    <Image src="/mail.png" width={28} height={28} />
                    {/* Linkコンポーネント内にSocialIcon（プラグイン）のaタグがx、ハイドレーションエラー。
                    ハイドレーション->Next.jsでは生成されたHTMLが、そのページに必要な最小限のJavaScriptのコードと関連付けられることで、ブラウザがページを読み込んだ際に、そのJavaScriptが実行されページが操作可能（インタラクティブ）になります。この過程をHydrationといいます。
                    参考サイト https://zenn.dev/onikun/articles/28fb8de056c89a */}
                    {/* <SocialIcon
                        className="cursor-pointer"
                        network="email"
                        fgColor="gray"
                        bgColor="transparent"
                    /> */}
                    <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
                        Get In Touch
                    </p>
                </motion.div>
            </Link>
        </header>
    );
}
