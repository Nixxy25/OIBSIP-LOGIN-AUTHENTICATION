import LoginPage from "./components/LoginPage"
import SignupPage from "./SignupPage"

import { Route, Routes } from "react-router-dom"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="signup" element={<SignupPage />} />
    </Routes>
  )
}

export default App