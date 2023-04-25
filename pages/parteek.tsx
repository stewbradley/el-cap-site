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
          <Balancer className="px-0 font-supply">Parteek Saran</Balancer>
        </motion.h1>
        <motion.p
          className="mt-6 text-left p-1 text-gray-700 md:text-xl"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <Balancer>
            <h2 className="font-supply">
              <Link href="http://twitter.com/parteeksaran" className="text-blue-500 font-bold hover:underline">Twitter, </Link>  
              <Link href="http://www.teek.me/" className="text-sky-700 font-bold hover:underline">Personal site, </Link>
              <Link href="http://www.uno.app/" className="text-sky-900 font-bold hover:underline">Uno</Link>
                   
            </h2>
            <br></br>  
            <p>Designer who loves croissants and cycling. Founder of Uno.</p>
            <br></br>  
            <p className="font-bold">How do you think you can best help/work with startups?</p> 
            <p> Guiding how you build and design your products. Someone you can vent to, startups can be hard.</p>
            <br></br>  
            <p className="font-bold">If there was a book, movie, podcast, or blog post that you could make everyone you work with consume, what would it be and why?</p>
            <p>I don't have a good answer to this. Some of the most memorable things I'd want others to consume are the conversations I've had with the smart and supportive people in my orbit.</p>
            <br></br>  
            <p className="font-bold">What is an online product that no longer exists that you wish was still around and why?</p> 
            <p>Path. I like sharing things, but mostly with my close friends/family.</p>
            <br></br>  
            <p className="font-bold">Favorite music to work to?</p> 
            <p><Link href="https://open.spotify.com/playlist/37i9dQZF1E8JCT88ZnJwKO?si=f65375e92d734626" className="text-blue-500 hover:underline">Parteek's playlist</Link></p>
          </Balancer>
        </motion.p> 
      </motion.div>
    </ContributorLayout>
  );
}