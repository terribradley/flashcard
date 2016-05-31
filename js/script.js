$(document).ready(function(){
  $(".head").click(function() {
    $(".definition").slideToggle();
    $(".head").slideToggle();
  });

  $(".definition").click(function() {
    $(".definition").slideToggle();
    $(".head").slideToggle();
  });

});
