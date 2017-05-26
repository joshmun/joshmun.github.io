$(document).ready(function(){
  if($(window).width() < $(window).height()){
    $('body').html("<div class='media'><h1>This website is best viewed either on desktop or landscape mode on your mobile device. Thanks!</h1></div>");
    $('div.media').show();
  }
  else if (($(window).width() < 960)){
   $('body').html("<div class='media'><h1>This website is best viewed on screens wider than this. Sorry!</h1></div>");
    $('div.media').show(); 
  }
  else if(($(window).height() < 630)){
    $('body').html("<div class='media'><h1>Sorry! You're screen is too short. This website is best viewed on desktop, thanks!</h1></div>");
    $('div.media').show();
  }
  else {
    $('div.media').hide();
  }
})
