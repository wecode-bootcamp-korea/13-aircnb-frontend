import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import "bootstrap/dist/css/bootstrap.min.css";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { persistStore, persistReducer } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import storage from "redux-persist/lib/storage";
import rootReducer from "./Redux/Reducers/Index";
import logger from "redux-logger";

// logger
const middleware = [logger];

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["signReducer"],
};

const enhanceReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(enhanceReducer, applyMiddleware(...middleware));
const persistor = persistStore(store);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Routes />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
