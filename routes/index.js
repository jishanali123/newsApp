const express = require('express');
const router = express.Router();
const NewsAPI = require('newsapi');
// const newsapi = new NewsAPI('f078ce65f8bf4d7a9350b4ed571c3832');
const newsapi = new NewsAPI('4e571a41c07a46528dc8f07add944338');
// const https = require('https');

// root path will serve our react app from build folder
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'app', 'build', 'index.html'));
});

router.post('/sources', (req, res) => {
    const category = req.body.category;
    newsapi.v2.sources({
        category: category
    }).then(response => {
        res.json(response);
    }).catch((error) => {
        res.json(error);
    });
});

router.post('/everything', (req, res) => {
    const search = req.body.search;
    newsapi.v2.everything({
        q: search
    }).then(response => {
        res.json(response);
    });
});

router.route('/topHeadlines')
    .get((req, res) => {
        newsapi.v2.topHeadlines({
            country: 'gb'
        }).then(response => {
            console.log('s:', response);
            res.json(response);
        }).catch((error) => {
            console.log('s:', error);
            res.json(error);
        });

        /* by nodejs https request //
        const options = {
          hostname: 'newsapi.org',
          path: '/v2/sources?category=technology&language=en&country=us&apiKey=f078ce65f8bf4d7a9350b4ed571c3832',
          method: 'GET'
        }
      
        const request = https.request(options, res => {
          console.log(`statusCode: ${res.statusCode}`)
      
          res.on('data', d => {
            process.stdout.write(d)
          })
        })
      
        request.on('error', error => {
          console.error(error)
        })
      
        request.end()
        */
    })
    .post((req, res) => {
        const country = req.body.country;
        newsapi.v2.topHeadlines({
            country: country
        }).then(response => {
            res.json(response);
        });
    });

module.exports = router;