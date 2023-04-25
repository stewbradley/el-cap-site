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
          <Balancer className="font-supply">Behzod Sirjani</Balancer>
        </motion.h1>
        <motion.p
          className="mt-6 text-left p-1 text-gray-700 md:text-xl"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <Balancer>
            <h2 className="font-supply">
              <Link href="https://twitter.com/beh_zod" className="text-blue-500 font-bold hover:underline">Twitter, </Link>  
              <Link href="https://behzod.com/" className="text-cyan-600 font-bold hover:underline">Personal site, </Link>
              <Link href="https://www.linkedin.com/in/behzodsirjani/" className="text-sky-700 font-bold hover:underline">LinkedIn</Link>
                   
            </h2>
            <br></br>  
            LinkedIn

            <p>CTO of Arkestro | prev. SurveyMonkey | Tufts Alum | DC Native | 4x Marathoner</p>
            <br></br>
            <p className="font-bold">How do you think you can best help/work with startups?</p> 
            <p>Advising on Product Roadmap, Architecture and Integrations Strategy, Interviewing/Hiring, and Enterprise Compliance</p>
            <br></br>
            <p className="font-bold">If there was a book, movie, podcast, or blog post that you could make everyone you work with consume, what would it be and why?</p>
            <p>Born to Run -- because it illustrates that we humans are capable of much more than we think.</p>
            <br></br>
            <p>What is an online product that no longer exists that you wish was still around and why? turntable.fm -- online group djing and listening was a really engaging way to consume music</p>
            <br></br> 
            <p className="font-bold">Favorite music to work to?</p>
            <p>Jon Hopkins, Four Tet, Fred again.., Totally Enormous Extinct Dinosaurs, or Jamie xx</p>
            <br></br>
          </Balancer>
        </motion.p> 
      </motion.div>
    </ContributorLayout>
  );
}