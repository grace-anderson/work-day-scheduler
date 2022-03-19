
$(document).ready(function(){
//get today's date
var today = moment();
$("#currentDay").text(today.format("[Today is] dddd, Do MMMM YYYY"));


//TO DO - test hour changes automatically between 9 am and 5 pm.
function highlightHour() {
  var currentHour = moment().hour();
//   console.log(currentHour);
  $(".time-block").each(function () {
    var timeRow = parseInt($(this).attr("id"));
    // console.log(timeRow);
    if (timeRow === currentHour) {
      $(this).addClass("present");
    } else if (timeRow < currentHour) {
        $(this).addClass("past");
    } else {
        $(this).addClass("future");
    }
  });
}

highlightHour();

//HTML - Update middle column into a text area, for user to enter text
//add text area to middle column
//add class description (for the textarea)
//save added text locally
// TO DO - Should the user enter on return and Save? Or only with Save? Requirement specifies clicking save button only
//=> create save button in right column
//add .saveBtn class
// add save icon to save button 

// TO DO - save text added to text area to local storage when save button clicked

$(".saveBtn").on("click", function() {
    var timeSlot = $(this).parent().parent().attr("id");
    timeSlot = parseInt(timeSlot);

    var textId = "#text-" + timeSlot;
    var textValue = $.trim($(textId).val());

    localStorage.setItem(textValue, timeSlot);
    console.log("time and text captured: " + timeSlot + ", " + textValue);
});


//TO DO - put a limit on when text can be added. e.g. can text be added to past rows? (not mentioned in requirements)
//TO DO - can text be saved when the the textarea is empty ("")?
//TO DO - look at updating from a table to bootstrap columns with "mini forms" for each row 
//



})