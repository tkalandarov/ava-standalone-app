import React from "react";
import Header from "../components/Header/Header";
import { CHAT_MODAL } from "../components/Modals/ModalsList";

import { Lisa, Tim, Khan } from "../components/Students/StudentsData";

import { connect } from "react-redux";
import { selectStudent } from "../redux/demoActions";
import { toggleModal } from "../redux/appActions";
import { bindActionCreators } from "redux";

import "../css/studentSelection.css";

export const StudentSelection = (props) => {
  const onStudentSelected = (student) => {
    props.selectStudent(student);
    props.toggleModal(CHAT_MODAL);
  };

  return (
    <div className="studentSelectionPage">
      <Header />
      <div className="page-content">
        <div className="dashboardPage__title">
          <a href="/demo">Demo </a>|<span> Chat with AVA</span>
        </div>

        <div className="students">
          <div className="card" onClick={() => onStudentSelected(Lisa.name)}>
            <span className="card__title">{Lisa.name}</span>
            <img className="students__img" src={Lisa.imgSrc} alt="Lisa" />
            <p className="card__text">{Lisa.backgroundDescription}</p>
          </div>
          <div className="card" onClick={() => onStudentSelected(Tim.name)}>
            <span className="card__title">{Tim.name}</span>
            <img className="students__img" src={Tim.imgSrc} alt="Tim" />
            <p className="card__text">{Tim.backgroundDescription}</p>
          </div>
          <div className="card" onClick={() => onStudentSelected(Khan.name)}>
            <span className="card__title">{Khan.name}</span>
            <img className="students__img" src={Khan.imgSrc} alt="Khan" />
            <p className="card__text">{Khan.backgroundDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      selectStudent,
      toggleModal,
    },
    dispatch
  );

const mapStateToProps = (state) => {
  return {
    selectedStudent: state.demoReducer.selectedStudent,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentSelection);
