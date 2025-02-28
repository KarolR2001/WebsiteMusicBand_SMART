// Twój klucz API
const API_KEY = 'AIzaSyCqgjA6rG4XgTRLrP_7-ScNic_01v_yNF0';

// ID kalendarza Google
const CALENDAR_ID = 'zespolsmart.contact@gmail.com';

function isSameMonth(date, month, year) {
    return date.getFullYear() === year && date.getMonth() === month;
}

function getEventsForMonth(month, year) {
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    lastDayOfMonth.setDate(lastDayOfMonth.getDate() + 1);

    const timeMin = firstDayOfMonth.toISOString();
    const timeMax = lastDayOfMonth.toISOString();

    const url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}&timeMin=${timeMin}&timeMax=${timeMax}`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        const events = data.items;
        const calendarDays = document.querySelectorAll('.calendar-days .current-month-day');

        calendarDays.forEach(day => {
            const dayNumber = parseInt(day.innerHTML.trim());
            let hasWesele = false;
            let hasRezerwacja = false;
            events.forEach(event => {
                const eventStartDate = new Date(event.start.date || event.start.dateTime);
                const eventEndDate = new Date(event.end.date || event.end.dateTime);
                if (eventStartDate <= firstDayOfMonth && eventEndDate >= lastDayOfMonth) {
                    if (event.summary) {
                        if (event.summary.toLowerCase().includes('wesele')) {
                            hasWesele = true;
                        }
                        if (event.summary.toLowerCase().includes('rezerwacja')) {
                            hasRezerwacja = true;
                        }
                    }
                } else {
                    for (let d = eventStartDate; d < eventEndDate; d.setDate(d.getDate() + 1)) {
                        if (d.getFullYear() === year && d.getMonth() === month && d.getDate() === dayNumber) {
                            if (event.summary) {
                                if (event.summary.toLowerCase().includes('wesele')) {
                                    hasWesele = true;
                                }
                                if (event.summary.toLowerCase().includes('rezerwacja')) {
                                    hasRezerwacja = true;
                                }
                            }
                            break;
                        }
                    }
                }
            });
            if (hasWesele && hasRezerwacja) {
                day.style.backgroundColor = 'orange';
                day.style.color = 'gray';
            } else if (hasWesele) {
                day.style.backgroundColor = 'red';
            } else if (hasRezerwacja) {
                day.style.backgroundColor = 'orange';
                day.style.color = 'gray';
            }
        });
    })
    .catch(error => console.error('Wystąpił błąd podczas pobierania wydarzeń:', error));
}


//------------------------------------------------------------------------

function getEventsForPreviousMonthDays(month, year) {
    const prevMonth = month - 1 < 0 ? 11 : month - 1; // Poprzedni miesiąc
    const daysInPrevMonth = new Date(year, prevMonth + 1, 0).getDate(); // Liczba dni w poprzednim miesiącu

    const firstDayOfPrevMonth = new Date(year, prevMonth, 1);
    const lastDayOfPrevMonth = new Date(year, prevMonth, daysInPrevMonth);
    lastDayOfPrevMonth.setDate(lastDayOfPrevMonth.getDate() + 1);

    const timeMin = firstDayOfPrevMonth.toISOString();
    const timeMax = lastDayOfPrevMonth.toISOString();

    const url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}&timeMin=${timeMin}&timeMax=${timeMax}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const events = data.items;
            const calendarDays = document.querySelectorAll('.calendar-days .prev-month-day');

            calendarDays.forEach(day => {
                const dayNumber = parseInt(day.innerHTML.trim());
                let hasWesele = false;
                let hasRezerwacja = false;

                events.forEach(event => {
                    const eventStartDate = new Date(event.start.date || event.start.dateTime);
                    const eventEndDate = new Date(event.end.date || event.end.dateTime);

                    if (eventStartDate <= firstDayOfPrevMonth && eventEndDate >= lastDayOfPrevMonth) {
                        if (event.summary) {
                            if (event.summary.toLowerCase().includes('wesele')) {
                                hasWesele = true;
                            }
                            if (event.summary.toLowerCase().includes('rezerwacja')) {
                                hasRezerwacja = true;
                            }
                        }
                    } else {
                        for (let d = eventStartDate; d < eventEndDate; d.setDate(d.getDate() + 1)) {
                            if (d.getFullYear() === year && d.getMonth() === prevMonth && d.getDate() === dayNumber) {
                                if (event.summary) {
                                    if (event.summary.toLowerCase().includes('wesele')) {
                                        hasWesele = true;
                                    }
                                    if (event.summary.toLowerCase().includes('rezerwacja')) {
                                        hasRezerwacja = true;
                                    }
                                }
                                break;
                            }
                        }
                    }
                });
                if (hasWesele && hasRezerwacja) {
                    day.style.backgroundColor = 'orange';
                    
                } else if (hasWesele) {
                    day.style.backgroundColor = 'red';
                    day.style.color = '#d2a64e';
                } else if (hasRezerwacja) {
                    day.style.backgroundColor = 'orange';
                }
            });
        })
        .catch(error => console.error('Wystąpił błąd podczas pobierania wydarzeń:', error));
}


//-----------------------------------------------------------------------------

function getEventsForNextMonth(month, year) {
    let nextMonth = month + 1;
    let nextMonthYear = year;
    if (nextMonth > 11) {
        nextMonth = 0;
        nextMonthYear = year + 1;
    }
    const firstDayOfNextMonth = new Date(nextMonthYear, nextMonth, 1);
    const lastDayOfNextMonth = new Date(nextMonthYear, nextMonth + 1, 0);
    lastDayOfNextMonth.setDate(lastDayOfNextMonth.getDate() + 1);

    const timeMin = firstDayOfNextMonth.toISOString();
    const timeMax = lastDayOfNextMonth.toISOString();

    const url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}&timeMin=${timeMin}&timeMax=${timeMax}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const events = data.items;
            const calendarDays = document.querySelectorAll('.calendar-days .next-month-day');

            calendarDays.forEach(day => {
                const dayNumber = parseInt(day.innerHTML.trim());
                let hasWesele = false;
                let hasRezerwacja = false;
                events.forEach(event => {
                    const eventStartDate = new Date(event.start.date || event.start.dateTime);
                    const eventEndDate = new Date(event.end.date || event.end.dateTime);
                    if (eventStartDate <= firstDayOfNextMonth && eventEndDate >= lastDayOfNextMonth) {
                        if (event.summary) {
                            if (event.summary.toLowerCase().includes('wesele')) {
                                hasWesele = true;
                            }
                            if (event.summary.toLowerCase().includes('rezerwacja')) {
                                hasRezerwacja = true;
                            }
                        }
                    } else {
                        for (let d = eventStartDate; d < eventEndDate; d.setDate(d.getDate() + 1)) {
                            if (d.getFullYear() === nextMonthYear && d.getMonth() === nextMonth && d.getDate() === dayNumber) {
                                if (event.summary) {
                                    if (event.summary.toLowerCase().includes('wesele')) {
                                        hasWesele = true;
                                    }
                                    if (event.summary.toLowerCase().includes('rezerwacja')) {
                                        hasRezerwacja = true;
                                    }
                                }
                                break;
                            }
                        }
                    }
                });
                if (hasWesele && hasRezerwacja) {
                    day.style.backgroundColor = 'orange';
                } else if (hasWesele) {
                    day.style.backgroundColor = 'red';
                    day.style.color = '#d2a64e';
                } else if (hasRezerwacja) {
                    day.style.backgroundColor = 'orange';
                }
            });
        })
        .catch(error => console.error('Wystąpił błąd podczas pobierania wydarzeń:', error));
}




let calendar = document.querySelector('.calendar')

const month_names = ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień']

isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) || (year % 100 === 0 && year % 400 ===0)
}

getFebDays = (year) => {
    return isLeapYear(year) ? 29 : 28
}
generateCalendar = (month, year) => {

    let calendar_days = calendar.querySelector('.calendar-days');
    let calendar_header_year = calendar.querySelector('#year');

    let days_of_month = [31, getFebDays(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    calendar_days.innerHTML = '';

    let currDate = new Date();
    if (month > 11 || month < 0) month = currDate.getMonth();
    if (!year) year = currDate.getFullYear();

    let curr_month = `${month_names[month]}`;
    month_picker.innerHTML = curr_month;
    calendar_header_year.innerHTML = year;

    // get first day of month
    let first_day = new Date(year, month, 1);
    let startingDay = first_day.getDay() === 0 ? 6 : first_day.getDay() - 1; // Poprawka dla poniedziałku jako pierwszego dnia

    // Calculate the number of days in the previous month
    let prevMonth = month - 1;
    let prevMonthYear = year;
    if (prevMonth < 0) {
        prevMonth = 11;
        prevMonthYear = year - 1;
    }
    let prevMonthDays = days_of_month[prevMonth]; // Poprawka: zmienna prevMonthDays powinna być zależna od prevMonth

    // Fill in the previous month's days
    for (let i = 0; i < startingDay; i++) {
        let day = document.createElement('div');
        day.innerHTML = prevMonthDays - startingDay + i + 1;
        day.classList.add('prev-month-day');
        calendar_days.appendChild(day);
    }

    // Fill in the current month's days
    for (let i = 1; i <= days_of_month[month]; i++) {
        let day = document.createElement('div');
        day.innerHTML = i;
        day.classList.add('current-month-day');
        day.classList.add('calendar-day-hover');
        day.innerHTML += `<span></span>
                        <span></span>
                        <span></span>
                        <span></span>`;
        day.style.fontSize = '24px';
        if (i === currDate.getDate() && year === currDate.getFullYear() && month === currDate.getMonth()) {
            day.classList.add('curr-date');
        }
        calendar_days.appendChild(day);
    }

    // Fill in the next month's days
    let nextMonth = month + 1;
    let nextMonthYear = year;
    if (nextMonth > 11) {
        nextMonth = 0;
        nextMonthYear = year + 1;
    }
    for (let i = 1; calendar_days.children.length < 42; i++) {
        let day = document.createElement('div');
        day.innerHTML = i;
        day.classList.add('next-month-day');
        calendar_days.appendChild(day);
    }

    getEventsForMonth(month, year);
    getEventsForPreviousMonthDays(month, year);
    getEventsForNextMonth(month, year);
}





let month_list = calendar.querySelector('.month-list')

month_names.forEach((e, index) => {
    let month = document.createElement('div')
    month.innerHTML = `<div data-month="${index}">${e}</div>`
    month.querySelector('div').onclick = () => {
        month_list.classList.remove('show')
        curr_month.value = index
        generateCalendar(index, curr_year.value)
    }
    month_list.appendChild(month)
})

let month_picker = calendar.querySelector('#month-picker')

month_picker.onclick = () => {
    month_list.classList.add('show')
}

let currDate = new Date()

let curr_month = {value: currDate.getMonth()}
let curr_year = {value: currDate.getFullYear()}

generateCalendar(curr_month.value, curr_year.value)

document.querySelector('#prev-year').onclick = () => {
    --curr_year.value
    generateCalendar(curr_month.value, curr_year.value)
}

document.querySelector('#next-year').onclick = () => {
    ++curr_year.value
    generateCalendar(curr_month.value, curr_year.value)
}

// Obsługa przycisków poprzedniego i następnego miesiąca dla month pickera
document.querySelector('#prev-month').onclick = () => {
    curr_month.value = (curr_month.value - 1 + 12) % 12;
    generateCalendar(curr_month.value, curr_year.value);
};

document.querySelector('#next-month').onclick = () => {
    curr_month.value = (curr_month.value + 1) % 12;
    generateCalendar(curr_month.value, curr_year.value);
};



const calendarDays = document.querySelector('.calendar-days');

// Inicjalizacja Hammer.js
const hammer = new Hammer(calendarDays);

// Obsługa gestu przewijania w prawo i w lewo
hammer.on('swiperight', function() {
    // Obsługa gestu przewijania w prawo
    curr_month.value = (curr_month.value - 1 + 12) % 12;
    generateCalendar(curr_month.value, curr_year.value);
});

hammer.on('swipeleft', function() {
    // Obsługa gestu przewijania w lewo
    curr_month.value = (curr_month.value + 1) % 12;
    generateCalendar(curr_month.value, curr_year.value);
});
