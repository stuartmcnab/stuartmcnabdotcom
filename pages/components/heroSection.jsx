import React from 'react';
import LinkBar from './linkBar';
import styles from '../../styles/Hero.module.css';

export default function HeroSection() {
    return (
        <section className={styles.hero}>
            <div className={styles.heroSection}>
                <h1 className={styles.title}>
                    Stuart McNab
                </h1>
                <h3 className={styles.break}>/</h3>
                <h3 className={styles.subtitle}>Software Engineer</h3>
            </div>
            <LinkBar />
        </section>
    )
}