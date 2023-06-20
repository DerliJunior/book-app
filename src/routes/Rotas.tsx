import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookProvider from "../context/BookProvider";
import Home from "../pages/Home";

const Rotas = () => {
  return (
    <BrowserRouter>
      <BookProvider>
        <Routes>
          <Route path="/" index element={<Home />} />
        </Routes>
      </BookProvider>
    </BrowserRouter>
  );
};

export default Rotas;
