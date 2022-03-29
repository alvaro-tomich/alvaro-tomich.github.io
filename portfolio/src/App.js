import { Route, Routes } from 'react-router';
import './App.css';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato'
import Habilidades from './pages/Habilidades'
import Projetos from './pages/Projetos'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={ <Home /> } />
        <Route exact path="/sobre" element={ <Sobre /> } />
        <Route exact path="/contato" element={ <Contato /> } />
        <Route exact path="/habilidades" element={ <Habilidades /> } />
        <Route exact path="/projetos" element={ <Projetos /> } />
      </Routes>
    </div>
  );
}

export default App;
