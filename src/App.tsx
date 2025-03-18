import "./App.css";
import { IndexPage } from "./components/Pages/Index";
import { WomanPage } from "./components/Pages/Woman";
import { ManPage } from "./components/Pages/Man";
import { DresPage } from "./components/Pages/Dres";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CardsDetails } from "./components/Pages/PageDetails";
import { ElectronicsPage } from "./components/Pages/Electronics";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/woman" element={<WomanPage />}></Route>
          <Route path="/woman/:category" element={<DresPage />}></Route>
          <Route path="/man" element={<ManPage />} />
          <Route path="/card/:title" element={<CardsDetails />}></Route>
          <Route path="/electronics" element={<ElectronicsPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
