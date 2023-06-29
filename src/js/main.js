
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

    //Validace formulářů

    $('#brief-form').validate({
      rules: {
        username: "required" ,
        email: {
          required: true,
          email: true,
        }
      },
      messages:{
        username: "Uved'te vaše jméno",
        phone: "Uved'te váše telefonní číslo",
        email: "Uved'te váš email"
      }
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