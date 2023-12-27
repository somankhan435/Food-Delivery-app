import React, { Fragment   } from "react";
import ReactDOM from 'react-dom'
import classes from "./Modal.module.css";
const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.hidehandler} />;
};
const Modal = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const ModalOverlay = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop hidehandler={props.hidecart}/>, document.getElementById("Overlays"))}
      {ReactDOM.createPortal(
        <Modal>{props.children}</Modal>,
        document.getElementById("Overlays")
      )}
    </Fragment>
  );
};
export default ModalOverlay;
