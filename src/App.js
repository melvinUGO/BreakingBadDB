import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import SingleCharacter from "./pages/SingleCharacter";

function App() {
  return (
    <div className=" w-full h-[100vh] font-sans bg-[#07070777] overflow-x-auto max-w-[2000px]">
      <Header />
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/character-info/:id" element={<SingleCharacter />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
