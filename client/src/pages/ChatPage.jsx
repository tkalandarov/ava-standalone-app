import React from "react";
import "../css/chatPage.css";

import Header from "../components/Header/Header";

import { connect } from "react-redux";
import { toggleModal } from "../redux/appActions";
import { bindActionCreators } from "redux";

import {CHAT_MODAL} from "../components/Modals/ModalsList";

export const ChatPage = (props) => {
  return (
    <div className="chatPage">
      <Header />
      <div className="page-content">
        <button onClick={() => props.toggleModal(CHAT_MODAL)}>open ava</button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      toggleModal
    },
    dispatch
  );

const mapStateToProps = (state) => {
  return {
    selectedStudent: state.demoReducer.selectedStudent,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatPage);
