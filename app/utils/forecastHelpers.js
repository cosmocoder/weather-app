var days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];

var months = [
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

function getDate(unixTimestamp) {
    var date = new Date(unixTimestamp * 1000);
    return days[date.getDay()] + ', ' + months[date.getMonth()] + ' ' + date.getDate();
}

module.exports = {
    getDate: getDate
};