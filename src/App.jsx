import LoginPage from "./components/LoginPage"
import SignupPage from "./components/SignupPage"
import { ToastContainer } from "react-toastify"
import Profile from "./components/profile"
import { Route, Routes } from "react-router-dom"
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignupPage />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
      <ToastContainer />
    </div>
  )
}

export default App