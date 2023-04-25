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
          <Balancer className="px-0 font-supply">Zakk Fleischmann</Balancer>
        </motion.h1>
        <motion.p
          className="mt-6 text-left p-1 text-gray-700 md:text-xl"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <Balancer>
            <h2 className="font-supply">
              <Link href="https://twitter.com/0xzakk" className="text-blue-500 font-bold hover:underline">Twitter, </Link>  
              <Link href="https://zkf.io/blog/" className="text-sky-700 font-bold hover:underline">Personal site</Link>
              
                   
            </h2>
            <br></br>  
            <p>Zakk is a teacher and a software engineer.</p>
            <br></br>  
            <p className="font-bold">How do you think you can best help/work with startups?</p> 
            <p>I've got two areas of experience to draw from: building products and being a teacher.</p>
            <br></br>
            <p>I've worked in every product role (design, engineering, marketing, management, etc) across a pretty wide array of industries. I can help with thinking through how to make product decisions, how to leverage individual contributors, how to quickly staff up or down - things related to the building of the product rather than the product itself. Working with startups, could look like brainstorming how to tackle a specific problem, facilitating a difficult conversation, or talking through trade-offs.</p>
            <br></br>
            <p>Teaching a coding bootcamp gave me exposure to working with some ~300 different adults in a very short period of time. I saw a lot in that time and it felt like downloading management kung-fu. For instance, for better or for worse, I'm comfortable making the decision to let someone go, thinking through what that needs to look like, and actually having that conversation. In working with startups, this probably looks like coaching founders, many of whom are new to managing people and probably didn't start a company to become a manager.</p>
            <br></br>  
            <p className="font-bold">If there was a book, movie, podcast, or blog post that you could make everyone you work with consume, what would it be and why?</p>
            <p>'The Case for Working with Your Hands' - The difference between humans and all other animals isn't our opposable thumbs - it's the fact that we invent things, that we make technology. Some technologies become so ingrained in who we are that we forget they are actually technologies (for example, when do you think walls, time, or the alphabet were invented?) but at our core, this is what we do. Remembering this helps explain a lot of otherwise confusing behavior and can help guide you as you navigate the world around you.</p>
            <br></br>  
            <p className="font-bold">What is an online product that no longer exists that you wish was still around and why?</p> 
            <p> The old Myspace, just for the nostalgia of it</p>
            <br></br>  
            <p className="font-bold">Favorite music to work to?</p> 
            <p><Link href="https://open.spotify.com/playlist/4z0OoIPMeVANcnEip0sTis?si=f2fb2ca4cd5d4c69" className="text-blue-500 hover:underline">Working Fast</Link> and <Link href="https://open.spotify.com/playlist/7atfxwQa1sjjeou6SDMY9W?si=f1cf12584adf4168" className="text-blue-500 hover:underline">Working Slow</Link> - I've listened to these two albums on repeat while I'm working (either fast or slow) since I was like 15 years old</p>
          </Balancer>
        </motion.p> 
      </motion.div>
    </ContributorLayout>
  );
}