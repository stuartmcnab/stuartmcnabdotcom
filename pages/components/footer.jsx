import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/Footer.module.css';
import linkedin from '../../styles/assets/LinkedIn.png';
import github from '../../styles/assets/GitHub.png';

export default function Footer() {
    return (
        <section className={styles.container}>
            <footer className={styles.footer}>
                <Link href='/'>{`© ${new Date().getFullYear()  } stuartmcnab.com`}</Link>
            </footer>
        </section>
    )
}