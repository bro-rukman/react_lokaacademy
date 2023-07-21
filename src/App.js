import React from "react";
import { HashRouter } from "react-router-dom";
import { Router } from "./routes/Router";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistedStore } from "./state/index";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistedStore}>
        <HashRouter>
          <Router />
        </HashRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
