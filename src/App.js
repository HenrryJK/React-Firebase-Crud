// import logo from './logo.svg'; -- ya no existe esto pq lo borramos.

import './App.css';
// importamos nuestros componentes
import Create from './components/Create';
import Edit from './components/Edit';
import Show from './components/Show';

//importamos el enrutador
import { BrowserRouter, Route , Routes} from 'react-router-dom';
function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Show/>}/>
            <Route path='/create' element={<Create/>}/>
            <Route path='/edit/:id' element={<Edit/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
