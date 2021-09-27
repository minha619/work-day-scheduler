var now = new Date();
document.querySelector('#currentDay').append(moment(now).format('MMMM Do YYYY ' + 'dddd ' + 'h:mm a'))


var rows = document.querySelectorAll('.row');
for (var i = 0; i < rows.length; i++) {

    var time = rows[i].querySelector('.hours').innerHTML

    var currentTime = moment(time, "hh:mm A").toDate();
    var endTime = moment(currentTime).add(59, 'minutes').toDate();


    if (currentTime.getHours() < now.getHours()) {
        // $(rows[i]).find('.textarea').addClass("past");
        rows[i].querySelector('.textarea').classList.add('past');
    }
    else if (endTime.getHours() === now.getHours() && endTime.getTime() >= now.getTime()) {
        rows[i].querySelector('.textarea').classList.add('present');
    }
    else {
        rows[i].querySelector('.textarea').classList.add('future');
        //console.log('future')
    }

    var key = time + "-note";
    var value = localStorage.getItem(key);

    //console.log(key, value)
    if (value !== null){
        rows[i].querySelector('.textarea').value = value
    }
}


var saveBtn = document.querySelectorAll('.saveBtn');
    for (var i = 0; i < saveBtn.length; i++){
        saveBtn[i].addEventListener('click', saveOnclick)
        //console.log(saveBtn.length)

    }

function saveOnclick(event) {
    var button = event.target;
    var row = button.parentNode;
    var time = row.querySelector('.hours').innerHTML

    var key = time + "-note";
    var value = row.querySelector('.textarea').value;

    localStorage.setItem(key, value)
}

setInterval(function () {
    var now = new Date();
    var past = moment(now).add(-1, 'seconds').toDate();
    //console.log(past, now)

    if (past.getHours() !== now.getHours()) {
        var rows = document.querySelectorAll('.row');
        for (var i = 0; i < rows.length; i++) {
            rows[i].querySelector('.textarea').classList.remove('past');
            rows[i].querySelector('.textarea').classList.remove('present');
            rows[i].querySelector('.textarea').classList.remove('future');

            var time = rows[i].querySelector('.hours').innerHTML

            var currentTime = moment(time, "hh:mm A").toDate();
            var endTime = moment(currentTime).add(59, 'minutes').toDate();

            if (currentTime.getHours() < now.getHours()) {
                // $(rows[i]).find('.textarea').addClass("past");
                rows[i].querySelector('.textarea').classList.add('past');
            }
            else if (endTime.getHours() === now.getHours() && now.getMinutes() <= endTime.getMinutes()) {
                rows[i].querySelector('.textarea').classList.add('present');
            }
            else {
                rows[i].querySelector('.textarea').classList.add('future');
                //console.log('future')
            }

            var key = time + "-note";
            var value = localStorage.getItem(key);

            //console.log(key, value)
            if (value !== null) {
                rows[i].querySelector('.textarea').value = value
            }
        }
    }
}, 1000);