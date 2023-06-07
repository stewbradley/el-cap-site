import ContributorLayout from "@/components/layout/contributor";
import Balancer from "react-wrap-balancer";
import { motion } from "framer-motion";
import { DEPLOY_URL, FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";
import Image from "next/image";
import Link from 'next/link'
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
          <Balancer className='px-0 font-supply'>Jasdev Singh</Balancer>
        </motion.h1>
        <motion.p
          className="mt-6 text-left p-1 text-gray-700 md:text-xl"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <Balancer>
            <h2 className="font-supply">
              <Link href="https://twitter.com/jasdev" className="text-blue-500 font-bold hover:underline">Twitter </Link>  
              <Link href="https://jasdev.me/" className="text-sky-700 font-bold hover:underline">Personal site</Link>
              
                   
            </h2>
            <br></br>  
            <p>👋🏽 I’m an engineer at the Browser Company in NY and prior to that, I co-founded RIFF, worked at Peloton, Tumblr, and Imgur.I’m a big fan of dance music, indoor cycling, shuffling, math, and writing. I’ve wanted to get more involved in technical advising, so I’m grateful to be a part of El Cap’s first batch of contributors.</p>
            <br></br>  
            <p className="font-bold">How do you think you can best help/work with startups?</p> 
            <p>Strategy on Apple platforms, interviewing early engineering hires, and technical writing.</p>
            <br></br>  
            <p className="font-bold">If there was a book, movie, podcast, or blog post that you could make everyone you work with consume, what would it be and why?</p>
            <p>xkcd #1053  Feigning surprise when someone doesn’t know something not only makes ‘em feel bad, but also misses an opportunity to share knowledge with one another. I learned about this comic from my time at the Recurse Center and it’s one of those dynamics you can’t unsee once it’s named. https://www.recurse.com/social-rules#no-feigning-surprise</p>
            <br></br>  
            <p className="font-bold">What is an online product that no longer exists that you wish was still around and why?</p> 
            <p>Sunrise — still the best calendar app in my book.</p>
            <br></br>  
            <p className="font-bold">Favorite music to work to?</p> 
            <p>Mostly dance — <Link href="https://www.youtube.com/watch?v=QczRVnZJ97k" className="text-blue-500 hover:underline">Here's what I'm listening</Link> as I write this.</p>
          </Balancer>
        </motion.p> 
      </motion.div>
    </ContributorLayout>
  );
}