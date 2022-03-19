
//get today's date
var today = moment();
$("#currentDay").text(today.format("dddd, Do MMMM"));

//highlight row that is within current hour when page loaded or refreshed
