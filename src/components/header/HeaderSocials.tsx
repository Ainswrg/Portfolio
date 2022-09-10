import React from 'react';
import { BsLinkedin, BsGithub, BsTelegram } from 'react-icons/bs';
import { header } from '../../style';

export const HeaderSocials: React.FC = () => {
  return (
    <div className={`${header.social}`}>
      <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
        <BsLinkedin />
      </a>
      <a href="https://github.com/ainswrg" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
      <a href="https://t.me/jas1anD" target="_blank" rel="noreferrer">
        <BsTelegram />
      </a>
    </div>
  );
};
