import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Main } from "./pages/main/Main";
import { Page404 } from "./pages/page404/Page404";
import { Feature1 } from "./pages/feature/Feature1";
import { Feature2 } from "./pages/feature/Feature2";
import { Feature3 } from "./pages/feature/Feature3";
import { Register } from "./pages/register/Register";
import { Login } from "./pages/login/Login";
import { TermAndCond } from "./pages/TermAndCond/TermAndCond";
import { ContentPage } from "./pages/contentPage/ContentPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Main />} />
        <Route path="/feature1" element={<Feature1 />} />
        <Route path="/feature2" element={<Feature2 />} />
        <Route path="/feature3" element={<Feature3 />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/termandcond" element={<TermAndCond />} />
        <Route path="/contentpage" element={<ContentPage />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;
