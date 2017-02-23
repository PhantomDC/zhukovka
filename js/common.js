$(document).ready(function(e){

	var owl = $(".bg_slider");
	owl.owlCarousel({
		items:1,
		loop: true
	});

	$(".nav_slide").on("click",function(e){
		e.preventDefault();

		if($(this).hasClass("next")){

			owl.trigger("next.owl.carousel");

		}
		else{
			owl.trigger("prev.owl.carousel");
		}
	});

	// Show Hide mnu

	$(".toggle_mnu").on("click",function(e){

		e.preventDefault();

		$(".mnu_wrap").toggleClass("fade_out");

	});


});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});
