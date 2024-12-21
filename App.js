import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import About from './About';
import AddDetails from './AddDetails';
import Digital from './Digital';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/AddDetails" element={<AddDetails />} />
          <Route path="/Digital-Product" element={<Digital />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
