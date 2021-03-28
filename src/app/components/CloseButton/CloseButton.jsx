import React from "react";
import { StyledCloseButton } from "./CloseButton.styled";


function CloseButton(props) {
  const { ariaLabel, ...rest } = props;

  return (
    <React.Fragment>
      <StyledCloseButton aria-label={ariaLabel} {...rest} >✕</StyledCloseButton>
    </React.Fragment>
  );
}


export default CloseButton;