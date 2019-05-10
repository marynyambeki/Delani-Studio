$(document).ready(function() {
    $(".clickable").click(function() {
      $("#design-showing").slideToggle();
      $("#design-hidden").slideToggle()
    });
  });
  $(document).ready(function() {
    $(".click").click(function() {
      $("#dev-showing").slideToggle();
      $("#dev-hidden").slideToggle()
    });
  }); 
  $(document).ready(function() {
    $(".able").click(function() {
      $("#pro-showing").slideToggle();
      $("#pro-hidden").slideToggle()
    });
  
  });

  $(document).ready(function(){
    $(".col").hover(function(){
      $(this).children(".hide").toggle();
      });
  });
   