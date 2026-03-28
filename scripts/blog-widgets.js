const recentBlogsContainer = document.querySelector('#recent-blogs');
const moodDisplay = document.querySelector('#mood-display');
const taskDisplay = document.querySelector('#task-display');
const messageDisplay = document.querySelector('#message-display');
const dateDisplay = document.querySelector('#date-display');
const moodImgDisplay = document.querySelector('#mood-img-display');

const blogAnchor = document.querySelector('#blog-anchor');
blogAnchor.href = window.BLOG_URL;

fetch(window.LATEST_STATUS_URL)
 .then(response => {

    if (!response.ok) {
	throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
 })
 .catch(error => {
    console.warn('Using fallback data due to fetch failure:', error.message);

    return {
	mood: 'Neutral',
	message: 'N/A',
	task: 'N/A',
	datetime: 'N/A'
    };
 })
 .then(data => {
    moodDisplay.textContent = data.mood;
    taskDisplay.textContent = data.task;
    messageDisplay.textContent = '"' + data.message + '"';
    dateDisplay.textContent = new Date(data.datetime).toLocaleString(undefined, {               
	year: 'numeric',
	month: 'short',
	day: 'numeric'
    });
    moodImgDisplay.src = 'assets/moods/' + data.mood + '.gif';
 });

fetch(window.RECENT_BLOGS_URL)
 .then(response => {
    if (!response.ok) {
	throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
 })
 .catch(error => {
    console.warn('Using fallback data due to fetch failure:', error.message);

    return [];
 })
 .then(data => {
    data.forEach(post => {
	const postDiv = document.createElement('div');

	const title = document.createElement('p');
	title.classList.add('text-accent-color');
	title.textContent = post.title;

	postDiv.appendChild(title);

	const metaInfoContainer = document.createElement('div');
	metaInfoContainer.classList.add('flex-row');
	metaInfoContainer.classList.add('flex-space-between');

	const date = document.createElement('p');
	date.textContent = new Date(post.datetime).toLocaleString(undefined, {
	    year: 'numeric',
	    month: 'short',
	    day: 'numeric'
	});

	const time = document.createElement('p');
	time.textContent = new Date(post.datetime).toLocaleString(undefined, {
	    hour: '2-digit',
	    minute: '2-digit',
	    hour12: true   
	});

	metaInfoContainer.appendChild(date);
	metaInfoContainer.appendChild(time);

	const border = document.createElement('hr');

	postDiv.appendChild(metaInfoContainer);
	postDiv.appendChild(border);

	recentBlogsContainer.appendChild(postDiv);
    });
 });

