import ContributorLayout from "@/components/layout/contributor";
import Balancer from "react-wrap-balancer";
import { motion } from "framer-motion";
import { DEPLOY_URL, FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";
import Image from "next/image";
import Link from 'next/link';
import localFont from "@next/font/local";
import { Inter } from "@next/font/google";
import cx from "classnames";

const sfPro = localFont({
  src: "../styles/SF-Pro-Display-Medium.otf",
  variable: "--font-sf",
});

const supply = localFont({
  src: "../styles/Supply-Regular.otf",
  variable: "--font-supply",
});


export default function Behzod() {
  return (
    <ContributorLayout>
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
    
        <motion.h1
          className="bg-gradient-to-br from-black to-stone-500 bg-clip-text text-left font-display text-3xl font-bold  text-transparent drop-shadow-sm md:text-5xl md:leading-[5rem]"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <Balancer className="px-0 font-supply">Nick Beattie</Balancer>
        </motion.h1>
        <motion.p
          className="mt-6 text-left p-1 text-gray-700 md:text-xl"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <Balancer>
            <h2 className="font-supply">
              <Link href="https://twitter.com/nickbytes" className="text-blue-500 font-bold hover:underline">Twitter, </Link>
              <Link href="https://github.com/nickbytes" className="text-blue-500 font-bold hover:underline">Github, </Link>  
              <Link href="https://nickbytes.com/" className="text-sky-700 font-bold hover:underline">Personal site</Link>
                   
            </h2>
            <br></br>  
            <p>Engineer @ Rainbow</p>
            <br></br>  
            <p className="font-bold">How do you think you can best help/work with startups?</p> 
            <p>Recently, I've been enjoying the Foundation series. I've got a lot of respect for people who chase an idea throughout their whole career. The way Asimov has connected the Robot, Empire, and Foundation series is amazing.</p>
            <br></br>  
            <p className="font-bold">What is an online product that no longer exists that you wish was still around and why?</p> 
            <p>The original Shyp had @-handles. You could ship people things without knowing their address and you could change the address your @-handle pointed to when you moved. I thought that was cool.</p>
            <br></br>  
            <p className="font-bold">Favorite music to work to?</p> 
            <p>lot radio</p>
          </Balancer>
        </motion.p> 
      </motion.div>
    </ContributorLayout>
  );
}