/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { footer } from '../../style';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-primary py-12 text-center text-sm mt-28">
      <a
        href="#"
        className={`${footer.link} text-[2rem] mb-8 inline-block font-medium`}
      >
        Ainswrg
      </a>
      <ul className={`${footer.links}`}>
        <li>
          <a href="#" className={`${footer.link}`}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" className={`${footer.link}`}>
            About
          </a>
        </li>
        <li>
          <a href="#experience" className={`${footer.link}`}>
            Experience
          </a>
        </li>
        <li>
          <a href="#services" className={`${footer.link}`}>
            Services
          </a>
        </li>
        <li>
          <a href="#portfolio" className={`${footer.link}`}>
            Portfolio
          </a>
        </li>
        <li>
          <a href="#contacts" className={`${footer.link}`}>
            Contacts
          </a>
        </li>
      </ul>

      <div className="mb-16 text-bg">
        <small>&copy; All Rights Reserved</small>
      </div>
    </footer>
  );
};
