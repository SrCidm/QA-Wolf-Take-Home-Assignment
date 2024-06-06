const axios = require('axios');
const ObjectsToCsv = require('objects-to-csv');

async function saveHackerNewsArticles() {
  // Fetch top stories from Hacker News API
  const response = await axios.get('https://hacker-news.firebaseio.com/v0/topstories.json');
  const storyIDs = response.data;

  // Extract titles and URLs of top 10 articles
  const articles = [];
  for (const storyID of storyIDs.slice(0, 10)) {
    const articleResponse = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${storyID}.json`);
    const articleData = articleResponse.data;
    if (articleData.type === 'story') {
      articles.push({
        title: articleData.title,
        url: `https://news.ycombinator.com/item?id=${storyID}`,
      });
    }
  }

  // Save articles to CSV
  const csvData = new ObjectsToCsv(articles);
  await csvData.toDisk('./top_articles.csv', { append: false });
}

(async () => {
  await saveHackerNewsArticles();
})();
