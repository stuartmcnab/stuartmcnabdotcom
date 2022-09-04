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
                <span className={styles.logos}>
                    <a href='https://uk.linkedin.com/in/stuart-mcnab' target='_blank' rel='noreferrer'>
                        <Image 
                            src={linkedin}
                            alt='LinkedIn Logo' 
                            height={32} 
                            width={36}
                            />
                    </a>
                    <a href='https://github.com/stuartmcnab' target='_blank' rel='noreferrer'>
                        <Image 
                            src={github} 
                            alt='GitHub Logo' 
                            height={32} 
                            width={32}
                            />
                    </a>
                </span>
            </footer>
        </section>
    )
}