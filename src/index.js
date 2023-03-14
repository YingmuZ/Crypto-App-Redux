import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App';
import { store, storeNews } from "./app/store";


ReactDOM.render(
  <React.StrictMode>
  <Router>
    <Provider store={store} storeNews={storeNews}>
      <App />
    </Provider>
  </Router>
  </React.StrictMode>,
  document.getElementById("root")
)




// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );