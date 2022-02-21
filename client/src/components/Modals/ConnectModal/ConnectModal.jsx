import React from "react";
import "./ConnectModal.css";

export const ConnectModal = (props) => {
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
        <span>Continue Browsing</span>
      </button>
      <div className="connectTitle">Connect</div>
      <div className="connectList"></div>
      <div className="connectBottom">
        <div className="connectBottomContent">
          <div className="connectFormWrapper">
            <div className="connectFormTitle">You Info</div>
            <form className="connectForm" id="connectForm">
              <input
                className="connectNameInput"
                type="text"
                placeholder="Name"
              />
              <input
                className="connectEmailInput"
                type="email"
                placeholder="Email"
              />
              <input
                className="connectOrgInput"
                type="text"
                placeholder="Institution"
              />
            </form>
          </div>
          <button
            type="submit"
            className="connectFormSubmit"
            form="connectForm"
          >
            <span>Submit</span>
          </button>
        </div>
      </div>
    </div>
  );
};
