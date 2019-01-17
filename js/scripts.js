$(document).ready(function() {
  $("#ageVerification").submit(function(event) {
    event.preventDefault();
    var userAge = $("input#inputAge").val();
    var parseAge = parseInt(userAge);
    if (parseAge >= 18) {
      isAdult();
    } else {
      notAdult();
    }

  });
});

function isAdult() {
  $(".popup").hide();
  $(".container").show();
}

function notAdult() {
  $(".popup").hide();
  $("#notAdult").show();
}
