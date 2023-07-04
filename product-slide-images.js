$('.right_arrow>img').on('click',function(){
$('ul.product__media-list>li.is-active').next('li').addClass('is-active').prev('li').removeClass('is-active');
});

$('.left_arrow>img').on('click',function(){
$('ul.product__media-list>li.is-active').prev('li').addClass('is-active').next('li').removeClass('is-active');
});
