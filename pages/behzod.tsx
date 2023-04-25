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
            I’m a research consultant and advisor who helps organizations improve the quality of their decision-making. I’m also an EIR and Program Partner at Reforge, where I built and lead the User Insights for Product Decisions program, and prior to that contributed to research teams at Slack and Facebook.                          
            <br></br>
            <br></br>
            <p className="font-bold">How do you think you can best help/work with startups?</p>  
            <p>One of the most valuable conversations I have with early stage companies is how to de-risk or increase confidence in the decisions that they're making — both about their products and their organizations. I often work with companies to build strong practices around evidence-based decision making, which can include everything from how to engage with customers to which research tools to use to how to set up a customer advisory board. I think the most successful organizations are ones that design with their customers, not just for them, and I am always willing to help teams figure out how to improve on that dimension.</p>
            <br></br>  
            <p>Outside of that, I love diving into conversations about growth loops, especially when it comes to thinking about helping customers get to the the aha moment in your products and the right behaviors and habits to drive.</p>
            <br></br>  
            <p className="font-bold">If there was a book, movie, podcast, or blog post that you could make everyone you work with consume, what would it be and why?</p>
            <p>I encourage almost everyone I meet to read The School of Life's An Emotional Education. I think that we often expect too much of each other and not enough of ourselves, and coming to grips with how we can better identify and engage with our own thoughts and emotions is the first step to being the best versions of ourselves.</p>
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