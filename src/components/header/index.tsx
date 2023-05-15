import React from 'react';

import styles, { header } from '../../style';
import { CTA } from './CTA';
import { HeaderSocials } from './HeaderSocials';
import Cube from './Cube';

export const Header: React.FC = () => {
  return (
    <header className={`${header.root}`}>
      <div className={`${styles.container} h-[55rem] text-center relative`}>
        <h5>Hello I&apos; m</h5>
        <h1>Jaslan Dev</h1>
        <h5 className="color-light">Front End Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="absolute left-[calc(50%-11rem)] mt-16 t-full  pt-20 pr-6 pb-6 pl-6">
          <Cube />
        </div>

        <a
          href="#contacts"
          className="absolute -right-9 bottom-20 rotate-90 font-light text-sm hidden sm:flex"
        >
          Scroll Down
        </a>
      </div>
    </header>
  );
};
