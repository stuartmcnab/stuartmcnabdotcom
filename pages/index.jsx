import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Layout from './components/layout';
import HeroSection from './components/heroSection';
import Contract from './components/contract';

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>Stuart McNab - Frontend Web Developer</title>
          <meta name='description' content='The official portfolio website for Stuart McNab, a front end web developer working with React.js, JavaScript, TypeScript, AWS and more to bring the best experience to users of web apps' />
          <link rel='icon' href='/favicon.ico' />
          <meta name='viewport' content='initial-scale=1, width=device-width' />
        </Head>
        <HeroSection />

      </div>
    </Layout>
  );
}
