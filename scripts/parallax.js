const parallaxBackground = document.querySelector('.parallax');

window.addEventListener('scroll', function() {
	var scrollY = window.scrollY;
	var parallaxLayers = Array.from(parallaxBackground.querySelectorAll('img'));
	var nonImageLayers = parallaxBackground.querySelectorAll('.layer')

	for (var i = 0; i < nonImageLayers.length; i++) {
		parallaxLayers.push(nonImageLayers[i]);
	}

	for (var i = 0; i < parallaxLayers.length; i++) {
		var layer = parallaxLayers[i];

		var speed = parseFloat(layer.getAttribute('data-speed'));
		var moveY = scrollY * speed;

		layer.style.transform = 'translateY(' + moveY + 'px)';
	}
});