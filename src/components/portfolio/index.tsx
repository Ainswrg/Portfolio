import React from 'react';
import styles, { portfolio } from '../../style';

type Data = {
  id: number;
  src: string;
  title: string;
  github: string;
  demo: string;
};
const dataBase: Data[] = [
  {
    id: 1,
    src: './image/netflix.png',
    title: 'Netflix',
    github: 'https://github.com/Ainswrg/Netflix-2.0',
    demo: 'https://netflix-clone-a2ff8.web.app/browse',
  },
  {
    id: 2,
    src: './image/blog.png',
    title: 'Blog',
    github: 'https://github.com/Ainswrg/Blog-Front-End',
    demo: 'https://mern-front-kappa.vercel.app',
  },
  {
    id: 3,
    src: './image/keyboard.png',
    title: 'Virtual-Keyboard',
    github: 'https://github.com/Ainswrg/VirtualKeyboard',
    demo: 'https://ainswrg.github.io/VirtualKeyboard/',
  },
  {
    id: 4,
    src: './image/shelter.png',
    title: 'Shelter',
    github: 'https://github.com/Ainswrg/Shelter-Site',
    demo: 'https://rolling-scopes-school.github.io/ainswrg-JSFE2022Q1/shelter/',
  },
  {
    id: 5,
    src: './image/onlineStore.png',
    title: 'Online-Store',
    github: 'https://github.com/Ainswrg/Online-Store',
    demo: 'https://rolling-scopes-school.github.io/ainswrg-JSFE2022Q1/online-store/',
  },
  {
    id: 6,
    src: './image/asyncRace.png',
    title: 'Async-race',
    github: 'https://github.com/Ainswrg/Async-race',
    demo: 'https://ainswrg.github.io/Async-race/#garage',
  },
];

export const Portfolio: React.FC = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div
        className={`${styles.container} grid grid-cols-1 gap-10 sm:grid-cols-[repeat(2,1fr)] sm:gap-4 lg:grid-cols-[repeat(3,1fr)] lg:gap-5`}
      >
        {dataBase.map((data) => (
          <article key={data.id} className={`${portfolio.item}`}>
            <div className={`${portfolio.img}`}>
              <img src={data.src} alt="" />
            </div>
            <h3 className={`${portfolio.title}`}>{data.title}</h3>
            <div className={`${portfolio.links}`}>
              <a
                href={data.github}
                className={`${styles.button}`}
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
              <a
                href={data.demo}
                className={`${styles.button} ${styles.buttonPrimary}`}
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
