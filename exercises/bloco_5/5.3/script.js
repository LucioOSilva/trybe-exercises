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
function holidays(nameHolidays) {
  const elementHolder = document.querySelector('div.buttons-container');
  const newElement = document.createElement('button');
  newElement.id = "btn-holiday";
  newElement.innerText = nameHolidays;
  elementHolder.appendChild(newElement);
}
let nameHolidays = 'Feriados';
holidays(nameHolidays);

// 3-
function changeBGHoliday () {
  const elementHolderButton = document.querySelector('button#btn-holiday');
  const elementHolderHolidayList = document.querySelectorAll('.holiday')
  elementHolderButton.addEventListener('click', function (event) {
    for (let index = 0; index < elementHolderHolidayList.length; index += 1) {
      elementHolderHolidayList[index].style.backgroundColor = "red";
    }
  }
  );

}
changeBGHoliday();