import Card from "@/components/home/card";
import Layout from "@/components/layout";
import Balancer from "react-wrap-balancer";
import { motion } from "framer-motion";
import { DEPLOY_URL, FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";
import ComponentGrid from "@/components/home/component-grid";
import Image from "next/image";
import Link from "next/link";
import localFont from "@next/font/local";

const sfPro = localFont({
  src: "../styles/SF-Pro-Display-Medium.otf",
  variable: "--font-sf",
});

const supply = localFont({
  src: "../styles/Supply-Regular.otf",
  variable: "--font-supply",
});

export default function Home() {
  return (
    <Layout>
      <motion.div
        className="max-w-xl px-5 xl:px-0"
        initial="hidden"
        whileInView="show"
        animate="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {/**<motion.a
          variants={FADE_DOWN_ANIMATION_VARIANTS}
          href="https://twitter.com/elcapxyz"
          target="_blank"
          rel="noreferrer"
          className="mx-auto mb-5 flex max-w-fit items-center justify-center space-x-2 overflow-hidden bg-slate px-7 py-2 transition-colors "
        >
          <Twitter className="h-5 w-5 text-[#1d9bf0]" />
          <p className="text-sm boarder-grey-200 font-semibold text-[#1d9bf0]">
            tweets
          </p>
      </motion.a>**/}
        <motion.h1
          className="text-slate-700 bg-clip-text text-center font-bold font-display tracking-[-0.02em] text-transparent drop-shadow-sm text-4xl md:text-7xl md:leading-[5rem]"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <div>
            <Balancer>We partner with the bold at the earliest stages</Balancer>
          </div>
        </motion.h1>
        <motion.p
          className="mt-6 text-center text-gray-500 md:text-xl"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          
        </motion.p>
        <motion.div
          className="mx-auto mt-6 flex items-center justify-center space-x-5"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <a
            className="flex max-w-fit items-center justify-center space-x-2 border border-green-600 bg-slate px-5 py-2 text-sm text-gray-600 hover:text-black transition-colors bg-green-300 hover:shadow-md hover:border-gray-800 hover:bg-green-100"
            href="https://elcap1.notion.site/El-Cap-Research-Hub-48c0a800eff74518ab7ad112c1ab8c33"
            target="_blank"
            rel="noopener noreferrer"
          >
            
            <p>Research hub</p>

          </a>
          <a
            className="flex max-w-fit items-center justify-center space-x-2 border border-red-600 bg-slate px-5 py-2 text-sm text-white bg-red-300 transition-colors hover:text-black hover:shadow-md hover:border-gray-800 hover:bg-red-100"
            href="https://github.com/stewbradley/el-cap"
            target="_blank"
            rel="noopener noreferrer"
          >
            
            <p>Read our FAQ</p>

          </a>
        </motion.div>
       
      </motion.div>
      {/* here we are animating with Tailwind instead of Framer Motion because Framer Motion messes up the z-index for child components */}
      <div className="my-10 font-supply grid w-full max-w-screen-xl animate-[slide-down-fade_0.5s_ease-in-out] grid-cols-1 gap-5 md:px-5 md:grid-cols-3 xl:px-0">
        {features.map(({ title, description, demo, large, }) => (
          <Card
            key={title}
            title={title}
            description={description}
            demo={
              title === "Portfolio" ? (
                <ComponentGrid />
              ) : (
                demo
              )
            }
            large={large}
            
          />
        ))}
      </div>
    </Layout>
  );
}

const features = [
  {
    title: "Portfolio",
    description:
      "Our companies",
    large: true,
  },
  {
    title: "What are collisions?",
    description:
      "The impact of innovation and behavior change",
    demo: 
    <div className="animate-pulse">
      <Link href="https://mirror.xyz/0xA00D13D2067F6D6afAF4705A624117Cf962B2515/cQ_XguVBHt9VEv1JjN95V8cmFhWrxfVoVm-FdOk7kVI">
      {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/new_egypt.png"
          alt="el cap writing"
          width={120}
        />
      </Link>
    </div>,
    link: "https://mirror.xyz/0xA00D13D2067F6D6afAF4705A624117Cf962B2515/cQ_XguVBHt9VEv1JjN95V8cmFhWrxfVoVm-FdOk7kVI"
  },
  {
    title: "Our writing ☝️",
    description:
      "and what we're [reading](https://airtable.com/shrtYNWe0VHKuRcCb/tbl1Z6dRfPEOSurN5/viw1Y4hZ5IMQXltI3?blocks=hide).",
    demo: (
      <div className="hover:animate-spin">
        <Link href="../posts/">
        {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/bird.png"
            alt="el cap writing"
            width={120}
          />
        </Link>
      </div>
    ),
  },
  {
    title: "Powered by contributors",
    description:
      "A collective of experts, operators, and builders",
    demo: (
      <div className="flex justify-center space-x-20">
        <Link href="/contributors"><Image alt="egypt logo" src="/joined.svg" width={60} height={60} /></Link>
        <Link href="/contributors"><Image alt="x logo" src="/janus4.svg" width={60} height={60} /></Link>
        <Link href="/contributors"><Image alt="pyramid logo" src="/xicon.svg" width={60} height={60} /></Link>
      </div>
    ),
    large: true,
  },
  
];
