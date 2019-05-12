import React from "react";
import "./App.css";
import Posts from "./component/Posts";
import Postform from "./component/Postform";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Postform />
        <hr />
        <Posts />
      </div>
    </Provider>
  );
}

export default App;
