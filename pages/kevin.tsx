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
          <Balancer className="px-0 font-supply">Kevin Hanaford</Balancer>
        </motion.h1>
        <motion.p
          className="mt-6 text-left p-1 text-gray-700 md:text-xl"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <Balancer>
            <h2 className="font-supply">
              <Link href="https://twitter.com/cmdkvn" className="text-blue-500 font-bold hover:underline">Twitter </Link>  
              <Link href="https://kevinhanaford.com/" className="text-sky-700 font-bold hover:underline">Personal site</Link>
              
                   
            </h2>
            <br></br>  
            <p>I currently lead Security Engineering at Discord and have spent the last 15 years building and leading Information Security, Incident Response, and Operations teams at companies of all shapes and sizes from early-stage startups to Fortune 100 companies.</p>
            <br></br>
            <p>Outside of my day job I enjoy spending time with my wife, kids, and dogs, usually outdoors somewhere in the mountains in the Pacific Northwest, writing and recording music, and working with my hands and brain sans computer. My biggest weaknesses in life are french fries, chips at Mexican restaurants, and cookies of pretty much any variety as long as they don't involve raisins. I also drink an amount of coffee that borders on insanity and love it.</p>
            <br></br>  
            <p className="font-bold">How do you think you can best help/work with startups?</p> 
            <p>My core work is in Information Security, IT, and People Management and I care deeply about scalability, efficiency, and planning for the future. Most early startups don't need most of what I do in a dedicated role, so I find fulfillment in helping early stage companies think about and plan for these topics such that they don't need to hire a dedicated Security or IT person right away, but also set themselves up for success once they get to the size and stage where they can support dedicated professionals.</p>
            <br></br>  
            <p className="font-bold">If there was a book, movie, podcast, or blog post that you could make everyone you work with consume, what would it be and why?</p>
            <p> Wall-E. The first third of the movie contains no dialogue other than beeps and boops. It's effectively a modern silent film that forces the viewer to focus on what they're seeing, particularly the human-esque body language of two robots dealing with the ramifications of humans not caring about their environment, which is particularly apropos these days.</p>
            <br></br>  
            <p className="font-bold">What is an online product that no longer exists that you wish was still around and why?</p> 
            <p> They're all gone now so to avoid immense sadness I've blocked them from my brain 😢 </p>
            <br></br>  
            <p className="font-bold">Favorite music to work to?</p> 
            <p> Anything instrumental and chill. Focus Flow on Spotify has been my go-to for the last couple of years.</p>
          </Balancer>
        </motion.p> 
      </motion.div>
    </ContributorLayout>
  );
}