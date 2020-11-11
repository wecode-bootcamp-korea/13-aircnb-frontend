import ReactDOM from "react-dom";

const ModalPortal = ({ children }) => {
  const el = document.getElementById("modalDiv");
  return ReactDOM.createPortal(children, el);
};
export default ModalPortal;
