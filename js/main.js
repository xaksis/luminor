(function($){

	$(window).resize(function(){
		$(".panel").each(function(){
			$(this).css("width", $(window).width());
			$(this).css("height", $(window).height());
		});
	});

	var left_panel = $(".panel.left");
	var main_panel = $(".panel.main");
	var right_panel = $(".panel.right");
	var bottom_panel = $(".panel.below");

	$("#left-link").on("click", function(){
		left_panel.addClass("move-center");
		main_panel.addClass("move-right");
		//enableScroll();
		return false;
	});

	$("#right-link").on("click", function(){
		right_panel.addClass("move-center");
		main_panel.addClass("move-left");
		return false;
	});

	$("#below-link").on("click", function(){
		bottom_panel.addClass("move-center");
		main_panel.addClass("move-top");
		//enableScroll(bottom_panel);
		
		return false;
	});

	$("#left-back-link").on("click", function(){
		left_panel.removeClass("move-center");
		main_panel.removeClass("move-right");
		//disableScroll();
		return false;
	});

	$("#right-back-link").on("click", function(){
		right_panel.removeClass("move-center");
		main_panel.removeClass("move-left");
		return false;
	});

	$("#below-back-link").on("click", function(){
		bottom_panel.removeClass("move-center");
		main_panel.removeClass("move-top");
		//disableScroll();
		return false;
	});

	function enableScroll(panel){
		setTimeout(function(){
			panel.css("overflow-y", "visible");
		}, 600);
	}

	function disableScroll(panel){
		setTimeout(function(){
			panel.css("overflow-y", "hidden");
		}, 600);
	}

})( jQuery )