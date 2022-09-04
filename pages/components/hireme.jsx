import React from 'react';
import styles from '../../styles/Contract.module.css';

export default function HireMe () {
    return(
        <section className={styles.container} id="contracting">
            <div className={styles.inner}>
                <a type="button" className={styles.button} href="mailto:stuartmcnab@protonmail.com">Contact</a>
            </div>
        </section>
    )
}