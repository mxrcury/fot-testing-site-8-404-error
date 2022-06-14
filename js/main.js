$('.header_share').hover(
    function(){
        $('.header_share-sm').addClass('header_share_sm-active');
    }, function(){
        $('.header_share-sm').removeClass('header_share_sm-active')
    }
);
// header_share
$('.contacts_header_share').hover(function(){
    $('.contacts_header_share-sm').addClass('contacts_header_share-sm-active')
}, function(){
    $('.contacts_header_share-sm').removeClass('.contacts_header_share-sm-active')
}
)

$('.prev_arrow-container').hover(
    function(){
        $('.prev_arrow').addClass('prev_arrow_active')
    }, function(){
        $('.prev_arrow').removeClass('prev_arrow_active')
    }
);
$('.next_arrow-container').hover(
    function(){
        $('.next_arrow').addClass('next_arrow_active')
    }, function(){
        $('.next_arrow').removeClass('next_arrow_active')
    }
);


$('.slides').slick({
    fade:true,
    prevArrow:'.prev_arrow-container',
    nextArrow:'.next_arrow-container'
})