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
          <Balancer className="px-0 font-supply">Colette Kolenda</Balancer>
        </motion.h1>
        <motion.p
          className="mt-6 text-left p-1 text-gray-700 md:text-xl"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <Balancer>
            <h2 className="font-supply">
              <Link href="https://twitter.com/colettekolenda" className="text-blue-500 font-bold hover:underline">Twitter, </Link>  
              <Link href="https://www.linkedin.com/in/colettekolenda/" className="text-sky-700 font-bold hover:underline">LinkedIn</Link>
              
                   
            </h2>
            <br></br>  
            <p>Colette is a strategic and product research leader. Her passion is for weaving multiple data streams together, often combining user research, data science and other insights to help product and business execs make better long-term decisions. She also has deep expertise in building research practices in growing tech companies. As the 5th researcher at Spotify, she built the Spotify User Research practice for Spotify Free. She is now focused on building qual and quant research teams at Cash App.</p>
            <br></br>  
            <p className="font-bold">How do you think you can best help/work with startups?</p> 
            <p>finding product-market fit, understanding users, setting up data and user research practices</p>
            <br></br>  
            <p>Outside of that, I love diving into conversations about growth loops, especially when it comes to thinking about helping customers get to the the aha moment in your products and the right behaviors and habits to drive.</p>
            <br></br>  
            <p className="font-bold">If there was a book, movie, podcast, or blog post that you could make everyone you work with consume, what would it be and why?</p>
            <p>I have 2! Predictably Irrational, a book that dives into all sorts of biases we have and how they affect our thinking. The Design of Everyday Things, a great read on how the design of the things and systems we use shape our behavior.</p>
            <br></br>  
            <p>What is an online product that no longer exists that you wish was still around and why? Tumblr. It felt like a much healthier place to engage with and explore ideas than Twitter during a time in my life when I was voraciously exploring a lot of different directions.</p>
            <br></br>  
            <p className="font-bold">Favorite music to work to?</p> 
            <p>Almost anything written by The American Dollar or In Love With A Ghost's "Let's Go" EP.</p>
          </Balancer>
        </motion.p> 
      </motion.div>
    </ContributorLayout>
  );
}