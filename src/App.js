import React, { useState } from "react";
// import Todo from "./page/todo";
// import Todos from "./components/todos";
import Todos from "./page/todos";
import { Provider } from "react-redux";
import store from "./store/store";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (  
    <Provider store={store}>
      <div className={darkMode ? "dark-mode" : "light-mode"}>
        <div className='container mt-50 todo '>
          <div className='row'>
            <div className='col'>
              <h1 className='header_todo'>todo app</h1>
              <Todos />

              {/* darkmode */}
              <div className='container'>
                <span style={{ color: darkMode ? "grey" : "yellow" }}>☀︎</span>
                <div className='switch-checkbox'>
                  <label className='switch'>
                    <input
                      type='checkbox'
                      onChange={() => setDarkMode(!darkMode)}
                    />
                    <span className='slider round'> </span>
                  </label>
                </div>
                <span style={{ color: darkMode ? "#c96dfd" : "grey" }}>☽</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Provider>
  );
};
export default App;
