import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext";
import "../styles/App.css";
import Layout from "./Layout";
import Home from "./pages/Home";
import Login from "../components/pages/Singin";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import Error from "../components/Error";
import Signup from "../components/pages/Singup";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
            <Route path="/signup" element={<PublicRoute><Signup /></PublicRoute>} />
            <Route path="/login" element={<PublicRoute><Login /> </PublicRoute>} />
            <Route path="/quiz/:id" element={<PrivateRoute><Quiz /></PrivateRoute>} />
            <Route path="/quiz" element={<PrivateRoute><Quiz /></PrivateRoute>} />
            <Route path="/result/:id" element={<PrivateRoute><Result /></PrivateRoute>} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;