const form = document.getElementById('searchForm');
const resultsDiv = document.getElementById('results');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const query = document.getElementById('query').value.trim();

    if (query === '') {
        alert('Please enter a search term');
        return;
    }

    try {
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
        const data = await response.json();

        resultsDiv.innerHTML = '';

        if (data.length === 0) {
            resultsDiv.innerHTML = '<p>No results found.</p>';
            return;
        }

        data.forEach(tvShow => {
            const article = document.createElement('article');

            const nameElement = document.createElement('h2');
            nameElement.textContent = tvShow.show.name;
            article.appendChild(nameElement);

            const linkElement = document.createElement('a');
            linkElement.href = tvShow.show.url;
            linkElement.target = '_blank';
            linkElement.textContent = 'View Details';
            article.appendChild(linkElement);

            if (tvShow.show.image?.medium) {
                const imageElement = document.createElement('img');
                imageElement.src = tvShow.show.image.medium;
                imageElement.alt = tvShow.show.name;
                article.appendChild(imageElement);
            }

            if (tvShow.show.summary) {
                const summaryElement = document.createElement('div');
                summaryElement.innerHTML = tvShow.show.summary;
                article.appendChild(summaryElement);
            }

            resultsDiv.appendChild(article);
        });

    } catch (error) {
        console.error('Error fetching data:', error);
        resultsDiv.innerHTML = '<p>Something went wrong. Please try again later.</p>';
    }
});