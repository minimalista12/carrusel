$(document).ready(function(){

   var imgItems = $('.slider li').length;

    for(i = 1; i <= imgItems; i++){
    	
     $('.pagination').append('<li><span class="fa fa-star"></span></li>');

     }

	$('.slider li').hide();
	$('.slider li:first').show();
	$('.pagination li:first').css({'color':'blue'});
 
	$('.pagination li').click(pagination);
	$('.right span').click(nextSlider);
	$('.left span').click(prevSlider);

});