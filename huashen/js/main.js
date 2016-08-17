$(function(){
	//menu click
	$("[data-menu]").click(function(){
		//alert($('.' + $(this).attr('data-menu')).offset().top);
		jQuery("html,body").animate({
		    scrollTop: $('.' + $(this).attr('data-menu')).offset().top
		},800);
		return false;
	});

});

$(window).scroll(function(){
	//gotop
	console.log($(window).scrollTop());
	if($(window).scrollTop() > '100'){
		$('.bottom-btn').css({
			bottom: '6em',
			opacity: '1'
		});
	}else{

		$('.bottom-btn').css({
			bottom: '-50em',
			opacity: '0'
		});
	}
});