$(document).ready(function() {
  $("#things").submit(function(event) {
    var blanks = ["thing1", "thing2", "thing3", "thing4"]

    blanks.forEach(function(blank) {
      var userInput = $("input#" + blank).val();
      $("." + blank).text(userInput);
    });

    $(".answers").show();

    event.preventDefault();
  });
  
});

// $("#things").submit(function(event) {
  // var input1 = $("input#thing1").val();
  // var input2 = $("input#thing2").val();
  // var input3 = $("input#thing3").val();
  // var input4 = $("input#thing4").val();
  // var favorites1 = [input1, input2, input3, input4]
  // var favorites2 = []

  // favorites2.push(input2, input3, input4);

  
  // $(".thing1").text(input2);
  // $(".thing2").text(input3);
  // $(".thing3").text(input4);
  
  // $(".answers").show();

  // event.preventDefault();
// });