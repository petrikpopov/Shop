import './App.css';
import IndexPage from './components/Pages';
import WomanPage from './components/Pages/woman';
import ManPage from './components/Pages/man';
import DresPage from './components/Pages/dres';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardsDetail from './components/Cards/cardsDetails';
import ElectronicsPage from './components/Pages/electronics';

function App() {
    return (
        <div className='container'>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<IndexPage />} />
                    <Route path='/woman' element={<WomanPage />}></Route>
                    <Route path='/woman/:category' element={<DresPage/>}></Route>
                    <Route path='/man' element={<ManPage />} />
                    <Route path='/card/:title' element={<CardsDetail/>}></Route>
                    <Route path='/electronics' element = {<ElectronicsPage/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
