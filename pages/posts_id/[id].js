import PostLayout from '../../components/layout/posts-index';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import Date from '../../components/date';
import Blog from "@/components/home/blog";
import Balancer from "react-wrap-balancer";
import { motion } from "framer-motion";
import { DEPLOY_URL, FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";
import ComponentGrid from "@/components/home/component-grid";
import Image from "next/image";
import Link from 'next/link'

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}



export default function Post({ postData }) {
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
          className="bg-gradient-to-br from-black to-stone-500 bg-clip-text text-left font-display text-3xl font-bold  text-transparent drop-shadow-sm md:text-5xl md:leading-[5rem]"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          
            <h2 className="text-black text-4xl">{postData.title}</h2>
          
        </motion.h1>
        <motion.p
          className="mt-5 text-left p-1 text-gray-700 md:text-xl"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <Balancer>
            <div>
              <Date dateString={postData.date} />
            </div>
            <small className="text-gray-500 post-content">  
              <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </small>
          </Balancer>
        </motion.p> 
      </motion.div>
      {/* here we are animating with Tailwind instead of Framer Motion because Framer Motion messes up the z-index for child components */}
    </PostLayout>
  );
}