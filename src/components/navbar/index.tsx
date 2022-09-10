/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { GiBookshelf } from 'react-icons/gi';
import { RiServiceLine } from 'react-icons/ri';
import { TiMessages } from 'react-icons/ti';

import { navbar } from '../../style';

export const Navbar: React.FC = () => {
  const [active, setActive] = React.useState('#');

  const onClickHandler: (e: any) => void = (e) => {
    setActive(e);
  };

  return (
    <nav className={`${navbar.root}`}>
      <a
        className={`${navbar.link} ${active === '#' ? navbar.active : ''}`}
        href="#"
        onClick={() => onClickHandler('#')}
      >
        <AiOutlineHome />
      </a>
      <a
        className={`${navbar.link} ${active === '#about' ? navbar.active : ''}`}
        href="#about"
        onClick={() => onClickHandler('#about')}
      >
        <AiOutlineUser />
      </a>
      <a
        className={`${navbar.link} ${
          active === '#experience' ? navbar.active : ''
        }`}
        href="#experience"
        onClick={() => onClickHandler('#experience')}
      >
        <GiBookshelf />
      </a>
      <a
        className={`${navbar.link} ${
          active === '#services' ? navbar.active : ''
        }`}
        href="#services"
        onClick={() => onClickHandler('#services')}
      >
        <RiServiceLine />
      </a>
      <a
        className={`${navbar.link} ${
          active === '#contacts' ? navbar.active : ''
        }`}
        href="#contacts"
        onClick={() => onClickHandler('#contacts')}
      >
        <TiMessages />
      </a>
    </nav>
  );
};
