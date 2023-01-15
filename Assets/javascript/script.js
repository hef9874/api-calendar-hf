// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function() {
  //Get day and time
  var time = getTime();

  var showCurrent = $('#currentDay');
  showCurrent.text(time);

  //setting hours 
  var hour = new Date();
  var currentHour = String('hour-' + String(hour.getHours()).padStart(2.0));

  //setting classes to rows 
  var rows = $('.container-fluid');
  var hourContainer = rows.children('.row');

  for(let i=0; i < hourContainer.length; i++) {
    var currentRow = hourContainer[i];
    //get from JSON
    var calendarContent = JSON.parse(localStorage.getItem(currentRow.id));
    currentTextArea = $(currentRow).children('textarea').text(calendarContent)

    var rowDiv = $(currentRow);
    if(currentRow.id < currentHour) {
      rowDiv.addClass('past');
    }
    else if(currentRow.id > currentHour) {
      rowDiv.addClass('future');
    }
    else{
      rowDiv.addClass('present');
    }
  }

  //what happens when the add event button is clicked - data stored in JSON
  hourContainer.children("button").on('click', event => {
    var addButton = $(event.target).parent();
    $('.content').text('Added to Calendar!');
    var containerId = $(addButton).attr('id');
    var getText = $(addButton).children('textarea');
    var newContent = getText.val();
    localStorage.setItem(containerId, JSON.stringify(newContent));
  });

});
//getting time and day & AM and PM
function getTime () {
  var currentDate = new Date();
  var month = getMonth(currentDate.getMonth());
  var dayTime = "AM";
  var currentDay = month + '' + currentDate.getDate() + ', ' + currentDate.getFullYear();

  var hourNow = currentDate.getHours();
  if(hourNow > 12) {
    dayTime = 'PM';
    hourNow -=12;
  }

  var minuteNow = String(currentDate.getMinutes()).padStart(2.0);
  var timeNow = hourNow + ':' + minuteNow + '' + dayTime;

  return currentDay + " " + timeNow;
}

getMonth = (thisMonth) => {
  switch(thisMonth) {
  case 0: return 'January';
  case 1: return 'February';
  case 2: return 'March';
  case 3: return 'April';
  case 4: return 'May';
  case 5: return 'June';  
  case 6: return 'July';
  case 7: return 'August';
  case 8: return 'September';
  case 9: return 'October';
  case 10: return 'November';
  case 11: return 'December';
  }
}



