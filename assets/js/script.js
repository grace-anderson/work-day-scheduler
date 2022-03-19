
//get today's date
var today = moment();
$("#currentDay").text(today.format("dddd, Do MMMM"));

//highlight row that matches current hour
var currentHour = moment();

//when real time is within the time block's hour
//update the background of that table cell to red (class .present)
//target table cells have id that matches row time (e.g. id="2pm")
//e.g. when the time is 2:06 pm the background 
//of the 2PM Event table cell should be red
