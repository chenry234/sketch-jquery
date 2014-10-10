$(document).ready(function() {
  $('body').append('<div class="container"></div>')
  for(var i = 0; i < 32; i++) {
  $('.container').append('<ul></ul>');
  }

  for(var i = 0; i < 32; i++) {
  $('ul').append('<li></li>');
  }

  $('li').css({
    display:'inline-block',
    height: '15px',
    width: '15px',
    border: '1px black solid',
    margin: '0 1px',
  }).on("mouseover", function() {
    $(this).css("background-color", "blue");
  });

  $('ul').css({
    'padding': '0',
    'margin': '0'
  });


});
