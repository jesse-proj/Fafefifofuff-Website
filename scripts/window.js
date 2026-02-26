const renderedWindows = [];

function renderWindows() {
	const windowDivs = document.querySelectorAll('.window');

	for(var i = 0; i < windowDivs.length; i++) {
		if (renderedWindows.includes(windowDivs[i])) {
			continue;
		}

		var windowTitle = windowDivs[i].getAttribute('data-title');

		var titleDiv = document.createElement('div');
		titleDiv.classList.add('window-title');
		titleDiv.innerHTML = '<p>' + windowTitle + ' </p>'

		windowDivs[i].prepend(titleDiv);

		renderedWindows.push(windowDivs[i]);
	}
}

renderWindows();