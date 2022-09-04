import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Layout from './components/layout';
import HeroSection from './components/heroSection';
import HireMe from './components/hireme';
// import Portfolio from './components/portfolio';
import Profile from './components/profile'

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>Stuart McNab - Frontend Web Developer</title>
          <meta name="description" content="The official portfolio website for Stuart McNab, a front end web developer working with React.js, JavaScript, TypeScript, AWS and more to bring the best experience to users of web apps" />
          <link rel="icon" href="/favicon.ico" />
          <meta name="viewport" content="initial-scale=1, width=device-width" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
        </Head>
        <HeroSection />
        <Profile />
        {/* <Portfolio /> */}
        <HireMe />
      </div>
    </Layout>
  );
}
