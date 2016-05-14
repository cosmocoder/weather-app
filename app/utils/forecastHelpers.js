const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

export function getDate(unixTimestamp) {
    const date = new Date(unixTimestamp * 1000);
    return days[date.getDay()] + ', ' + months[date.getMonth()] + ' ' + date.getDate();
}

export function getTemperature(kelvinTemp) {
    return Math.round(kelvinTemp - 273.16);
}