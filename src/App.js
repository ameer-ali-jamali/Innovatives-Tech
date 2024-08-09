// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListComponent from "./components/ListComponent";
import UsersList from "./pages/users/UsersList";
import ConditionalComponent from "./components/ConditionalComponent";
import MultiStepForm from "./pages/MultiStepForm/index";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<ListComponent />} />
          <Route path="/users" element={<UsersList />} />
          <Route path="/conditional" element={<ConditionalComponent />} />
          <Route path="/form" element={<MultiStepForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
