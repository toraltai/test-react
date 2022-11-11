import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthContext, { AuthProvider } from "./context/AuthContext";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Header from "./components/Header";
import { useContext } from "react";
import { PrivateRoutes, PublicRoutes, RouteComponent } from "./utils/Route";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Header />
          <RouteComponent/>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;