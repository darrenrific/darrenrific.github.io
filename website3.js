function activate(elem) {
	return function () {
		$(".active").hide("drop", {direction: "left"}, 650, function () {elem.show("drop", {direction: "right"}, 650);}).removeClass("active");
		elem.addClass("active");
	}
}

$(document).ready(function() {
	$("#portfolio-link").click(activate($("#portfolio")));
	$("#about-link").click(activate($("#aboutme")));
	$("#contact-link").click(activate($("#contact")));
	$("#home-link").click(activate($("#main")));
	$("#videos-link").click(activate($("#vids")));

	// make clicking on thumbnails do stuff
	$(".thumbs img").each(function () {
		// Adding handler
		$(this).hover(function () {
			largeSrc = $(this).attr("src").replace("thumb.png", ".png");
			$("#mainimage img").attr("src", largeSrc);
		});
	});

	// preload images for faster response
	$(".thumbs img").each(function () {
		$('<img/>')[0].src = $(this).attr("src").replace("thumb.png", ".png");
	});
});
