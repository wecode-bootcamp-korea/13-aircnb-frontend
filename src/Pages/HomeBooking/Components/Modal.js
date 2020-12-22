import React, { useState } from "react";

const Modal = ({ toggle, content }) => {
  const [isShown, setIsShown] = useState(false);
  const hideModal = () => setIsShown(false);
  const showModal = () => setIsShown(true);

  return (
    <>
      {toggle(showModal, isShown)}
      {isShown && content(hideModal)}
    </>
  );
};

export default Modal;
