import React, { Fragment, useState } from 'react'
import ReactDOM from "react-dom";
import { Alert } from './Alert.style';


const AlertOverlay = (props) => {

  return (
    <Alert>
      {props.children}
    </Alert>
  )
}

const portalElement = document.getElementById("alert");

function AlertModal(props) {

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <AlertOverlay onClick={props.onClose}>{props.children}</AlertOverlay>,
        portalElement
      )}
    </Fragment>
  )
}

export default AlertModal
