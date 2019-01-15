var element = document.getElementById("darkFsContainer1");
var element2 = document.getElementById("myWork");
window.onload = checkScroll();



$(function() {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 50) {
			$('body').addClass('changeColor');
	        element.style.visibility = "hidden";
	        element2.style.visibility = "visible";
        }
		if ($(this).scrollTop() < 50) {
	        $('body').removeClass('changeColor');
	        element.style.visibility = "visible";
	        element2.style.visibility = "hidden";
        }
	});
});

function checkScroll() {
	if ($(window).scrollTop() > 50) {
		$('body').addClass('changeColor');
		element.style.visibility = "hidden";
		element2.style.visibility = "visible";
	}
	if ($(window).scrollTop() < 50) {
		$('body').removeClass('changeColor');
		element.style.visibility = "visible";
		element2.style.visibility = "hidden";
	}
};


