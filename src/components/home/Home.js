import React from 'react';
import styles from './Home.module.css'

function Home({onExploreClick}){

    return(
        <div className={styles['ripple-background']}>
            <div className={`${styles.circle} ${styles.xxlarge} ${styles.shade1}`}></div>
            <div className={`${styles.circle} ${styles.xlarge} ${styles.shade2}`}></div>
            <div className={`${styles.circle} ${styles.large} ${styles.shade3}`}></div>
            <div className={`${styles.circle} ${styles.mediun} ${styles.shade4}`}></div>
            <div className={`${styles.circle} ${styles.small} ${styles.shade5}`}></div>
            <div className={styles.splashscreen}>
                <div className={styles.titulo}>
                    <p id={styles.subtitulo}>Exposición</p>
                    <p id={styles.maintitle}>Endémico vs Global: Crisis</p>
                    <p id={styles.texto}>Reprehenderit voluptate nulla laboris Lorem magna in do. Tempor proident amet aliquip anim laborum ad culpa eu. Excepteur esse mollit elit nostrud nostrud veniam sint laborum qui id id sunt ullamco.</p>
                    <nav onClick={onExploreClick}>
                        <ul>
                            <li>
                            Iniciar
                            <span></span>
                            </li>
                        </ul>
                        </nav>
                </div>
            </div>
        </div>
    );
}

export default Home;