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
          <Balancer className="px-0 font-supply">Craig Wilson</Balancer>
        </motion.h1>
        <motion.p
          className="mt-6 text-left p-1 text-gray-700 md:text-xl"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <Balancer>
            <h2 className="font-supply">
              <Link href="https://twitter.com/cgeoffwilson" className="text-blue-500 font-bold hover:underline">Twitter, </Link>
              <Link href="https://www.linkedin.com/in/cgeoffwilson/" className="text-blue-500 font-bold hover:underline">LinkedIn, </Link>  
              <Link href="http://www.craigwilson.co/" className="text-sky-700 font-bold hover:underline">Personal site</Link>
                   
            </h2>
            <br></br>  
            <p>Serial startup helper: Operator/Investor/Advisor in past, present, and future lives</p>
            <br></br>  
            <p className="font-bold">How do you think you can best help/work with startups?</p> 
            <p>Telling your story effectively, fundraising, and hiring..</p>
            <br></br>  
            <p className="font-bold">If there was a book, movie, podcast, or blog post that you could make everyone you work with consume, what would it be and why?</p>
            <p>It’s usually the most recent thing I’ve read, watched, or listened to so lately its Ministry for the Future by Kim Stanley Robinson (fiction) & Say Nothing by Patrick Radden Keefe (non-fiction). I do subscribe to the notion that one of the most valuable things you can do is read as much as you can get your hands on.</p>
            <br></br>  
            <p className="font-bold">What is an online product that no longer exists that you wish was still around and why?</p> 
            <p>Foursquare - still the elite recommendation engine.</p>
            <br></br>  
            <p className="font-bold">Favorite music to work to?</p> 
            <p>
              <Link href="https://open.spotify.com/album/2CMCLp7kOI8Be6rPaYyHeZ?si=a6FXoAxGQveu8uxuaY1KWQ" className="text-blue-500 hover:underline">Keith Jarrett - Bremen & Lausanne Concerts</Link> and
              <Link href="https://open.spotify.com/album/6NkgPYCMAzttRIKDpuJrFp?si=yHhZpQhUTYealPYnVWoieQ" className="text-blue-500 hover:underline">John Coltrane - Giant Steps</Link>
            </p> 
          </Balancer>
        </motion.p> 
      </motion.div>
    </ContributorLayout>
  );
}