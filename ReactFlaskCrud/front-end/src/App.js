import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Read from './Components/Read';
import { Create } from './Components/Create';
import Update from './Components/Update';
import Delete  from './Components/Delete';



function App() {
  return (
    <div className="Container">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Read />} />
        <Route path="/create" element={<Create />} />
        <Route path="/update" element={<Update />} />
        <Route path="/delete" element={<Delete />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;