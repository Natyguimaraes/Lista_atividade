import './css/styles.css';
import React, { useState } from "react";

function Atividade() {
  // Estado para armazenar as tarefas
  const [tarefas, setTarefas] = useState([]);
  // Estado para armazenar o texto digitado pelo usuário
  const [textoTarefa, setTextoTarefa] = useState('');

  const handleTextoTarefaChange = (event) => {
    setTextoTarefa(event.target.value);
  };

  const handleAdicionarTarefa = () => {
    if (textoTarefa.trim() !== '') {
      setTarefas([...tarefas, { id: Date.now(), texto: textoTarefa, concluida: false }]);
      setTextoTarefa('');
    }
  };

  // Cálculo do número total de tarefas concluídas
  const tarefasConcluidas = tarefas.filter(tarefa => tarefa.concluida).length;

  return (
    <>
   
       
        <div className='container'>
      <div className='lista_tarefas'>
      <h1>Lista de Tarefas</h1>
          <input type="text" placeholder="Digite uma nova tarefa" value={textoTarefa} onChange={handleTextoTarefaChange} />
          <button onClick={handleAdicionarTarefa}>Adicionar</button>
        
        <ul>
          {tarefas.map(tarefa => (
            <li
              key={tarefa.id}
              onClick={() => {
                const novasTarefas = tarefas.map(item =>
                  item.id === tarefa.id ? { ...item, concluida: !item.concluida } : item
                );
                setTarefas(novasTarefas);
              }}
              style={{ textDecoration: tarefa.concluida ? 'line-through' : 'none' }}
            >
              {tarefa.texto}
            </li>
          ))}
        </ul>
        <p>Total de Tarefas Concluídas: {tarefasConcluidas}</p>
        </div>
        </div>
    </>
  );
}

export default Atividade;
