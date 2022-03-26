// tells engine to load html and css first.
$(document).ready(function () {
  // assigns the variable presentTime with the current date and time and pushes¿ it to the html element
  // with an id of currentDay
  // updating the datetime every one second 
  let timerInterval = setInterval(function () {
    var presentTime = moment().format("MMMM Do YYYY, h:mm:ss a");
    $("#currentDay").html(presentTime);
  }, 1000);

  // save button listener that gets nearby values, then saves those to local storage
  $(".saveBtn").on("click", function () {
    // console.log($(this));
    var text = $(this).siblings(".userInput").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, text);
  });

  function hourChecker() {
    // checks what the current hour is and puts it into presentHour Variable
    var presentHour = moment().hour();

    $(".time-block").each(function () {
      // pulls the hour out of the timer and turns it into an integer and puts it into the variable
      // block so we can run it against the current time
      var block = parseInt($(this).attr("id").split("hour")[1]);
      // checks when the current hour is to tell which block is past present or future
      if (block < presentHour) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
      } else if (block === presentHour) {
        $(this).removeClass("future");
        $(this).removeClass("past");
        $(this).addClass("present");
      } else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
      }
    });
  }

  // grab items from local storage
  $("#hour9 .userInput").val(localStorage.getItem("hour9"));
  $("#hour10 .userInput").val(localStorage.getItem("hour10"));
  $("#hour11 .userInput").val(localStorage.getItem("hour11"));
  $("#hour12 .userInput").val(localStorage.getItem("hour12"));
  $("#hour13 .userInput").val(localStorage.getItem("hour13"));
  $("#hour14 .userInput").val(localStorage.getItem("hour14"));
  $("#hour15 .userInput").val(localStorage.getItem("hour15"));
  $("#hour16 .userInput").val(localStorage.getItem("hour16"));
  $("#hour17 .userInput").val(localStorage.getItem("hour17"));

  hourChecker();
});
