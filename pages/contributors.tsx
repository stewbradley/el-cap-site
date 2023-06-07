import Blog from "@/components/home/blog";
import Balancer from "react-wrap-balancer";
import AltLayout from "@/components/layout/alt-index";
import { motion } from "framer-motion";
import { DEPLOY_URL, FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";
import { Github, Twitter } from "@/components/shared/icons";
import WebVitals from "@/components/home/web-vitals";
import ComponentGrid from "@/components/home/component-grid";
import Image from "next/image";
import Link from "next/link";
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
export default function Contributors() {
  return (
    <AltLayout>
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
          className="text-center text-black font-supply text-5xl py-4"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <p>Contributors</p>
        </motion.h1>
        <motion.h1
          className="text-center text-slate-700 text-2xl"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <p>
            A collective approach to company building.
          </p>
        </motion.h1> 
        
      </motion.div>
      {/* here we are animating with Tailwind instead of Framer Motion because Framer Motion messes up the z-index for child components */}
      <div className="my-10 grid w-full max-w-screen-xl animate-[slide-down-fade_0.5s_ease-in-out] grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
        {features.map(({ title, description, demo}) => (
          <Blog
            key={title}
            title={title}
            description={description}
            demo={
              title === "Portfolio" ? (
                <ComponentGrid />
              ) : (
                demo
              )
            }
            
          />
        ))}
      </div>
    </AltLayout>
  );
}

const features = [
  {
    title: "Behzod Sirjani",
    description:
      "[Personal site](https://behzod.com/), [Twitter](https://twitter.com/beh_zod), and [LinkedIn](https://www.linkedin.com/in/behzodsirjani/)",
    demo: <Link href="/behzod">
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img
      src="/behzod.svg"
      alt="el cap writing"
      width={120}
      className="hover:border-green-400"
    />
    </Link>
  },
  {
    title: "Ben Leiken",
    description:
      "[LinkedIn](https://www.linkedin.com/in/benleiken/)",
      demo: <Link href="/ben">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/ben.svg"
        alt="el cap writing"
        width={120}
      />
      </Link>
  },

  {
    title: "Craig Wilson",
    description:
      "[Personal site](http://www.craigwilson.co/), [Twitter](https://twitter.com/ccgeoffwilson), [LinkedIn](https://www.linkedin.com/in/cgeoffwilson/)",
    demo: <Link href="/craig">
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img
      src="/craig.svg"
      alt="el cap writing"
      width={120}
    />
    </Link>
  },

  {
    title: "Colette Kolenda",
    description:
      "[Twitter](https://twitter.com/colettekolenda), [LinkedIn](https://www.linkedin.com/in/colettekolenda/)",
    demo: <Link href="/colette">
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img
      src="/colette.svg"
      alt="el cap writing"
      width={120}
    />
    </Link>
  },
  {
    title: "Jasdev Singh",
    description:
      "[Personal site](https://jasdev.me/), [Twitter](https://twitter.com/jasdev)",
      demo: <Link href="/jasdev">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/jasdev.svg"
        alt="el cap writing"
        width={120}
      />
      </Link>
  },
  {
    title: "Kevin Hanaford",
    description:
      "[Personal site](https://kevinhanaford.com/), [Twitter](https://twitter.com/cmdkvn)",
      demo: <Link href="/kevin">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/kevin.svg"
        alt="el cap writing"
        width={120}
      />
      </Link>
  },
  {
    title: "Max Di Capua",
    description:
      "[Personal site](https://max.lol/), [Twitter](http://twitter.com/maxdicapua)",
    demo: <Link href="/max">
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img
      src="/max.svg"
      alt="el cap writing"
      width={120}
    />
    </Link>
  },
  {
    title: "Nick Beattie",
    description:
      "[Twitter](https://twitter.com/nickbytes), [Github](https://github.com/nickbytes), [Personal site](http://nickbytes.com/), ",
    demo: <Link href="/nick">
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img
      src="/nick.svg"
      alt="el cap writing"
      width={120}
    />
    </Link>
    
  },
  {
    title: "Parteek Saran",
    description:
      "[Twitter](http://twitter.com/parteeksaran), [Personal site](http://www.teek.me/), [Uno](http://www.uno.app/)",
    demo: <Link href="/parteek">
      {/* eslint-disable-next-line @next/next/no-img-element */}
    <img
      src="/parteek.svg"
      alt="el cap writing"
      width={120}
    />
    </Link>
  },
  {
    title: "Zakk Fleischmann",
    description:
      "[Twitter](https://twitter.com/0xzakk), [Personal site](https://zkf.io/blog/)",
      demo: <Link href="/zakk">
      {/* eslint-disable-next-line @next/next/no-img-element */}
    <img
      src="/zakk.svg"
      alt="el cap writing"
      width={120}
    />
    </Link>
  },
];
