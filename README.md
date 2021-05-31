# newsApp

this application brings the dashboard to check news. it has filtering capacity by country, category.
this application also has search functionality to search any keywords.it will filter the news dashboard list with the news which contain that search keyword.

application deployed on heroku : https://morning-sea-90020.herokuapp.com/

![image](https://user-images.githubusercontent.com/28824571/120118295-630a7780-c1af-11eb-80dd-e33215a38aec.png)

this application runs backend(node/express) and frontend(react) on same server. it uses https://newsapi.org/ for getting news data. 

Thanks https://newsapi.org/ :)

node/Express serves the react application at root path.

to Get started:

get the API key from 'https://newsapi.org/' and replace with aAPI key at routes/index.js

# at root folder
npm install

this repository contains "app" folder which contains our react code. it has build folder which is getting served by node/express.

Thanks
