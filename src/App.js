import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthContext, { AuthProvider } from './context/AuthContext';

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Header from "./components/Header";
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return(
    <div className="App">
      <Router>
        <AuthContext>
          <Header/>
          <Routes>
            <Route element={HomePage} path='/home' exact/>
            <Route element={LoginPage} path='/login' exact/>
            <Route element={HomePage} path='*' exact/>
          </Routes>
        </AuthContext>
      </Router>
    </div>
  );
}

export default App;