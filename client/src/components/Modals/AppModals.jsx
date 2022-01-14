import React from "react";
import "./AppModals.css";

import AvaModal from "./AvaModal/AvaModal";
import { ConnectModal } from "./ConnectModal/ConnectModal";
import { NavMenuModal } from "./NavMenuModal/NavMenuModal";


import { AVA_MODAL, CONNECT_MODAL, NAVMENU_MODAL } from "./ModalsList";

import { connect } from "react-redux";
import { toggleModal } from "../../redux/appActions";
import { bindActionCreators } from "redux";

export const AppModals = (props) => {
  const onCloseClicked = () => {
    props.toggleModal(props.activeModal);
  };

  return (
    <div className="appModals">
      {props.activeModal != null && (
        <div className="modal">
          <div className={"modalsBlackout"}></div>
          <div
            className="modalsCloseArea"
            onClick={() => props.toggleModal(props.activeModal)}
          ></div>
          {props.activeModal === AVA_MODAL && (
            <AvaModal onCloseClicked={onCloseClicked} />
          )}
          {props.activeModal === CONNECT_MODAL && (
            <ConnectModal onCloseClicked={onCloseClicked} />
          )}
          {props.activeModal === NAVMENU_MODAL && (
            <NavMenuModal onCloseClicked={onCloseClicked} onOpenModal={(modal)=>props.toggleModal(modal)} />
          )}
        </div>
      )}
    </div>
  );
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      toggleModal,
    },
    dispatch
  );

const mapStateToProps = (state) => {
  return {
    activeModal: state.appReducer.activeModal,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppModals);
