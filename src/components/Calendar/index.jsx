import { useEffect, useState } from 'react';
import '../../utils/style/calendar.css';
import styled from 'styled-components';

const months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];

const CalendarContainer = styled.div`
    background: #fff;
	width: clamp(20rem, 72.7273vw + 3.6364rem, 80rem);
	border-radius: 10px;
	box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
    margin:auto;
`

export default function Calendar({ getSelectedDate }) {
    const [date, setDate] = useState(new Date())
    const [year, setYear] = useState(date.getFullYear())
    const [month, setMonth] = useState(date.getMonth())
    const daysOfCalendar = [];

    const manipulate = () => {
        // Get the first day of the month
        let dayone = new Date(year, month, 1).getDay() - 1 >= 0 ? new Date(year, month, 1).getDay() - 1 : 6;
        // Get the last date of the month
        let lastdate = new Date(year, month + 1, 0).getDate();
        // Get the day of the last date of the month
        let dayend = new Date(year, month, lastdate).getDay();
        // Get the last date of the previous month
        let monthlastdate = new Date(year, month, 0).getDate();

        for (let i = dayone; i > 0; i--) {
            daysOfCalendar.push({ class: 'inactive', day: monthlastdate - i + 1, month: month - 1, year });
        }
        for (let i = 1; i <= lastdate; i++) {
            // Check if the current date is today
            let isToday = i === new Date().getDate()
                && month === new Date().getMonth()
                && year === new Date().getFullYear()
                ? "today"
                : "";
            let active = getSelectedDate.selectedDate ?
                getSelectedDate.selectedDate.getDate() === i
                    && month === getSelectedDate.selectedDate.getMonth()
                    && year === getSelectedDate.selectedDate.getFullYear()
                    ? "active"
                    : ""
                : ""
            daysOfCalendar.push({ class: `${isToday} ${active}`, day: i, month, year });
            // selectedDate && console.log(selectedDate.getDate() === i, month === date.getMonth(), year === date.getFullYear());
        }
        // Loop to add the first dates of the next month
        for (let i = dayend; i < 7; i++) {
            daysOfCalendar.push({ class: 'inactive', day: i - dayend + 1, month: month + 1, year });
        }
        // console.log(daysOfCalendar, selectedDate);
    }

    const navigateInTime = (e) => {
        const elementId = e.target.closest('span').id;
        const actualMonth = elementId === "calendar-prev" ? month - 1 : month + 1;
        if (actualMonth < 0 || actualMonth > 11) {

            // Set the date to the first day of the 
            // month with the new year
            setDate(new Date(year, actualMonth, new Date().getDate()));

            // Set the month to the new month
            setMonth(new Date(year, actualMonth, new Date().getDate()).getMonth());

            // Set the year to the new year
            setYear(new Date(year, actualMonth, new Date().getDate()).getFullYear());
        }

        else {

            // Set the date to the current date
            setDate(new Date());
            setMonth(actualMonth)
        }
        // Call the manipulate function to 
        // update the calendar display
        manipulate();
    }

    const selectDate = (e, fullDate) => {
        const newDate = new Date(fullDate.year, fullDate.month, fullDate.day)
        setDate(newDate)
        setMonth(newDate.getMonth())
        setYear(newDate.getFullYear())
        getSelectedDate.setSelectedDate(newDate)
        manipulate()
    }

    manipulate()

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <CalendarContainer>
            <header className='calendar-header'>
                <p className="calendar-current-month">{months[month]} {year}</p>
                <div className="calendar-nav">
                    <span id="calendar-prev" onClick={navigateInTime}><i className="fa-solid fa-chevron-left"></i></span>
                    <span id="calendar-next" onClick={navigateInTime}><i className="fa-solid fa-chevron-right"></i></span>
                </div>
            </header>
            <div className="calendar-body">
                <ul className="calendar-days">
                    <li>Lun{screenWidth < 750 ? "." : "di"}</li>
                    <li>Mar{screenWidth < 750 ? "." : "di"}</li>
                    <li>Mer{screenWidth < 750 ? "." : "credi"}</li>
                    <li>Jeu{screenWidth < 750 ? "." : "di"}</li>
                    <li>Ven{screenWidth < 750 ? "." : "dredi"}</li>
                    <li>Sam{screenWidth < 750 ? "." : "edi"}</li>
                    <li>Dim{screenWidth < 750 ? "." : "anche"}</li>
                </ul>
                <ul className="calendar-dates">
                    {daysOfCalendar.map(days =>
                        <li className={days.class} key={days.year + '' + (days.month < 10 ? '0' : '') + days.month + '' + (days.day < 10 ? '0' : '') + days.day} onClick={(e) => selectDate(e, { year: days.year, month: days.month, day: days.day })}>
                            {days.day}
                        </li>)}
                </ul>
            </div>
        </CalendarContainer>
    )
}