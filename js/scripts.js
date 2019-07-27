//Single button control of carousel-->
$(document).ready(function(){
    $('#mycarousel').carousel({interval:2000});
    $('#carouselButton').click(function(){
        if($('#carouselButton').children('span').hasClass('fa-pause')){
            $('#mycarousel').carousel('pause');
            $('#carouselButton').children('span').removeClass('fa-pause');
            $('#carouselButton').children('span').addClass('fa-play');
        }
        else if ($('#carouselButton').children('span').hasClass('fa-play')){
            $('#mycarousel').carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa-play');
            $('#carouselButton').children('span').addClass('fa-pause');
        }
    });
    //For Login Modal
    var loginBtn=$('.loginButton');            
    loginBtn.click(function(){
        $("#loginModal").modal('show');
    })
    //For Form Modal
    var formBtn=$('.formButton');            
    formBtn.click(function(){
        $("#formModal").modal('show');
    })

});


//<!-- Two button play pause carousel-->


$(document).ready(function(){
    $('#mycarousel').carousel({interval:2000});
    $('#carousel-pause').click(function(){
        $('#mycarousel').carousel('pause');
    });
    $('#carousel-play').click(function(){
        $('#mycarousel').carousel('cycle');
    });
});

/** /<!-- tooltip pop-up -->
<!-- When document is ready then apply following function. Following function says: 
select element that has attribute data-toggle with value tooltip and apply function
tooltip to it-->**/
/*
$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
});
    */