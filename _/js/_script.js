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
	if($('#galleryjsm').length>0){
		$('#galleryjsm').jmslideshow();
	}
});