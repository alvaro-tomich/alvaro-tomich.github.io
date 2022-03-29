import React from 'react'
import { Link } from 'react-router-dom';

  function Home() {
    return (
      <div>
        <header>
          <Link to="/sobre">Sobre</Link>
          <Link to="/contato">Contato</Link>
          <Link to="/habilidades">Habilidades</Link>
          <Link to="/projetos">Projetos</Link>
        </header>
        <h1>Olá Mundo</h1>
        <h2>Meu nome é Álvaro Ramos.</h2>
        <h2>Atualmente estudo desenvolvimento web na Trybe.</h2>    
      </div>
    )
}

export default Home;
