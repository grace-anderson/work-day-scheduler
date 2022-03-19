//get today's date
var today = moment();
$("#currentDay").text(today.format("[Today is] dddd, Do MMMM YYYY"));


//TO DO - text hour changes between 9 am and 5 pm.
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
