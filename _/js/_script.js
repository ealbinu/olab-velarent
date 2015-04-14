$(function(){

	if($('.slider').length>0){
       $('.slider').fractionSlider({
			 	pager  			: true,
				'speedIn' : 600,
				'speedOut' : 600,
				 'timeout' : 4000
			 });
    }
    
	//Galeria
										
	Galleria.loadTheme('_/galleria/galleria.classic.min.js');
	Galleria.run('.galleria');
	Galleria.configure({
		imageCrop: true,
		transition: 'fadeslide',
		easing: 'galleriaOut'
	});
	
});