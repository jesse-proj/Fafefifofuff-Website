const bioWindow = document.querySelector('#bio-window');

window.addEventListener('scroll', function() {
	var scrollY = window.scrollY;
	var newOpacity = 1 - scrollY / 400;

	bioWindow.style.opacity = newOpacity;
});

