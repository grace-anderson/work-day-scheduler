$(document).ready(function () {
  //get today's date
  var today = moment();
  $("#currentDay").text(today.format("[Today is] dddd, Do MMMM YYYY"));

  // update colour blocks (past, present, future) when time updates
  function highlightHour() {
    var currentHour = moment().hour();
    $(".time-block").each(function () {
      var timeRow = parseInt($(this).attr("id"));
      if (timeRow === currentHour) {
        $(this).removeClass("future");
        $(this).addClass("present");
      } else if (timeRow < currentHour) {
        $(this).removeClass("present");
        $(this).addClass("past");
      } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
  }

  highlightHour();

  //refresh time, to run highlightHour to update current hour colour
  var interval = setInterval(highlightHour, 5000);

  // When Save button clicked, row id and text in middle column saved to local storage

  $(".saveBtn").on("click", function () {
    var timeSlot = $(this).parent().parent().attr("id");

    var textId = "#text-" + timeSlot;
    var textValue = $.trim($(textId).val());

    localStorage.setItem(timeSlot, textValue);
    console.log("time and text captured: " + timeSlot + ", " + textValue);
  });

  //TO DO - do saved items save to next day, need to add a check on the date??  OR when date updates, update all text items to "" -  easuer than saving date against the items?

  //get saved items from local storage
  $("#text-9").val(localStorage.getItem("9"));
  $("#text-10").val(localStorage.getItem("10"));
  $("#text-11").val(localStorage.getItem("11"));
  $("#text-12").val(localStorage.getItem("12"));
  $("#text-13").val(localStorage.getItem("13"));
  $("#text-14").val(localStorage.getItem("14"));
  $("#text-15").val(localStorage.getItem("15"));
  $("#text-16").val(localStorage.getItem("16"));
  $("#text-17").val(localStorage.getItem("17"));

  //TO DO - put a limit on when text can be added. e.g. can text be added to past rows? (not mentioned in requirements)
  //TO DO - can text be saved when the the textarea is empty ("")?
  //TO DO - look at updating from a table to bootstrap columns with "mini forms" for each row
  //TO DO - put a character limit on text row?
  //TO DO - how to put a z index on the button so that it enlarges on top of the other elements, and doesn't push them away
  //TO DO - make today's date strong/bold - perhaps its just update to heading h3? h2?
});
