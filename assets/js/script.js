//get today's date
var today = moment();
$("#currentDay").text(today.format("[Today is] dddd, Do MMMM YYYY"));

//highlight row that matches current hour

//when real time is within the rows current hour
//update the background of the event table cell to red (class .present)
//target row id to see if the row hour matches current time hour (e.g. id="2")
//e.g. when the time is 2:06 pm the background
//of the 2PM Event table cell should be red

function highlightHour() {
  var currentHour = moment().hour();
  console.log(currentHour);

  //check is time row is current hour (class = time-block, id = hour for each row)
  //use j.query each as is js for loop

  $(".time-block").each(function () {
    var timeRow = parseInt($(this).attr("id"));
    console.log(timeRow);
    if (timeRow === currentHour) {
      $(this).addClass("present");
    }
  });
}

highlightHour();
