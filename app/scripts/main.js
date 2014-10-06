$(document).ready(function() {
	$("#wrong").click(function() {
		$("#wrong-text").removeClass("hide")
		$("#note").removeClass("hide")
		$("#right-text").addClass("hide")
		$("img").addClass("hide")
	})

	$("#right").click(function() {
		$("#right-text").removeClass("hide")
		$("img").removeClass("hide")
		$("#wrong-text").addClass("hide")
		$("#note").addClass("hide")
	})

})