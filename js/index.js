$(document).ready(function() {
  $(".acchead").click(function() { /* opens and closes the on the .acchead following .accbody-element while toggling the .rotate-class */
    $(this).toggleClass("rotate").next(".accbody").toggleClass("accopen");
  });
  $(".showall").click(function() { /* opens all accbodys on .showall-button-click */
    $(".acchead").addClass("rotate");
    $(".accbody").addClass("accopen");
  });
  $(".hideall").click(function() { /* closes all accbodys on .showall-button-click */
    $(".acchead").removeClass("rotate");
    $(".accbody").removeClass("accopen");
  });
});
