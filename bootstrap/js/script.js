$(document).ready(function(){

	$(".opacty-events").mouseover(function(){
    	$(".date-event").css("visibility", "hidden");
			$(".opacty-events").css("background", "rgba(33, 47, 61, .8)");
			$(".button-plus-view").css("visibility", "visible");
	});

	$(".opacty-events").mouseout(function(){
    	$(".date-event").css("visibility", "visible");
			$(".opacty-events").css("background", "rgba(33, 47, 61, .6)");
				$(".button-plus-view").css("visibility", "hidden");
	});

	$(".opacty-events-two").mouseover(function(){
    	$(".date-event-two").css("visibility", "hidden");
			$(".opacty-events-two").css("background", "rgba(33, 47, 61, .8)");
			$(".button-plus-view-two").css("visibility", "visible");
	});

	$(".opacty-events-two").mouseout(function(){
    	$(".date-event-two").css("visibility", "visible");
			$(".opacty-events-two").css("background", "rgba(33, 47, 61, .6)");
				$(".button-plus-view-two").css("visibility", "hidden");
	});

	$(".opacty-events-three").mouseover(function(){
    	$(".date-event-three").css("visibility", "hidden");
			$(".opacty-events-three").css("background", "rgba(33, 47, 61, .8)");
			$(".button-plus-view-three").css("visibility", "visible");
	});

	$(".opacty-events-three").mouseout(function(){
    	$(".date-event-three").css("visibility", "visible");
			$(".opacty-events-three").css("background", "rgba(33, 47, 61, .6)");
				$(".button-plus-view-three").css("visibility", "hidden");
	});

	$(".opacty-events-four").mouseover(function(){
			$(".date-event-four").css("visibility", "hidden");
			$(".opacty-events-four").css("background", "rgba(33, 47, 61, .8)");
			$(".button-plus-view-four").css("visibility", "visible");
	});

	$(".opacty-events-four").mouseout(function(){
			$(".date-event-four").css("visibility", "visible");
			$(".opacty-events-four").css("background", "rgba(33, 47, 61, .6)");
				$(".button-plus-view-four").css("visibility", "hidden");
	});

	$(".opacty-events-five").mouseover(function(){
			$(".date-event-five").css("visibility", "hidden");
			$(".opacty-events-five").css("background", "rgba(33, 47, 61, .8)");
			$(".button-plus-view-five").css("visibility", "visible");
	});

	$(".opacty-events-five").mouseout(function(){
			$(".date-event-five").css("visibility", "visible");
			$(".opacty-events-five").css("background", "rgba(33, 47, 61, .6)");
				$(".button-plus-view-five").css("visibility", "hidden");
	});

	$(".opacty-events-six").mouseover(function(){
			$(".date-event-six").css("visibility", "hidden");
			$(".opacty-events-six").css("background", "rgba(33, 47, 61, .8)");
			$(".button-plus-view-six").css("visibility", "visible");
	});

	$(".opacty-events-six").mouseout(function(){
			$(".date-event-six").css("visibility", "visible");
			$(".opacty-events-six").css("background", "rgba(33, 47, 61, .6)");
				$(".button-plus-view-six").css("visibility", "hidden");
	});

	$(".arrow-down").click(function(){
			$(".arrow-down").css("display", "none");
			$(".arrow-up").css("display", "block");
			$(".arrow-up").css("margin-bottom", "1.5%");
			$(".events-container-hidden").slideDown(1000);
			$(".events-container-hidden").css("display", "block");
	});

	$(".arrow-up").click(function(){
			$(".arrow-up").css("display", "none");
			$(".arrow-down").css("display", "block");
			$(".arrow-down").css("margin-bottom", "0%");
			$(".events-container-hidden").slideUp(1000, function(){
				$(".events-container-hidden").css("display", "none");
			});
	});

//ANIMATION OF VIEWS EVENTS EXPLAINATION
	$(".button-view").click(function(){
    	$(".great-opacity-container").css("display", "block");
			$(".views").css("display", "block");
	});

	//ANIMATION OF VIEWS EVENTS EXPLAINATION
	$(".great-opacity-container").click(function(){
    	$(".great-opacity-container").css("display", "none");
			$(".views").css("display", "none");
	});

//ANIMATION OF LAST EVENTS VIEWS
	$(".video-button-recent").click(function(){
    	$(".great-opacity-container").css("display", "block");
			$(".views-last-event").css("display", "block");
	});

//ANIMATION OF LAST EVENTS VIEWS
	$(".great-opacity-container").click(function(){
    	$(".great-opacity-container").css("display", "none");
			$(".views-last-event").css("display", "none");
	});

	//BILLETERIE PAGE
		$(".button-participate").click(function(){
				$(".container-info-paiement-event").css("display", "block");
				$(".mode-paiement-title").css("display", "block");
				$(".mode-paiement").css("display", "block");
		});

		$(".radio-omoney").click(function(){
				$(".omoney").css("display", "block");
				$(".inputs-omoney").fadeIn(2000);
				$(".inputs-omoney").css("display", "block");
				$(".mtn-money").css("display", "none");
				$(".inputs-mtn-money").css("display", "none");

		});

		$(".radio-mtn-money").click(function(){
				$(".mtn-money").css("display", "block");
				$(".inputs-mtn-money").fadeIn(2000);
				$(".inputs-mtn-money").css("display", "block");
				$(".omoney").css("display", "none");
				$(".inputs-omoney").css("display", "none");

		});

});
