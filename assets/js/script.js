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

  //refresh time, to run highlightHour to check for updating time block colour
  setInterval(highlightHour, 10000);

  //prepare alert
  var alertPlaceholder = $("#liveAlertPlaceholder");

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

    if (textValue !== "") {
      localStorage.setItem(timeSlot, textValue);
      console.log("time and text captured: " + timeSlot + ", " + textValue);
    } else {
      //show alert if no text when button clicked
      alert("Enter some text in your event");
      alertPlaceholder.fadeOut(3000, () => {
        alertPlaceholder.show();
        alertPlaceholder.empty();
      });

      textValue = "";
      localStorage.setItem(timeSlot, textValue);
      console.log("time and text captured: " + timeSlot + ", " + textValue);
    }
  });

  //display saved items from local storage
  $("#text-9").val(localStorage.getItem("9"));
  $("#text-10").val(localStorage.getItem("10"));
  $("#text-11").val(localStorage.getItem("11"));
  $("#text-12").val(localStorage.getItem("12"));
  $("#text-13").val(localStorage.getItem("13"));
  $("#text-14").val(localStorage.getItem("14"));
  $("#text-15").val(localStorage.getItem("15"));
  $("#text-16").val(localStorage.getItem("16"));
  $("#text-17").val(localStorage.getItem("17"));
});
