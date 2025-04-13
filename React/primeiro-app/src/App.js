import { useState } from 'react';

import Nome from './components/Nome';
import Pet from './components/Pet';

function App() {
  const [aluno, setAluno] = useState('Vitor');

  const name = 'Vitor';

  function handleChanceName(nome) {
    setAluno(nome);
  }

  function defaultName() {
    setAluno(name);
  }

  return(
    <div>
      <h1>Componente App</h1>
      <Nome aluno="Vitor" idade={20}/>
      <br/>
      <Nome aluno="Jaga" idade={25}/>
      <br/>
      <Pet pet="Rex"/>

      <br/>

      <h2>Olá: {aluno} </h2>
      <button onClick={ () => handleChanceName('Vitor Higuchi') }>
        Mudar nome
      </button>
      <button onClick={ defaultName }>
        Voltar ao primeiro nome
      </button>
    </div>
  );
}

export default App;