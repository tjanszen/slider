$(function() {
  var mySlider = $("input.slider").slider( { min: 0, max: 100, step: 5, value: _.random(5, 95) } );
  $('#slider-modal').modal({ backdrop: 'static', keyboard : false, show: true });
});
