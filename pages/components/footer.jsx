import React from 'react';
import Link from 'next/link';
import styles from '../../styles/Footer.module.css';

export default function Footer() {
    return (
        <section className={styles.container}>
            <footer className={styles.footer}>
                <Link href='/'>{`© ${new Date().getFullYear()  } stuartmcnab.com`}</Link>
            </footer>
        </section>
    )
}