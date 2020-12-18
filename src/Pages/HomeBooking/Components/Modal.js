import React, { useState } from "react";

const Modal = ({ toggle, content }) => {
  const [isShown, setIsShown] = useState(false);
  const hide = () => setIsShown(false);
  const show = () => setIsShown(true);

  return (
    <>
      {toggle(show, isShown)}
      {isShown && content(hide)}
    </>
  );
};

export default Modal;
