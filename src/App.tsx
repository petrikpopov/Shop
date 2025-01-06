import './App.css';
import IndexPage from './components';
import WomanPage from './components/woman';
import ManPage from './components/man';
import DresPage from './components/dres';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardsDetail from './components/cardsDetails';
import ElectronicsPage from './components/electronics';
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
