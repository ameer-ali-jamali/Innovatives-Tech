import React from "react";
import { Routes, Route } from "react-router-dom";
import ListComponent from "../components/ListComponent";
import ConditionalComponent from "../components/ConditionalComponent";
import UsersList from "../pages/users/UsersList";
import MultiStepForm from "../pages/MultiStepForm/index";

function BasicRoutes() {
  return (
    <Routes>
      <Route path="/" exact element={ListComponent} />
      <Route path="/users" element={UsersList} />
      <Route path="/conditional" element={ConditionalComponent} />
      <Route path="/form" element={MultiStepForm} />
    </Routes>
  );
}

export default BasicRoutes;
