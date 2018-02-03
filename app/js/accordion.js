$(document).ready(function() {
	$('.accordion > p').click(function() {
		let findArticle = $(this).next('article');

		if (findArticle.is(':visible')){
        findArticle.slideUp(); 
		}

		else {
			findArticle.slideDown();
		}
        
        let findArrow = $(this).next('.arrow-down');

        if (findArrow.is(':visible')){
        findArrow.add('arrow-up');
        }

        else {
        findArrow.remove('arrow-up');	
        }
	});
});

