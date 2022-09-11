import React from 'react';
import { BsFillPatchCheckFill } from 'react-icons/bs';

import styles, { experience } from '../../style';

export const Experience: React.FC = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div
        className={`${styles.container} grid grid-cols-[1fr] sm:gap-4 lg:grid-cols-[repeat(2,1fr)] gap-8`}
      >
        <div className={`${experience.skills}`}>
          <h3 className={`${experience.title}`}>Frontend Development</h3>
          <div className={`${experience.content}`}>
            <article className={`${experience.skill}`}>
              <BsFillPatchCheckFill className={`${experience.icon}`} />
              <div>
                <h4>HTML</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className={`${experience.skill}`}>
              <BsFillPatchCheckFill className={`${experience.icon}`} />
              <div>
                <h4>CSS</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className={`${experience.skill}`}>
              <BsFillPatchCheckFill className={`${experience.icon}`} />
              <div>
                <h4>TypeScript</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className={`${experience.skill}`}>
              <BsFillPatchCheckFill className={`${experience.icon}`} />
              <div>
                <h4>JavaScript</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className={`${experience.skill}`}>
              <BsFillPatchCheckFill className={`${experience.icon}`} />
              <div>
                <h4>React</h4>
                <small>Intermediate</small>
              </div>
            </article>
            <article className={`${experience.skill}`}>
              <BsFillPatchCheckFill className={`${experience.icon}`} />
              <div>
                <h4>Redux</h4>
                <small>Intermediate</small>
              </div>
            </article>
            <article className={`${experience.skill}`}>
              <BsFillPatchCheckFill className={`${experience.icon}`} />
              <div>
                <h4>Tailwind</h4>
                <small>Intermediate</small>
              </div>
            </article>
            <article className={`${experience.skill}`}>
              <BsFillPatchCheckFill className={`${experience.icon}`} />
              <div>
                <h4>MaterialUI</h4>
                <small>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        <div className={`${experience.skills}`}>
          <h3 className={`${experience.title}`}>Backend Development</h3>
          <div className={`${experience.content}`}>
            <article className={`${experience.skill}`}>
              <BsFillPatchCheckFill className={`${experience.icon}`} />
              <div>
                <h4>Node JS</h4>
                <small>Intermediate</small>
              </div>
            </article>
            <article className={`${experience.skill}`}>
              <BsFillPatchCheckFill className={`${experience.icon}`} />
              <div>
                <h4>MongoDB</h4>
                <small>Basic</small>
              </div>
            </article>
            <article className={`${experience.skill}`}>
              <BsFillPatchCheckFill className={`${experience.icon}`} />
              <div>
                <h4>Mongoose</h4>
                <small>Basic</small>
              </div>
            </article>
            <article className={`${experience.skill}`}>
              <BsFillPatchCheckFill className={`${experience.icon}`} />
              <div>
                <h4>Express</h4>
                <small>Basic</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};
