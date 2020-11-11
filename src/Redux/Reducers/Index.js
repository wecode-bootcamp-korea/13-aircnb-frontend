import { combineReducers } from "redux";
import likeReducer from "./LikeReducer";
import signReducer from "./SignReducer";
import modalReducer from "./ModalReducer";
import bookReducer from "./BookReducer";

const rootReducer = combineReducers({
  likeReducer: likeReducer,
  signReducer,
  modalReducer,
  bookReducer,
});

export default rootReducer;
