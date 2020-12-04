function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

//1-Escreva seu código abaixo.
createDaysOfTheWeek();
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const dayListIn = document.querySelector('ul#days');

for (let index = 0; index < dezDaysList.length; index += 1) {
  const day = document.createElement('li');
  day.innerText = dezDaysList[index];
  dayListIn.appendChild(day);
}

// 2-
function createButton(nomeBotao,idText,) {
  const elementHolder = document.querySelector('div.buttons-container');
  const newElement = document.createElement('button');
  newElement.id = idText;
  newElement.innerText = nomeBotao;
  elementHolder.appendChild(newElement);
}
createButton('Feriados',"btn-holiday");

// 3- (completar o modo reverso)
function changeBGbutton () {
  const elementHolderButton = document.querySelector('button#btn-holiday');
  const elementHolderList = document.querySelectorAll('.holiday')
  elementHolderButton.addEventListener('click', function () {
    for (let index = 0; index < elementHolderList.length; index += 1) {
      elementHolderList[index].style.backgroundColor = "red";
    }
  }
  );

}
changeBGbutton();

// 4- reaproveita item 2
createButton('Sexta-feira',"btn-friday");

// 5-
function changeTextbutton () {
  const elementHolderButton = document.querySelector('button#btn-friday');
  
  const elementHolderList = document.querySelectorAll('li');
  console.log(elementHolderList.parentNode);

  //elementHolderButton.addEventListener('click', function () {
  //  for (let index = 0; index < elementHolderList.length; index += 1) {
  //    elementHolderList[index].style.backgroundColor = "red";
  //  }
  //}
  //);

}
changeTextbutton();
