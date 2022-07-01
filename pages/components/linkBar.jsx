import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/LinkBar.module.css';
import linkedin from '../../styles/assets/LinkedIn.png';
import github from '../../styles/assets/GitHub.png';

export default function LinkBar() {
    return (
        <section className={styles.container}>
            <div className={styles.linkBar}>
                <span className={styles.links}>
                    <Link href="/#portfolio">Portfolio</Link>
                     <Link href="/#contracting">Contracting</Link>
                </span>
                <span className={styles.logos}>
                    <a href="https://uk.linkedin.com/in/stuart-mcnab" target="_blank" rel="noreferrer">
                        <Image 
                            src={linkedin}
                            alt="LinkedIn Logo" 
                            height={32} 
                            width={36}
                            />
                    </a>
                    <a href="https://github.com/stuartmcnab" target="_blank" rel="noreferrer">
                        <Image 
                            src={github} 
                            alt="GitHub Logo" 
                            height={32} 
                            width={32}
                            />
                    </a>
                </span>
            </div>
        </section>
    )
}