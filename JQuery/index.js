$('h1').addClass('heading1');
$(document).on('keydown', function(event) {
    var pressedKey = event.key
    $('h1').text(pressedKey)
})