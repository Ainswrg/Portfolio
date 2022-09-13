import React from 'react';
import styles, { portfolio } from '../../style';
import netflix from '../../assets/netflix.png';

export const Portfolio: React.FC = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div
        className={`${styles.container} grid grid-cols-1 gap-10 sm:grid-cols-[repeat(2,1fr)] sm:gap-4 lg:grid-cols-[repeat(3,1fr)] lg:gap-5`}
      >
        <article className={`${portfolio.item}`}>
          <div className={`${portfolio.img}`}>
            <img src={netflix} alt="" />
          </div>
          <h3 className={`${portfolio.title}`}>
            This is a portfolio item title
          </h3>
          <div className={`${portfolio.links}`}>
            <a href="https://github.com" className={`${styles.button}`}>
              Github
            </a>
            <a
              href="https://github.com"
              className={`${styles.button} ${styles.buttonPrimary}`}
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};
