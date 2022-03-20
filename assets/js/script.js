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

  //refresh time, to run highlightHour to check for updating colour
  setInterval(highlightHour, 5000);

  //prepare alert
  var alertPlaceholder = document.getElementById("liveAlertPlaceholder");

  function alert(message, type) {
    var wrapper = document.createElement("div");
    wrapper.innerHTML =
      '<div class="alert alert-danger alert-' +
      type +
      ' alert-dismissible" role="alert">' +
      message;

    alertPlaceholder.append(wrapper);
  }

  //button to save text
  $(".saveBtn").on("click", function () {

    var timeSlot = $(this).parent().attr("id");

    var textId = "#text-" + timeSlot;
    var textValue = $.trim($(textId).val());

    if (textValue === "") {

      alert("Enter some text in your event");
      $(liveAlertPlaceholder).fadeOut(3000);

      localStorage.setItem(timeSlot, textValue);
      console.log("time and text captured: " + timeSlot + ", " + textValue);
    } else {
      localStorage.setItem(timeSlot, textValue);
      console.log("time and text captured: " + timeSlot + ", " + textValue);
    }
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
  //TO DO - put a character limit on text row?
  //TO DO - make today's date strong/bold - perhaps its just update to heading h3? h2?
});
