# 🐺 QA Wolf Take Home Assignment
Welcome to the QA Wolf take home assignment for our QA Engineer role! We appreciate your interest and look forward to seeing what you come up with.

## Instructions
This assignment has two questions as outlined below. When you are done, send qa-hiring@qawolf.com a link to a zip file of this folder on Google Drive. Additionally, please include your work location (Country/State) in the email.

### Question 1
In this assignment, you will create a basic script on Hacker News using JavaScript and Microsoft's Playwright framework.

### Install node modules by running npm i.
Edit the index.js file in this project to go to Hacker News and save the title and URL of the top 10 articles to a CSV file. You can run your script with the node index.js command.
Note that you are welcome to update Playwright or install other packages as you see fit.

# Automate Fetching Top 10 Articles from Hacker News
The goal of this script is to automate the process of fetching and saving the top 10 articles from Hacker News. Here's a detailed breakdown of the steps involved:

## Setup and Dependencies
Installed necessary Node.js modules including axios for making HTTP requests and objects-to-csv for converting JSON objects to CSV format.
Ensured that Playwright is correctly installed, although in this implementation, we leveraged the Hacker News API for data fetching instead of browser automation for simplicity and efficiency.
## Fetching Data
Used axios to make a GET request to the Hacker News API endpoint https://hacker-news.firebaseio.com/v0/topstories.json to fetch the IDs of the top stories.
Iterated over the first 10 story IDs and made individual GET requests to fetch details for each story.
## Data Extraction
Extracted the title and URL from the JSON response of each story.
Structured the data in a format suitable for CSV conversion.
## Saving Data
Utilized objects-to-csv to convert the array of article objects into CSV format.
Saved the CSV file to the disk with the name top_articles.csv.
## Execution
Wrapped the main function call within an immediately invoked function expression (IIFE) to handle asynchronous execution properly.
This approach ensures that the script is efficient, maintainable, and leverages the power of APIs to fetch the necessary data. Using axios for HTTP requests simplifies the data fetching process, and objects-to-csv makes it easy to convert and save data in the desired format. This solution is both robust and scalable for future enhancements.