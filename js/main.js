$(function() {
  var target;
  var mySlider = $("input.slider").slider( { min: 0, max: 100, step: 5, value: _.random(5, 95) } );
  $('#slider-modal').modal({ backdrop: 'static', keyboard : false, show: true });

  mySlider.on('slideStart', function(e){
    do
      target = Math.floor(Math.random()* 19) * 5;
    while(target === e.value);

    $('#target').text("Your target is " + target)

  })

  mySlider.on('slideStop', function(e){
    if(e.value === target){

      $('#slider-modal').css('visibility', 'hidden');
    }
    else{
      $('#message').text("You did not match the slider to the ")
    }
  })
});
