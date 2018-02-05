
let $price = $('.product__price > p');
let $productCharacteristics = $('.product__characteristic');

$productCharacteristics.each(function() {
	$(this).click(function() {
		let $this = $(this);
      $productCharacteristics.find('p');// снял классы со всех характеристик
      $this.find('p');// ставит на текущую характеристику

      $price.html($this.data('price'))

      $productCharacteristics.find('div').removeClass('product__checkbox-black'); // снял классы со всех характеристик
      $this.find('div').addClass('product__checkbox-black'); // ставит на текущую характеристику
  })
})



