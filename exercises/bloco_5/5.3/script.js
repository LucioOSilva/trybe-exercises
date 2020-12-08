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

createDaysOfTheWeek();
let objHolder = document.querySelector('ul#days');
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
for (let index = 0; index < dezDaysList.length; index += 1){
  let newElement = document.createElement('li');
  newElement.innerText = dezDaysList[index];
  objHolder.appendChild(newElement);
}
createDaysOfTheWeek();

// 2-create button
function createButton (buttonName,idName) {
  let objHolder = document.querySelector('div.buttons-container');
  let newElement =  document.createElement('button');
  newElement.id = idName;
  newElement.innerText = buttonName;
  objHolder.appendChild(newElement);
}
createButton('Feriados','btn-holiday');

// 3- add funcionalidade ao button feriados
function addHolidayColor () {
  let buttonElement = document.querySelector('#btn-holiday');
  buttonElement.addEventListener('click', function () {
    let holidays = document.querySelectorAll('li.holiday');
    for (let index = 0; index < holidays.length; index += 1) {
      holidays[index].style.backgroundColor = "aqua";
    }
  });
}
addHolidayColor();

// 4- butn friday
createButton('Sexta-feira', 'btn-friday');

// 5- funcao sexta modifica elementos
function addFridayText () {
  let buttonElement = document.querySelector('#btn-friday');
  let daysList = document.querySelectorAll('ul#days li');

  buttonElement.addEventListener('click', function () {
    for (index = 5; index < daysList.length; index += 7) {
      daysList[index].innerText = ("Sextou!");
    };
  });
}
addFridayText();

// 6-
function mouseTarget () {
  let elementHolderList = document.querySelectorAll('ul#days li');
  for (index = 0; index < elementHolderList.length; index += 1) {
    elementHolderList[index].addEventListener('mouseover', function (event) {
      event.target.style.fontSize = 25 + 'px';
    });
  };
  for (index = 0; index < elementHolderList.length; index += 1) {
    elementHolderList[index].addEventListener('mouseleave', function (event) {
      event.target.style.fontSize = 20 + 'px';
    });
  };
}
mouseTarget();

// 7-
function createTask (taskName) {
  let elementHolder = document.querySelector('div.my-tasks');
  let newElement = document.createElement('span');
  newElement.innerText = taskName;
  elementHolder.appendChild(newElement);
}
createTask('Projeto');


// 8- legenga
function taskColor (colorName) {
  let elementHolder = document.querySelector('div.my-tasks');
  let newElement = document.createElement('div');
  newElement.className = 'task';
  newElement.style.backgroundColor = colorName;
  elementHolder.appendChild(newElement);
}
taskColor('red');
taskColor('blue');

// 9-

function taskAppointment () {
  let elementHolderList = document.querySelectorAll('div.task');

  for (let index = 0; index < elementHolderList.length; index += 1) {
    elementHolderList[index].addEventListener('click', function (event) {
    if (event.target.className === "task") {
      event.target.className = "task selected";
    }
    else {
      event.target.className = "task";
    }
    });
  }
};
taskAppointment();

// 10-
function applyTask () {
  let elementHolderListTasks = document.querySelectorAll('div.task');
  let elementHolderListDays = document.querySelectorAll('ul#days li');
  for(let index1 = 0; index1 < elementHolderListDays.length; index1 += 1) {
    elementHolderListDays[index1].addEventListener('click', function (event) {
      for (let index2 = 0; index2 < elementHolderListTasks.length; index2 += 1) {
        if (elementHolderListTasks[index2].className === "task selected") {
          elementHolderListDays[index1].style.backgroundColor = elementHolderListTasks[index2].style.backgroundColor;
        }
      }
    });
  }
  
}
applyTask();
