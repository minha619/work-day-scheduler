var currentDay = moment().format('MMMM Do YYYY');
var currentTime = moment().format('h:mm:ss a');

$('#currentDay').text(currentDay + " " + currentTime);
