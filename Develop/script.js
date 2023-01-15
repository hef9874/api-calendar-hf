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
    if(currentRow.id > currentHour) {
      rowDiv.addClass('future');
    }
    else{
      rowDiv.addClass('present');
    }
  }

  hourContainer.children("button").on('click', event => {
    var addButton = $(event.target).parent();

    $('.content')
  })

});

