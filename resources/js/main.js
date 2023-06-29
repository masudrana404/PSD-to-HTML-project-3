$(document).ready(function(){
    $('nav li a').click(function(){
        $("a").removeClass('active');
        $(this).addClass('active');
    });

    //OWL CAROUSEL//

    $('.owl-carousel').owlCarousel({
        items: 4,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive:{
            200:{
                items: 1,
            },
            480:{
                items: 1,
            },
            768:{
                items: 2,
            },

            980:{
                items: 3,
            },

            1024:{
                items: 4,
            },


            1200:{
                items: 4,
            },

        }


    });

    // WAYPOINT

    $('.js_home_content').waypoint(function(direction){
        if(direction == "down"){
            $('nav').addClass('sticky');
            
        }else{
            $('nav').removeClass('sticky');
        }
    });

    // MOBILE DRROPDOWN MENU

    $('.overlay_menu a:nth-child(3)').click(function(){
        $('.mobile_dropdown_submenu').slideToggle();
        $('.dropdown_icon').toggleClass('rotate');

    });

    //SMOOTH SCROLL FOR IE/SAFARI/EDGE//

    $('a').on('click', function(event){
        if((this).hash !== "");
        event.preventDefault();
        let hash = this.hash;

        $('html,body').animate({
            scrollTop : $(hash).offset().top
        },500, function(){
            window.location.hash = hash;
        });
    });

});

//OVERLAY MENU

 function openNav() {
    document.getElementById('my_nav').style.width = "70%";
 }
 function closeNav() {
    document.getElementById('my_nav').style.width = "0%";
 }
