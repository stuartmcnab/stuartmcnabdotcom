import React from 'react';
import Link from 'next/link';
import styles from '../../styles/Nav.module.css';

export default function Nav() {
    return (
        <section className={styles.container}>
            <nav className={styles.nav}>
                <span className={styles.logo}>
                    <Link href="/">&#60;&#47;&#62;</Link>
                </span>
                <a type="button" className={styles.button} href="mailto:stuartmcnab@protonmail.com">Contact</a>
            </nav>
        </section>
    )
}