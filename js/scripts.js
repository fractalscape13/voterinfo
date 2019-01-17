$(document).ready(function() {
  $("#ageVerification").submit(function(event) {
    event.preventDefault();
    var userAge = $("input#inputAge").val();
    var parseAge = parseInt(userAge);
    if (parseAge >= 21) {
      isAdult();
    } else {
      notAdult();
    }

  });
  $("#theQuiz").submit(function(event) {
    event.preventDefault();
    var a1 = parseInt($("input:radio[name=firstQuestion]:checked").val());
    var a2 = parseInt($("input:radio[name=secondQuestion]:checked").val());
    var a3 = parseInt($("input:radio[name=thirdQuestion]:checked").val());
    var a4 = parseInt($("input:radio[name=fourthQuestion]:checked").val());
    var a5 = parseInt($("input:radio[name=fifthQuestion]:checked").val());
    var result = a1 + a2 + a3 + a4 + a5;
    randomFunction(result);
  });
  // $("#startQuiz").submit(function(event) {
  //   event.preventDefault();
  //   .slideUp(#startQuiz);
  //
  // });
});

function isAdult() {
  $(".popup").hide();
  $(".container").show();
}

function notAdult() {
  $(".popup").hide();
  $("#notAdult").show();
}
function  randomFunction(result)  {
   if (result >= 3) {
    $("#finalResult").text("try b")
  } else {
    alert("try A")
  }

}
