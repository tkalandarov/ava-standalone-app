import React, { useEffect } from "react";
import Header from "../components/Header/Header";
import { CHAT_MODAL } from "../components/Modals/ModalsList";

import { Lisa, Tim, Khan } from "../components/Students/StudentsData";

import { connect } from "react-redux";
import { selectStudent } from "../redux/demoActions";
import { toggleModal } from "../redux/appActions";
import { bindActionCreators } from "redux";

import axios from "axios";

import "../css/studentSelection.css";

export const StudentSelection = (props) => {
  useEffect(() => {
    document.title = "Chat with AVA - Edgy Knowledge Solutions";
  }, []);

  const onStudentSelected = (student) => {
    const students = [Lisa, Tim, Khan];
    const studentObj = students.find(x => x.name === student);
    const postURL = process.env.NODE_ENV === "production" ? "/student" : "http://localhost:5000/student"; // Workaround because the proxy in package.json is not working (others have had this problem too)
    axios.post(postURL, {
      id: studentObj.id
    })
    .then(res => {
      // console.log(res);
    });
    props.selectStudent(student);
    props.toggleModal(CHAT_MODAL);
  };

  return (
    <div className="studentSelectionPage">
      <Header />
      <div className="page-content">
        <div className="dashboardPage__title">
          <a href="/ava/demo">Demo </a>|<span> Chat with AVA</span>
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
