import React from 'react';
import { GiCheckMark } from 'react-icons/gi';

import styles, { services } from '../../style';

export const Services: React.FC = () => {
  return (
    <section id="services">
      <h5>What i Offer</h5>
      <h2>Services</h2>

      <div className={`${styles.container} grid grid-cols-[1fr] gap-12`}>
        <article className={`${services.service}`}>
          <div className={`${services.head}`}>
            <h3 className={`${services.title}`}>Web development</h3>
          </div>

          <ul className="p-8">
            <li className={`${services.item}`}>
              <GiCheckMark className={`${services.icon}`} />
              <p className={`${services.paragraph}`}>
                Work according to common development methodologies
              </p>
            </li>
            <li className={`${services.item}`}>
              <GiCheckMark className={`${services.icon}`} />
              <p className={`${services.paragraph}`}>
                Easily and quickly extract the necessary information from
                colleagues and the Internet
              </p>
            </li>
            <li className={`${services.item}`}>
              <GiCheckMark className={`${services.icon}`} />
              <p className={`${services.paragraph}`}>
                Work considering the basic principles of good code such as
                SOLID, KISS, DRY, YAGNI
              </p>
            </li>
            <li className={`${services.item}`}>
              <GiCheckMark className={`${services.icon}`} />
              <p className={`${services.paragraph}`}>
                Creating web pages based on a ready-made sample and design
              </p>
            </li>
            <li className={`${services.item}`}>
              <GiCheckMark className={`${services.icon}`} />
              <p className={`${services.paragraph}`}>
                Write elegant and supported code
              </p>
            </li>
            <li className={`${services.item}`}>
              <GiCheckMark className={`${services.icon}`} />
              <p className={`${services.paragraph}`}>
                Write a productive, responsive and convenient service
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};
