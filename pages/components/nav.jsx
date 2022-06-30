import React from 'react';
import styles from '../../styles/nav.module.css';

export default function Home() {
    return (
        <nav>
            <svg className={styles.burger} focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" /></svg>
        </nav>
    )
}