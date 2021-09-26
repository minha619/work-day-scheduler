var now = new Date();
document.querySelector('#currentDay').append(moment(now).format('MMMM Do YYYY ' + 'dddd ' + 'h:mm:ss a'))


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

