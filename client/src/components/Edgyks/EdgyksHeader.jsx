import React from "react";

import { CONNECT_MODAL, EDGYKS_MODAL } from "../Modals/ModalsList";
import { connect } from "react-redux";
import { toggleModal } from "../../redux/appActions";
import { bindActionCreators } from "redux";

export const EdgyksHeader = (props) => {
  return (
    <header className="page-header">
      <div className="page-header__container">
        <a href="/">
          <div className="header__logo"> </div>
        </a>
        <ul className="menu">
          <li className="menu__item ">
            <a className="header-menu__link" href="#about">
              About
            </a>
          </li>
          <li className="menu__item menu__item_hide-lg ">
            <a className="header-menu__link" href="#solutions">
              Solutions
            </a>
          </li>
          <li className="menu__item ">
            <a href="#contact" className="header__button">
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
            </a>
          </li>
        </ul>
        <button
          className="header__icon mobile-menu-trigger"
          onClick={() => props.toggleModal(EDGYKS_MODAL)}
        >
          Mobile menu
          <span className="header__line"></span>
          <span className="header__line"></span>
          <span className="header__line"></span>
        </button>
      </div>
    </header>
  );
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      toggleModal,
    },
    dispatch
  );

export default connect(null, mapDispatchToProps)(EdgyksHeader);
