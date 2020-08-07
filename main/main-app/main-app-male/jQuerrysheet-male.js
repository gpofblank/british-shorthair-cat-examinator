$(document).ready(function() {
  $('.img-ears').click(function() {
     $("p#ears").toggleClass("shown");
 });
 $('.img-eyes').click(function() {
    $("p#eyes").toggleClass("shown");
 });
 $('.img-paws').click(function() {
    $("p#paws").toggleClass("shown");
 });
 $('.img-tail').click(function() {
    $("p#tail").toggleClass("shown");
});
if ($(window).width() < 800) {
   $("div").hide();
   alert("Please Go Full Screen (increase width to 800+px) and refresh the page");
}
else {
  $("div").show();
}
$(window).on('resize', function(){
      var win = $(this);
      if (win.width() <= 800) {
        $("#sorry800").removeClass("hidden");
        $("#sorry800").addClass("shown");
        $("div").not("#sorry800").hide();

      }
      else {
        $("div").show();
        $("#sorry800").removeClass("shown");
        $("#sorry800").addClass("hidden");
      }
});
});
