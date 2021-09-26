// var currentDate = moment().format('MMMM Do YYYY');
// var currentDay = moment().format('dddd');
// var currentTime = moment().format('h:mm:ss a');
// // var now = moment();


// //current Day and time
// var interval = setInterval(() => {
//     var now = new Date();
//     var momentNow = $("#currentDay").text(moment(now).format('MMMM Do YYYY ' + 'dddd '+ 'h:mm:ss a'));
// }, interval);


// var changeBackground = function(){
//     var checkTime = momentNow
//     if (checkTime === 9){
//         $("#nineAm").addClass("present")
//     }
//     else if (checkTime < 9) {
//         $("#nineAm").addClass("future")
//     }
//     else (checkTime > 9) 
//         $("#nineAm").addClass("past");
// };


// document.getElementById('#currentDay').text(moment(now).format('MMMM Do YYYY ' + 'dddd '+ 'h:mm:ss a'));

var now = new Date();
var rows = document.querySelectorAll('.row');
for (var i = 0; i < rows.length; i++) {

    var time = rows[i].querySelector('.hours').innerHTML

    var currentTime = moment(time, "h hh:m mm a A").toDate();
    if (currentTime.getTime() < now.getTime()) {
        // $(rows[i]).find('.textarea').addClass("past");
        rows[i].querySelector('.textarea').classList.add('past');
    }
    else if (currentTime.getTime() === now.getTime()) {
        rows[i].querySelector('.textarea').classList.add('present');
    }
    else {
        rows[i].querySelector('.textarea').classList.add('future');
    }
}

document.querySelector('#currentDay').append(moment(now).format('MMMM Do YYYY ' + 'dddd ' + 'h:mm:ss a'))

