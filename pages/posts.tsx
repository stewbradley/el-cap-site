import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Balancer from 'react-wrap-balancer';
import Image from 'next/image';
import localFont from '@next/font/local';
import PostLayout from '../components/layout/posts-index';
import Date from '../components/date';
import { getSortedPostsData } from '../lib/posts';
import ComponentGrid from '@/components/home/component-grid';
import Card from '@/components/home/card';
import WebVitals from '@/components/home/web-vitals';
import { DEPLOY_URL, FADE_DOWN_ANIMATION_VARIANTS } from '@/lib/constants';
import { Github, Twitter } from '@/components/shared/icons';

const supply = localFont({
  src: '../styles/Supply-Regular.otf',
  variable: '--font-supply',
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

function PostList({ posts }) {
  return (
    <ul>
      {posts.map(({ id, date, title }) => (
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
  );
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
          className="text-black bg-clip-text text-left text-4xl font-bold tracking-[-0.02em] text-transparent"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <Balancer className="font-supply text-slate-800">el cap writing</Balancer>
        </motion.h1>
        <motion.p className="mt-6 text-left text-black md:text-xl" variants={FADE_DOWN_ANIMATION_VARIANTS}>
          <Balancer>
            <section key="post-list">
              <PostList posts={allPostsData} />
            </section>
          </Balancer>
        </motion.p>
      </motion.div>
    </PostLayout>
  );
}