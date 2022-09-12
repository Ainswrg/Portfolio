import React from 'react';
import { GiCheckMark } from 'react-icons/gi';

import styles, { services } from '../../style';

export const Services: React.FC = () => {
  return (
    <section id="services">
      <h5>What i Offer</h5>
      <h2>Services</h2>
      {/* ToDo  */}
      <div className={`${styles.container} grid grid-cols-[1fr] gap-12`}>
        <article className={`${services.service}`}>
          <div className={`${services.head}`}>
            <h3 className={`${services.title}`}>Web development</h3>
          </div>

          <ul className="p-8">
            <li className={`${services.item}`}>
              <GiCheckMark className={`${services.icon}`} />
              <p className={`${services.paragraph}`}>
                Lorem ipsum dolor sit amet, consectetur adip
              </p>
            </li>
            <li className={`${services.item}`}>
              <GiCheckMark className={`${services.icon}`} />
              <p className={`${services.paragraph}`}>
                Lorem ipsum dolor sit amet, consectetur adip
              </p>
            </li>
            <li className={`${services.item}`}>
              <GiCheckMark className={`${services.icon}`} />
              <p className={`${services.paragraph}`}>
                Lorem ipsum dolor sit amet, consectetur adip
              </p>
            </li>
            <li className={`${services.item}`}>
              <GiCheckMark className={`${services.icon}`} />
              <p className={`${services.paragraph}`}>
                Lorem ipsum dolor sit amet, consectetur adip
              </p>
            </li>
            <li className={`${services.item}`}>
              <GiCheckMark className={`${services.icon}`} />
              <p className={`${services.paragraph}`}>
                Lorem ipsum dolor sit amet, consectetur adip
              </p>
            </li>
            <li className={`${services.item}`}>
              <GiCheckMark className={`${services.icon}`} />
              <p className={`${services.paragraph}`}>
                Lorem ipsum dolor sit amet, consectetur adip
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};
