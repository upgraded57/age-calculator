const ageSelector = document.getElementById("date-input");
const submitBtn = document.getElementById("submit-date");

const outputWrapper = document.getElementById("output-wrapper");
const yearPlaceHolder = document.getElementById("year-place-holder");
const monthPlaceHolder = document.getElementById("month-place-holder");
const weekPlaceHolder = document.getElementById("week-place-holder");
const dayPlaceHolder = document.getElementById("day-place-holder");

let currentDate = new Date();
let currentYear = currentDate.getFullYear();
let currentMonth = currentDate.getMonth();
let currentDay = currentDate.getDate();

submitBtn.onclick = () => {
  const userBirthDate = ageSelector.value.split("-").join("/");
  let ageDifference = currentDate - new Date(userBirthDate);

  let ageDifferenceInDays = Math.ceil(ageDifference / (1000 * 60 * 60 * 24));

  const yearDifference = Math.floor(ageDifferenceInDays / 365);
  const monthDifference = Math.floor(
    (ageDifferenceInDays - yearDifference * 365) / 30
  );

  const weekDifference = Math.floor(
    (ageDifferenceInDays - yearDifference * 365 - monthDifference * 30) / 7
  );

  const dayDifference =
    ageDifferenceInDays -
    (yearDifference * 365 + monthDifference * 30 + weekDifference * 7) -
    1;

  yearPlaceHolder.innerText = yearDifference;
  monthPlaceHolder.innerText = monthDifference;
  weekPlaceHolder.innerText = weekDifference;
  dayPlaceHolder.innerText = dayDifference;

  outputWrapper.style.display = "block";
};

// console.log(Math.ceil((newDate - currentDate) / (1000 * 60 * 60 * 24)));
