import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/pages/login"

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

