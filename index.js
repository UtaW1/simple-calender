const calender = document.querySelector('.calender'); 
const date = document.querySelector('.date'); 
const dayContainer = document.querySelector('.days-number__container'); 
const previousMonthDate = document.querySelector('.prev-date'); 
const nextMonthDate = document.querySelector('.next-date');

let today = new Date(); 
let activeDay; 
let month = today.getMonth(); 
let year = today.getFullYear(); 

const months = [
    "January",
    "Febuary", 
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

const initializeCalender = () => {
    const firstDay = new Date(year, month, 1); 
    const lastDay = new Date(year, month + 1, 0); 
    const prevLastDay = new Date(year, month, 0);
    const prevDays = prevLastDay.getDate(); 
    const lastDate = lastDay.getDate(); 
    const day = firstDay.getDay(); 
    const nextDays = 7 - lastDay.getDay() - 1; 

    // update the current month and year on top using the today object(I just learnt that existed wtf)
    date.innerHTML = months[month] + " " + year;
    
    // adding days to the dom 
    let days = "";
    
    // adding the days of the previous months to the current month
    for (let x = day; x > 0; x--) {
        days += `<div class="days-number prev-date">${31}</div>`; 
    }

    // adding the days of the current month
    for (let i = 1; i <= lastDate ; i++) {
        if( 
            i === new Date().getDate() && 
            year === new Date().getFullYear() && 
            month === new Date().getMonth()) {
            days+= `<div class ="days-number active">${i}</div>`;
        }
        else {
            days += `<div class ="days-number">${i}</div>`;
        }
    }
    // next month days

    for (let j = 1; j <= nextDays; j++) {
        days += `<div class ="days-number next-date">${j}</div>`;
    }
    
    dayContainer.innerHTML = days; 
}

initializeCalender(); 

