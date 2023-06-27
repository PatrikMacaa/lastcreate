
$(document).ready(function(){

  //Napojení knihovny wowJS
  new WOW().init();

    var button = $('#button');
    var modal = $('#modal');
    var close = $('#close');

    button.on('click', function(){
        modal.addClass('modal_active');
    });

    close.on('click', function(){
        modal.removeClass('modal_active');
    });
    
    //Napojení slideru

    $('.slider').slick({
        slidesToShow: 3,
        prevArrow: $('.arrows_left'),
        nextArrow: $('.arrows_right'),
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 760,
              settings: {
                slidesToShow: 1,
              }
            },
           
        ]
    });
        
});