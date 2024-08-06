

    async function loadArticles() {
        const response = await fetch('/articles');
        const articles = await response.json();
        articlesList.innerHTML = '';

        articles.forEach(article => {
            const articleItem = document.createElement('li');
            articleItem.innerHTML = `
                <h2>${article.title}</h2>
                <p>${article.content}</p>
                ${article.image_url ? `<img src="${article.image_url}" alt="Article Image">` : ''}
            `;
            articlesList.appendChild(articleItem);
        });
    }

    loadArticles();

    document.addEventListener('DOMContentLoaded', () => {
        const newTalkButton = document.getElementById('newTalkButton');
        const randomTalkElement = document.getElementById('randomTalk');
    
        newTalkButton.addEventListener('click', async () => {
            try {
                // Fetch a new random talk from the server
                const response = await fetch('/randomtalk');
                const data = await response.json();
                
                // Update the random talk section with the new data
                randomTalkElement.textContent = data.subjecttalk;
            } catch (error) {
                console.error('Error fetching new talk:', error);
            }
        });
    });