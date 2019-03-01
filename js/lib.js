(function ( $ ) {	
	// default settings
	var defaults={
		container:"#image-Slider",
		nextArrow:"#next",
		prevArrow:"#prev"
	}
	
	var slider = $(defaults.container);
	var nextSlide = $(defaults.nextArrow);
	var prevSlide = $(defaults.prevArrow);
	var sliderWidth = slider.width();
	var activeSlide = 0;
	var slideamount = 0;
	
    $.fn.slider = function( data ) {
		var sliderItems = '';	
		$.each(sliderData, function( key, value ) {
			sliderItems += "<div class='slide-container' style='width:"+slider.width()+"px'>"+ "<h1>"+value.name+"</h1>" + "<a href="+value.linkUrl+"><img src="+value.imageUrl+" />" + "</a></div>";
		})		
		slider.html(sliderItems).css({width:slider.children().length * sliderWidth+"px",position:'absolute'});
	}
	var slidefunction = function(_direction){				
		var activeSlide1 = _direction === '-' ? activeSlide+=1 : activeSlide-=1;
		slider.animate({left:"-"+sliderWidth*activeSlide1+"px"});
	}
	
	nextSlide.click(function(){	
		$(slider.children()[activeSlide]).next('div').length ? slidefunction("-") : null;
	})
	
	prevSlide.click(function(){
		$(slider.children()[activeSlide]).prev('div').length ? slidefunction("+") : null
	})
	
}( jQuery ));