import React from 'react';
import './taskLi.css';

const compromissos = ['Ajustar configurações Placa de Vídeo', 'Estudar sobre React','Passar do BOSS no Final Fantasy Tactics 1.3'];

const task = (value) => {
  return (
    <li className='li-elements'>{value}</li>
  );
};

class TaskLi extends React.Component {
  render() {
  return (
    <div>
      <ol>
        {compromissos.map(element => task(element))}
        {task('Lavar os Tênis')}
      </ol>
    </div>
  );};
}

export default TaskLi;
