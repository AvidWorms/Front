import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'; // Certifique-se de ajustar o caminho do import conforme necessário
import AlunoList from './components/CadUpAluno/AlunoList'; 
import AlunoForm from './components/CadUpAluno/AlunoForm';
import DefaultPage from './pages/DefaultPage';
// import MotoristaList from './components/MotoristaList';
// import PresencaList from './components/PresencaList';
// import VeiculoList from './components/VeiculoList';
// import RelatorioDeRotas from './components/RelatorioDeRotas';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<DefaultPage />} />
        <Route path="/aluno-form/:id?" element={<AlunoForm />} />
        <Route path="/alunos" element={<AlunoList />} />
      </Routes>
    </Router>
  );
};



export default App;
