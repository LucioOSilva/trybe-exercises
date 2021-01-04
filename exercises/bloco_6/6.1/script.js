function brazilStates() {
  const arrayEstados = ['Acre','Alagoas','Amapá','Amazonas','Bahia','Ceará','Distrito Federal','Espírito Santo','Goiás','Maranhão','Mato Grosso','Mato Grosso do Sul','Minas Gerais','Pará','Paraíba','Paraná','Pernambuco','Piauí','Rio de Janeiro','Rio Grande do Norte','Rio Grande do Sul','Rondônia','Roraima','Santa Catarina','São Paulo','Sergipe','Tocantins'];
  const lista = document.querySelector('#basic-estado');
  for (let index = 0; index < arrayEstados.length; index += 1) {
    const element = document.createElement('option');
    element.value = arrayEstados[index];
    element.innerText = arrayEstados[index];
    lista.appendChild(element);
  }
}

function createCurriculum() {
  const buttonSubmit = document.querySelector('#btn-submit');
  buttonSubmit.addEventListener('click', function (event) {
    const aaa = window.location.href;
    event.preventDefault();
  });

}

brazilStates();
createCurriculum();
