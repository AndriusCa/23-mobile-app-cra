import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css";
import { Main } from "./pages/main/Main";
import { Page404 } from "./pages/page404/Page404";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Main />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;
