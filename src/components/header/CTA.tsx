/* eslint-disable react/no-unknown-property */
import React from 'react';
import CV from '../../assets/CV_Jaslan_Daulenov(FE).pdf';
import styles from '../../style';

export const CTA: React.FC = () => {
  return (
    <div className="flex gap-5 mt-10 justify-center">
      <a href={CV} download className={`${styles.button}`}>
        Download CV
      </a>
      <a
        href="#contacts"
        className={`${styles.button} ${styles.buttonPrimary}`}
      >
        Let&apos;s Talk
      </a>
    </div>
  );
};
