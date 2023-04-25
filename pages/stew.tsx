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
          <Balancer className="px-0 font-supply">Stew Bradley</Balancer>
        </motion.h1>
        <motion.p
          className="mt-6 text-left p-1 text-gray-700 md:text-xl"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <Balancer>
            <h2 className="font-supply">
              <Link href="http://twitter.com/stewbradley" className="text-blue-500 font-bold hover:underline">Twitter, </Link>  
              <Link href="http://stew.so/" className="text-sky-700 font-bold hover:underline">Personal site</Link>
              
                   
            </h2>
            <br></br>  
            <p>A user-focused designer, leading multiple innovation and new bet workstreams at Uber.</p>
            <br></br>  
            <p className="font-bold">How do you think you can best help/work with startups?</p> 
            <p> Design, design hiring, product strategy.</p>
            <br></br>  
            <p className="font-bold">If there was a book, movie, podcast, or blog post that you could make everyone you work with consume, what would it be and why?</p>
            <p>Podcast: Scriptnotes - a podcast from two screenwriters about screenwriting, storytelling is at the center of almost everything we do, whether inspiring a team to take a big swing or communicating value to customers.</p>
            <br></br>  
            <p className="font-bold">What is an online product that no longer exists that you wish was still around and why?</p> 
            <p> Rdio - the first music platform to truly prioritize design quality and to this day one of the best social music experiences.</p>
            <br></br>  
            <p className="font-bold">Favorite music to work to?</p> 
            <p><Link href="https://music.apple.com/us/album/memoryhouse/304212756" className="text-blue-500 hover:underline">Memory House Playlist</Link></p>
          </Balancer>
        </motion.p> 
      </motion.div>
    </ContributorLayout>
  );
}