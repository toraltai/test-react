import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";

export const RouteComponent = () => {
  const { user } = useContext(AuthContext);
  return(
    <Routes>
      {user ? <>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      </>:
      <>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="*" element={<LoginPage/>}/>
      </>}
    </Routes>
  )
};