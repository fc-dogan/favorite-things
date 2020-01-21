$(document).ready(function() {
  $("#things").submit(function(event) {
    var input1 = $("input#thing1").val();
    var input2 = $("input#thing2").val();
    var input3 = $("input#thing3").val();
    var input4 = $("input#thing4").val();
    var favorites1 = [input1, input2, input3, input4]
    var favorites2 = []

    favorites2.push(input2, input3, input4);

    
    $(".answer1").text(input2);
    $(".answer2").text(input3);
    $(".answer3").text(input4);
    
    $(".answers").show();

    event.preventDefault();
  });

  // $("#result").show(function(event) {
  //   $(".answer1").text(input2);
  //   $(".answer2").text(input3);
  //   $(".answer3").text(input4);

  //   event.preventDefault();
  // });

});
