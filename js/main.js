
let header_height = $('header').height();
window.onscroll = Nav_fixed
	let wrapper_header = true ;
function Nav_fixed() {


	if (window.pageYOffset >= '72') {
		if(!wrapper_header) {
			$("header").wrap("<div class='wrapper_for_fixed wrapper_for_fixed_header'></div>");
			$("main").css('margin-top',header_height);
			$('.header_nav').css('display','flex');
			wrapper_header = true;
		}
	}

		
			if (window.pageYOffset < '144') {
				if(wrapper_header) {
						$('.wrapper_for_fixed_header').children().unwrap();
						$("main").css('margin-top','0px');
						if ($(window).width() >= '1200'){
						$('.header_nav').css('display','none')
						}
						wrapper_header = false;
					}



	}
	
};

$(document).ready(function(){
    $("nav").on("click","a", function (event) {
        // исключаем стандартную реакцию браузера
        event.preventDefault();
 
        // получем идентификатор блока из атрибута href
        let id  = $(this).attr('href'),
 
        // находим высоту, на которой расположен блок
            top = $(id).offset().top-100;
         
        // анимируем переход к блоку, время: 800 мс
        $('body,html').animate({scrollTop: top}, 800);
    });
});

$('.desktop_activate').on('click', function() {
	$('.desktop').css('display','grid');
	$('.phone').css('display','none');
	$('.desktop_activate').addClass('active')
	$('.mobile_activate').removeClass('active')

});
$('.mobile_activate').on('click',function() {
	$('.phone').css('display','grid');
	$('.desktop').css('display','none');
	$('.desktop_activate').removeClass('active')
	$('.mobile_activate').addClass('active')
});

$('.activat_drop .list_dropbox p').on('click', function() {
	$(this).closest('.UI_drop_box_container').children('p').children('.preview').addClass('preview_off')
	$(this).closest('.UI_drop_box_container').children('p').children('.value_dropbox').text($(this).text())
	$(this).parent().parent().children().children('p').removeClass('activate')
	$(this).addClass('activate')
	
});
$('main .UI_accordion .wrapper_accordion').on('click', function () {
$(this).children('.content_acordion').toggleClass('content_acordion_visable')
$(this).children('.acordion').children('.P_16').toggleClass('change_color')
$(this).children('.acordion').toggleClass('onclick_acardeon')
});
$('.menu_close').on('click', function() {
	$('.popap').css('display','none')
	$('body').css('overflow','auto')

})
$('.header_ico_menu').on('click', function() {
	$('.popap').css('display','block')
		$('body').css('overflow','hidden')
})





