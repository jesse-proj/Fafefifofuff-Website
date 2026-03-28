const graphFallback = document.querySelector('.github-graph-fallback');
const graphRoot = document.querySelector('.github-graph');

fetch(window.GITHUB_DATA_URL)
.then(response => {

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json()
})
.catch(error => {
    console.warn('Using fallback API due to fetch failure:', error.message);

    graphFallback.classList.add('active'); // Make this work in the CSS

    return {
	status: 500 
    }
})
.then(data => {
    if (data.status == 500) {
        return undefined;
    }
    
    graphRoot.classList.add('active');

    contributionWeeks = data.data.viewer.contributionsCollection.contributionCalendar.weeks;
    
    contributionWeeks.forEach(week => {
    	contributionDays = week.contributionDays;

	contributionDays.forEach(days => {
	    dayDiv = document.createElement('div');

	    dayDiv.classList.add(days.contributionLevel);
	    
	    graphRoot.appendChild(dayDiv);
	});
    });
})







