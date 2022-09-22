import React from 'react';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';

import styles, { about } from '../../style';
import IMG from '../../assets/screen-1-2.jpg';

export const About: React.FC = () => {
  const handleClick = () => {
    window.location.href = '#contacts';
  };

  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div
        className={`${styles.container} grid grid-cols-1 gap-0 lg:gap-[15%] lg:grid-cols-[35%_50%]`}
      >
        <div className="w-9/12 m-[2rem_auto_4rem] aspect-square rounded-3xl bg-gradient-me grid place-items-center lg:w-full sm:w-[65%] sm:m-[0_auto_3rem]">
          <div className="aspect-square rounded-3xl overflow-hidden rotate-12 hover:rotate-0 duration-300">
            <img className="rounded-3xl overflow-hidden" src={IMG} alt="img" />
          </div>
        </div>

        <div className="text-center lg:text-left">
          <div className="grid grid-cols-[repeat(2,1fr)] gap-4 lg:gap-5">
            <article className={`${about.card}`}>
              <FaAward className={`${about.icon}`} />
              <h5 className={`${about.title}`}>Experience</h5>
              <small className={`${about.small}`}>1+ Years Working</small>
            </article>

            <article className={`${about.card}`}>
              <VscFolderLibrary className={`${about.icon}`} />
              <h5 className={`${about.title}`}>Projects</h5>
              <small className={`${about.small}`}>
                {' '}
                10+ Completed Projects
              </small>
            </article>
          </div>
          <p className="m-[1.5rem_0] text-light sm:m-[1rem_0_1.5rem] lg:m-[2rem_0_2.6rem]">
            Prolific, frontend web developer. Looking to leverage my skills to
            produce seamless and profitable UI. Passionate about building world
            class web applications. Seeking to build my knowledge and skills in
            UI and Front End development as Junior Front End developer.
          </p>
          <button
            type="button"
            className={`${styles.button} ${styles.buttonPrimary}`}
            onClick={() => handleClick()}
          >
            Let&apos;s Talk
          </button>
        </div>
      </div>
    </section>
  );
};
