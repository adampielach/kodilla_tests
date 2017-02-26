jQuery(document).ready(function ($) {
  
//   Get and set elements data
  
  var sliderElem = $('.slider ul');
  var sliderItems = $('.slider ul li');
  var slidesQuantity = sliderItems.length;
  var slidesWidth = sliderItems.width();
  var sliderWidth = slidesQuantity * slidesWidth;
  var currentSlide = 0;
 

  sliderItems.each(function($i, element) {
    var setIndex = ++$i * 2;
    $('<div class="bullet"></div>').appendTo($('.slider .controls'));
    $('.slider .controls').css("left",  (48 - setIndex + "%"));
    $('.slider .controls .bullet').attr("data-target", "#carousel");
    $(element).attr("data-slide", $i);
  });
  
  $('body').on('click', '.bullet', function(){
    var $this = $(this);
    var $siblings = $this.parent().children();
    var position = $siblings.index($this);
    // console.log(position);
    changeFocus(position);
  });
  if ($('.slider .button.current').index() === 0) {
    sliderElem.css({width: sliderWidth, left: 0});
  } else {
    sliderElem.css({width: sliderWidth, left: - slidesWidth});
  }
  $('.slider ul li:last-child').prependTo(sliderElem);

//   Slider movement functions
  
  function changeFocus(index) {
    $('.slider ul li').removeClass('current').eq(index).addClass('current');
    $('.bullet').removeClass('current').eq(index).addClass('current');
    currentSlide = index;
    transition(currentSlide);
  }
  
  function transition (slidePosition) {
    sliderElem.animate(
      {'marginLeft': '-' + (slidePosition * slidesWidth) + 'px'
    }, function() {
      console.log('asd');
    });
    console.log(slidePosition);
  }
  
 function moveLeft() {
  sliderElem.animate({marginLeft: slidesWidth}, function() {
     $('.slider ul li:last-child').prependTo(sliderElem);
    sliderElem.css({marginLeft: ''});
   });
 }
  
 function moveRight() {
   sliderElem.animate({marginLeft: - slidesWidth}, function() {
     $('.slider ul li:first-child').appendTo(sliderElem);
     sliderElem.css({marginLeft: ''});
   });
 }
  
//  Prev and Next buttons handlers
  
  $('.slider button.left').click(function() {
    moveLeft();
  });
  
  $('.slider button.right').click(function() {
    moveRight();
  });
  
  $('.slider .controls .bullet').first().addClass('current');
  $('.slider ul li').first().addClass('current');
  
});