
$(document).ready(function() {
	$('.arrow-down').click(function() {
		let findArticle = $(this).next('article');
		if (findArticle.is(':visible')){
			findArticle.slideUp(); 
		}
		else {
			findArticle.slideDown();
		}
		$(this).toggleClass('arrow-up');
	});
});

