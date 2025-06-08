import React, { useEffect } from 'react';
import styles from './Tawk.module.css';

const Tawk = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.async = true;
        script.src = 'https://embed.tawk.to/5c59ccd27cf662208c942f18/default';
        script.charset = 'UTF-8';
        script.setAttribute('crossorigin', '*');

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className={styles['tawk-custom-container']}></div>
    );
};

export default Tawk;
