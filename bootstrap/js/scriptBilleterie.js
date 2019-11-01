$(document).ready(function(){
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
