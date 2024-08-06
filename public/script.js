

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

