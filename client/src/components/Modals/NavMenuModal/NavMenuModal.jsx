import React from "react";
import "./NavMenuModal.css";

import { CONNECT_MODAL } from "../ModalsList";

export const NavMenuModal = (props) => {
  return (
    <div className="connectWrapper">
      <button
        type="button"
        className="continueBrowsing"
        onClick={props.onCloseClicked}
      >
        <div className="icon continueBrowsingArrow icon__animated">
          <svg className="arrow4" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.2 16L16.7 1.5c.4-.4.4-.9 0-1.3s-.9-.4-1.3 0L.3 15.4c-.4.4-.4.9 0 1.3l15.2 15.1c.2.2.4.3.6.3.2 0 .5-.1.6-.3.4-.4.4-.9 0-1.3L2.2 16z"></path>
          </svg>
        </div>
        <span>Return</span>
      </button>

      <div className="mobile-menu mobile-menu--active">
        <ul className="mobile-nav ">
          <li className="mobile-nav__item">
            <a href="#about" className="mobile-nav__link" onClick={props.onCloseClicked}>
              About
            </a>
          </li>
          <li className="mobile-nav__item">
            <a href="#features" className="mobile-nav__link" onClick={props.onCloseClicked}>
              Features
            </a>
          </li>
          <li className="mobile-nav__item">
            <a href="#demo" className="mobile-nav__link" onClick={props.onCloseClicked}>
              Demo
            </a>
          </li>
        </ul>
        <button
          className="header__button"
          onClick={() => props.onOpenModal(CONNECT_MODAL)}
        >
          <span className="header__label">Connect</span>
          <svg
            className="header__arrow"
            xmlns="http://www.w3.org/2000/svg"
            width="11"
            height="10"
          >
            <path
              d="M2.24453637.04051454l-.00546268 1.12293125 6.54261813.03124938L.84566837 9.13071862l.79394536.79394537 7.93602345-7.93602346.03124939 6.54261814 1.12293117-.00546276-.03772853-7.88876765c-.00149878-.3081526-.2505944-.55724822-.55873428-.55873428L2.24453637.04051454z"
              fill="currentColor"
              fillRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};
