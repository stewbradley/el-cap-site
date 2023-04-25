import Head from 'next/head';
import PostLayout from '../components/layout/posts-index';
import Link from 'next/link';
import Date from '../components/date';
import { getSortedPostsData } from '../lib/posts';
import Balancer from 'react-wrap-balancer';
import Card from "@/components/home/card";
import Layout from "@/components/layout";
import { motion } from "framer-motion";
import { DEPLOY_URL, FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";
import { Github, Twitter } from "@/components/shared/icons";
import WebVitals from "@/components/home/web-vitals";
import ComponentGrid from "@/components/home/component-grid";
import Image from "next/image";
import localFont from "@next/font/local";

const supply = localFont({
  src: "../styles/Supply-Regular.otf",
  variable: "--font-supply",
});


export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  console.log('allPostsData is ', allPostsData);
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Writing({ allPostsData }) {
  console.log('allPostsData is ', allPostsData);
  return (
    <PostLayout>
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
          className="text-black bg-clip-text text-left text-4xl font-bold tracking-[-0.02em] text-transparent drop-shadow-sm "
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <Balancer className="font-supply text-slate-800"> el cap writing</Balancer>
        </motion.h1>
        <motion.p
          className="mt-6 text-center text-black md:text-xl"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
         <Balancer>
            <section>
                <ul className="text-left font-supply">
                    {allPostsData.map(({ id, date, title }) => (
                        <li className="text-black" key={id}>
                            <Link href={`/posts_id/${id}`}>{title}</Link>
                            <br />
                            <small className="font-light font-sans">
                                <Date dateString={date} />
                            </small>
                            <hr className="h-px my-5 bg-gray-800 border-0 dark:bg-gray-700"></hr>
                        </li>
                    ))}
                </ul>
        </section>
      </Balancer> 
        </motion.p>
        
      </motion.div>
        
    </PostLayout>
  );
}