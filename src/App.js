import imagem from './img.png';
import './App.css';
import React from 'react';

function App() {
  return (
    <div className="container">
      <header>
      <img src={imagem} alt="Imagem"></img>
      </header>
      <main>
        <section className="about">
          <h2>Sobre Mim</h2>
          <p className="sobre">Sou formado em Engenharia de Software e apaixonado por criar interfaces de usuário intuitivas e eficientes, mobile ou web. Tenho experiências com projetos pessoais em meu GitHub sobre React JS e outras tecnologias web modernas. Busco constantemente novos desafios e oportunidades para aprender e crescer como profissional, atualmente voltado ao mundo mobile.</p>
        </section>
        <section className="skills">
          <h2>Conhecimentos</h2>
          <ul>
            <li>React Native</li>
            <li>React JS</li>
            <li>JavaScript</li>
            <li>CSS/HTML</li>
          </ul>
          <h2>Certificados</h2>
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/isaque-quadros" className='botao'>Linkedin</a>
            </li>
          </ul>
        </section>
        <section className="projects">
          <h2>Projetos</h2>
          <ul>
            <li>
              <a href="https://github.com/isaquequadros" className='botao'>GitHub</a>
            </li>
          </ul>
        </section>
      </main>
      <footer>
        <h2>Contato</h2>
        <ul>
          <li>
            contato.isaquequadros@gmail.com
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default App;