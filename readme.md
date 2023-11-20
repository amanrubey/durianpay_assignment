Createad 1) API and 2) A small web interface to access the api.
Whole application was made using NodeJs, ExpressJs and Cheerio for scraping.
The APIs query parameters are title, website, filter, topN. 
The API Response is JSON which has products array containing title, url_to_product, price, description, total_review_count, ratings and website 
So an example url to hit the API will be http://localhost:4000/do?title=iphone13&website=flipkart&topN=4&filter=hp
<img width="1439" alt="hitting_api_directly" src="https://github.com/amanrubey/durianpay_assignment/assets/58990863/f235768c-8f68-4779-b354-a51fbf623d50">

This project works absolutely fine locally.
Majority of my time went in trying to deploy this API which ended up in fruitless endeavour. I tried too hard but couldn't get past the AxiosError. I tried to deploy on multiple sites spending countless hours in debugging but it seems I will be requiring help from someone who's very experienced in this.
(Find image attached of deployment errors below)

2) The Web Interface is simple. It just takes input values from users namely title, filter, topN and websites to consider it from. This runs on port 3000
<img width="1028" alt="web_interface" src="https://github.com/amanrubey/durianpay_assignment/assets/58990863/72fa7f7c-cd61-49a7-9ca2-918a076907a6">

<img width="1439" alt="result_after_inputing" src="https://github.com/amanrubey/durianpay_assignment/assets/58990863/079877a9-b6c1-4292-b566-4909929250f3">


To setup the project:
  1. npm i express cheerio axios body-parser ejs
  2. add this line in package.json file "type": "module",
  3. on one terminal run this command node api.js
  4. on second terminal run this command node real.js

Real.js will render the index.ejs file through which we take input from user and this data is sent to the api.js via axios.get which sends back a json file.
The logic of api.js is to tap into the query parameters and for each website call its own function 
Each website is having its own function where I have scraped title,price,ratings,total_review_counts, url_of_product and description of the item.
Every product details is pushed to a resultantArray which is storing all js objects of each product.
We do this for each website chosen.
And finally we sort the result according to lowest price, highest price, highest rating, highest review count. After this we pick the first N items from the resultantArray and make a js object from thus info and convert it to json.
Due to severe time constraints I was only able to make functions for flipkart, snapdeal, shopclues. Had the deployment issue not taken so much time of mine, I would have also scraped snapdeal, shopclues. Also to note, I tried so much to scrape Amazon, but it was something which I realized couldn't be done in given time frame. Amazon.in has lots many check to make it unscrapable. My time got wasted in trying to scrape Amazon.in
This project taught me so much in so less time. I'm thankful to Durianpay for this assignment. I would love to learn more about backend.
I thoroughly enjoyed making this project.
<img width="1440" alt="AxiosError" src="https://github.com/amanrubey/durianpay_assignment/assets/58990863/2af5e95b-79ce-41db-8d0c-71976235ba22">
