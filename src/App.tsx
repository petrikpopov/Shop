import './App.css';
import IndexPage from './components';
import WomanPage from './components/woman';
import ManPage from './components/man';
import DresPage from './components/dres';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className='container'>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<IndexPage />} />
                    <Route path='/woman' element={<WomanPage />}>
                        <Route path=":category" element={<DresPage />} />
                    </Route>
                    <Route path='/man' element={<ManPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
