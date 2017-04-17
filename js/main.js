function notify() {
  var email = $("#notify-email").val();
  $.post( "notify.php", {"notify-email" : email}, function( data ) {
    $( "#notify-form" ).hide();
    $( "#thank-you" ).show();
  });
}
