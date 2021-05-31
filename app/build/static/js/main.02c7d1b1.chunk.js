(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{106:function(e,t,n){},107:function(e,t,n){},127:function(e,t,n){},131:function(e,t,n){},142:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),s=n(29),r=n.n(s),i=(n(106),n(107),n(108),n(52)),l=n(53),c=n(73),h=n(69),u=n(76),d=n.n(u),p=n(48),g=n(49),m=n(145),f=(n(127),"/topHeadlines"),w="get",y="post",b=n(33),v=n(147),j=n(146),k=n(7),T=function(e){var t=e.item;return Object(k.jsx)("div",{style:{padding:5},children:Object(k.jsx)(b.a,{span:12,children:Object(k.jsxs)(v.a,{size:"small",style:{width:500,height:350},children:[Object(k.jsx)("p",{children:t.description}),Object(k.jsx)("p",{children:t.author}),Object(k.jsx)("p",{children:Object(k.jsx)("a",{href:t.url,target:"_blank",rel:"noreferrer",children:"Go to News"})}),Object(k.jsx)(j.a,{width:200,height:200,src:t.urlToImage||"/logo512.png"})]})})})},C=n(148),S=n(149),x=C.a.Search,A=S.a.Option,O=function(e){var t=e.filter,n=e.onCountryChange,a=e.onSearchChange,o=e.onCategoryChange,s=e.onSelectClear,r=t.country;return Object(k.jsxs)("div",{style:{display:"flex",padding:5},children:[Object(k.jsxs)(S.a,{defaultValue:r,placeholder:"Select country...",style:{width:300,marginRight:10},onChange:n,allowClear:!0,onClear:s,children:[Object(k.jsx)(A,{value:"us",children:"USA"}),Object(k.jsx)(A,{value:"gb",children:"UK"}),Object(k.jsx)(A,{value:"cn",children:"China"}),Object(k.jsx)(A,{value:"in",children:"India"})]}),Object(k.jsxs)(S.a,{placeholder:"Select category...",style:{width:300,marginRight:10},onChange:o,allowClear:!0,onClear:s,children:[Object(k.jsx)(A,{value:"business",children:"Business"}),Object(k.jsx)(A,{value:"entertainment",children:"Entertainment"}),Object(k.jsx)(A,{value:"general",children:"General"}),Object(k.jsx)(A,{value:"health",children:"Health"}),Object(k.jsx)(A,{value:"science",children:"Science"}),Object(k.jsx)(A,{value:"sports",children:"Sports"}),Object(k.jsx)(A,{value:"technology",children:"Technology"})]}),Object(k.jsx)(x,{placeholder:"Search anything...",onSearch:a,enterButton:!0,allowClear:!0})]})},I=function(e){return Object(k.jsx)("h1",{children:"Your personalized news dashboard"})},L=(n(131),function(e){var t=e.data;return Object(k.jsxs)("div",{className:"Error",children:[Object(k.jsx)(j.a,{width:200,height:200,src:"/logo512.png"}),Object(k.jsx)("h1",{children:t.message})]})}),B=function(e){Object(c.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={hasError:!1},a}return Object(l.a)(n,[{key:"componentDidCatch",value:function(e,t){console.log(e,t)}},{key:"render",value:function(){return this.state.hasError?Object(k.jsx)("h1",{children:"Something went wrong."}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),n}(o.a.Component),E=n(95),M=function(e){Object(c.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).getAxiosUtil=function(e,t,n){var o=t===w?d.a.get(e):d.a.post(e,n);a.setLoading(!0),o.then((function(e){a.setState({data:e.data,loading:!1,cleared:!1})})).catch((function(e){console.log(e),a.setLoading(!1)}))},a.setLoading=function(e){a.setState({loading:e})},a.onSelectClear=function(){a.setState({filter:{country:"us",category:"",search:""},cleared:!0})},a.onCountryChange=function(e){e&&""!==e&&a.getAxiosUtil(f,y,{country:e||"gb"})},a.onCategoryChange=function(e){e&&""!==e&&a.getAxiosUtil("/sources",y,{category:e||"general"})},a.onSearchChange=function(e){e&&""!==e?a.getAxiosUtil("/everything",y,{search:e||"bitcoin"}):a.onSelectClear()},a.state={data:E,filter:{country:"UK",category:"everything",search:""},cleared:!1,loading:!1},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.setLoading(!0),this.getAxiosUtil(f,w)}},{key:"componentDidUpdate",value:function(){var e=this.state,t=e.cleared,n=e.loading;t&&!n&&this.getAxiosUtil(f,w)}},{key:"render",value:function(){var e=this.state,t=e.data,n=e.filter,a=e.loading,o=t.status,s=t.articles,r=t.sources,i=s||r,l="";return l="ok"===o&&i.length?i.map((function(e){return Object(k.jsx)(T,{item:e})})):"ok"!==o||i.length?Object(k.jsx)(L,{data:t}):Object(k.jsx)("div",{class:"spin",children:Object(k.jsx)(p.a,{})}),Object(k.jsxs)("div",{children:[Object(k.jsx)(I,{}),Object(k.jsx)(O,{filter:n,onCountryChange:this.onCountryChange,onSearchChange:this.onSearchChange,onCategoryChange:this.onCategoryChange,onSelectClear:this.onSelectClear}),Object(k.jsx)(B,{children:Object(k.jsx)(g.a,{children:a?Object(k.jsx)(m.a,{size:"large",wrapperClassName:"spin",children:Object(k.jsx)("h1",{children:"Data is loading..."})}):l})})]})}}]),n}(a.Component);var R=function(){return Object(k.jsx)("div",{className:"App",children:Object(k.jsx)(M,{})})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,150)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),o(e),s(e),r(e)}))};r.a.render(Object(k.jsx)(o.a.StrictMode,{children:Object(k.jsx)(R,{})}),document.getElementById("root")),N()},95:function(e){e.exports=JSON.parse('{"status":"ok","totalResults":38,"articles":[{"source":{"id":"independent","name":"Independent"},"author":"Vithushan Ehantharajah","title":"Brentford promoted to Premier League after defeating Swansea in Championship play-off final - The Independent","description":"Brentford 2-0 Swansea: Thomas Frank\u2019s side secured redemption after heartbreak at Wembley last year thanks to goals from Ivan Toney and Emiliano Marcondes","url":"https://www.independent.co.uk/sport/football/brentford-swansea-result-championship-playoff-final-b1856401.html","urlToImage":"https://static.independent.co.uk/2021/05/29/17/newFile-2.jpg?width=1200&auto=webp&quality=75","publishedAt":"2021-05-29T16:40:10Z","content":"Tenths times a charm. Finally, after a run of nine unsuccessful play-off campaigns, and four final heartbreaks, Brentford have one to cherish now and for the foreseeable future. Arguably the most imp\u2026 [+6659 chars]"},{"source":{"id":null,"name":"Evening Standard"},"author":"Alex Young","title":"Man City XI vs Chelsea FC: Predicted lineup, latest team news, squad, injury update for Champions League Final - Evening Standard","description":"Pep Guardiola is expected to keep faith with the striker-less system for Manchester City as they look to beat Chelsea in the Champions League Final tonight.","url":"https://www.standard.co.uk/sport/football/man-city-xi-vs-chelsea-fc-today-lineup-confirmed-team-news-squad-latest-injury-updates-champions-league-final-b937590.html","urlToImage":"https://static.standard.co.uk/2020/12/14/12/ManCityPredictedXINEWv10.jpg?width=1200&width=1200&auto=webp&quality=75","publishedAt":"2021-05-29T16:25:27Z","content":"Guardiola has a fully fit squad to choose from - provided Ilkay Gundogan recovers from a thigh knock suffered on the eve of the final - as he looks to win his third Champions League title as manager,\u2026 [+1397 chars]"},{"source":{"id":null,"name":"The Guardian"},"author":"Clea Skopeliti","title":"Angela Rayner demands detailed answers on Boris Johnson\u2019s refurb - The Guardian","description":"Labour\u2019s deputy leader says it is \u2018scarcely believable\u2019 PM did not know who funded work on flat","url":"https://amp.theguardian.com/politics/2021/may/29/angela-rayner-demands-detailed-answers-on-boris-johnsons-refurb","urlToImage":null,"publishedAt":"2021-05-29T16:08:00Z","content":"Angela RaynerLabours deputy leader says it is scarcely believable PM did not know who funded work on flat\\r\\nSat 29 May 2021 17.00 BST\\r\\nLabour has demanded that the full details of how Boris Johnsons D\u2026 [+3182 chars]"},{"source":{"id":null,"name":"Sky.com"},"author":"Diana Magnay","title":"Russia\'s passport ploy is yet another assault on Ukrainian sovereignty - Sky News","description":"Russia has handed out more than half a million passports to residents of separatist republics since 2019.","url":"https://news.sky.com/story/russias-passport-ploy-is-yet-another-assault-on-ukrainian-sovereignty-12318360","urlToImage":"https://e3.365dm.com/21/05/1600x900/skynews-russia-ukraine-novoshakhtinsk_5396744.jpg?20210527134942","publishedAt":"2021-05-29T15:43:55Z","content":null},{"source":{"id":null,"name":"Sky.com"},"author":"Sky","title":"COVID-19: UK records another 3,398 coronavirus cases and seven related deaths - Sky News","description":"Almost three-quarters of UK adults have now been given at least one one dose of a COVID-19 vaccine, while 47% have had both.","url":"https://news.sky.com/story/covid-19-uk-records-another-3-398-coronavirus-cases-and-seven-related-deaths-12320122","urlToImage":"https://e3.365dm.com/21/05/1600x900/2372105290353060907_5399212.jpg?20210529164815","publishedAt":"2021-05-29T15:37:34Z","content":null},{"source":{"id":null,"name":"Sky.com"},"author":"Amar Mehta","title":"NASA release striking picture of Milky Way\'s \'downtown\', 26,000 light years away - Sky News","description":"The galactic centre showing billions of stars was pieced together over two decades by NASA\'s Chandra X-ray observatory.","url":"https://news.sky.com/story/nasa-release-striking-picture-of-milky-ways-downtown-26-000-light-years-away-12320095","urlToImage":"https://e3.365dm.com/21/05/1600x900/skynews-space-milky-way_5399101.jpg?20210529143248","publishedAt":"2021-05-29T15:25:28Z","content":null},{"source":{"id":null,"name":"Sky.com"},"author":"Sky","title":"Indonesia: Nearly 200 passengers and crew saved from the sea after ferry fire - Sky News","description":"There were no casualties following the fire which is believed to have started in the engine room.","url":"https://news.sky.com/story/indonesia-nearly-200-passengers-and-crew-saved-from-the-sea-after-ferry-fire-12320100","urlToImage":"https://e3.365dm.com/21/05/1600x900/skynews-ferry-fire-indonesia_5399111.jpg?20210529143719","publishedAt":"2021-05-29T15:23:21Z","content":null},{"source":{"id":null,"name":"Evening Standard"},"author":"Tammy Hughes","title":"Hundreds join anti-vaccination and Kill the Bill protests in central London - Evening Standard","description":"Thousands of people have gathered in central London to protest against the coronavirus vaccine rollout and the  Police, Crime, Sentencing and Courts Bill.","url":"https://www.standard.co.uk/news/uk/thousands-join-antivaccination-protest-in-central-london-b937927.html","urlToImage":"https://static.standard.co.uk/2021/05/29/14/2021-05-29T125426Z_875229805_RC2OPN9BO9BU_RTRMADP_3_HEALTH-CORONAVIRUS-BRITAIN-PROTEST.jpg?width=1200&width=1200&auto=webp&quality=75","publishedAt":"2021-05-29T15:14:59Z","content":"Thousands of people have gathered in central London to protest against the coronavirus vaccine rollout and the Police, Crime, Sentencing and Courts Bill.\\r\\nThose protesting against vaccines gathered i\u2026 [+2511 chars]"},{"source":{"id":"bbc-news","name":"BBC News"},"author":"https://www.facebook.com/bbcnews","title":"Charlie Hanson: Bafta suspends producer over sexual misconduct allegations - BBC News","description":"Charlie Hanson has been accused by \\"a number of women\\" of historical sexual allegations.","url":"https://www.bbc.co.uk/news/uk-57291604","urlToImage":"https://ichef.bbci.co.uk/news/1024/branded_news/05A2/production/_118724410_gettyimages-1030111948.jpg","publishedAt":"2021-05-29T14:53:53Z","content":"image copyrightGetty Images\\r\\nAward-winning producer Charlie Hanson has been removed from Netflix production After Life and suspended from Bafta following accusations by women of historical sexual mis\u2026 [+3097 chars]"},{"source":{"id":null,"name":"Sky.com"},"author":"Chris Robertson, news reporter","title":"Sasha Johnson: 18-year-old Cameron Deriggs in court over shooting of black equal rights campaigner - Sky News","description":"Sasha Johnson, 27, had been at a silent disco in a back garden in south London when she was shot.","url":"https://news.sky.com/story/sasha-johnson-18-year-old-cameron-deriggs-in-court-over-shooting-of-black-equal-rights-campaigner-12320091","urlToImage":"https://e3.365dm.com/21/05/1600x900/skynews-sasha-johnson-london_5393022.jpg?20210523210729","publishedAt":"2021-05-29T14:12:01Z","content":null},{"source":{"id":null,"name":"autosport.com"},"author":"Lewis Duncan","title":"Yamaha slams Marquez\'s \\"not fair\\" MotoGP qualifying tactics - Autosport","description":"Yamaha MotoGP boss Massimo Meregalli has slammed Marc Marquez\u2019s tactics against Maverick Vinales in Italian Grand Prix qualifying as \u201cnot fair\u201d and hopes for Race Direction intervention.","url":"https://www.autosport.com/motogp/news/yamaha-slams-marquezs-not-fair-motogp-qualifying-tactics/6517841/","urlToImage":"https://cdn-1.motorsport.com/images/amp/Y99ygKqY/s6/marc-marquez-repsol-honda-team.jpg","publishedAt":"2021-05-29T13:48:56Z","content":"The Honda rider followed Vinales out of pitlane in both of his runs in the first 15-minute shootout session at Mugello on Saturday afternoon.\\r\\nVinales was visibly furious at this, with the Yamaha rid\u2026 [+1967 chars]"},{"source":{"id":null,"name":"The Sun"},"author":"Emma James","title":"Bank Holiday travel chaos begins as thousands queue on motorways & pile into train stations to enjoy 25C... - The Sun","description":"","url":"https://www.thesun.co.uk/news/15105952/bank-holiday-travel-chaos-thousands-queue-motorways-25c-sunshine/","urlToImage":"https://www.thesun.co.uk/wp-content/uploads/2021/05/KY-COMP-BANK-HOLIDAY-2905.jpg?strip=all&quality=100&w=1200&h=800&crop=1","publishedAt":"2021-05-29T13:39:00Z","content":"MILLIONS of Brits have been caught up in travel chaos as people try to escape for a Bank Holiday weekend getaway.\\r\\nAn estimated 11 million journeys could take place made over the long weekend, the fi\u2026 [+3321 chars]"},{"source":{"id":null,"name":"Telegraph.co.uk"},"author":"By\\nGordon Rayner,","title":"Is history repeating itself over unlocking amid a new variant? - Telegraph.co.uk","description":"Boris Johnson\'s current conundrum over unlocking on June 21 is eerily similar to last September - minus Dominic Cummings\' influence","url":"https://www.telegraph.co.uk/news/2021/05/29/history-repeating-unlocking-amid-new-variant/","urlToImage":"https://www.telegraph.co.uk/content/dam/news/2021/05/29/TELEMMGLPICT000259420254_trans_NvBQzQNjv4BqrpfQw2hJyG_yckwxPAr0go9KzD8cVu9iguqnaKUswZA.jpeg?impolicy=logo-overlay","publishedAt":"2021-05-29T12:29:00Z","content":"Mr Cummings also made great play of the fact that he had warnings about variants in September from scientists who told him watch out for this variant, it could get very nasty.\\r\\nThe clear implication \u2026 [+1902 chars]"},{"source":{"id":null,"name":"Birmingham Live"},"author":"Alexander Brock","title":"Four Covid symptoms to watch out for if you\'ve had the vaccine - Birmingham Live","description":"Scientists have identified a number of rare symptoms including sneezing and ear ache","url":"https://www.birminghammail.co.uk/news/midlands-news/four-covid-symptoms-watch-out-20705042","urlToImage":"https://i2-prod.birminghammail.co.uk/incoming/article19819504.ece/ALTERNATES/s1200/4_JS228258173.jpg","publishedAt":"2021-05-29T12:04:00Z","content":"Scientists have warned those who have had the Covid vaccine to watch out for four rare symptoms.\\r\\n Researchers at Kings College London have said coronavirus symptoms differ from normal ones, such as \u2026 [+1607 chars]"},{"source":{"id":null,"name":"Metro.co.uk"},"author":"Tom Williams","title":"Canada: Remains of 215 children found at closed school for indigenous people - Metro.co.uk","description":"The mass grave was found at the site of a school where children were forced to abandon their culture.","url":"https://metro.co.uk/2021/05/29/canada-remains-of-215-children-found-at-closed-school-for-indigenous-people-14673275/","urlToImage":"https://metro.co.uk/wp-content/uploads/2021/05/SEC_80954042_1622295072.jpg?quality=90&strip=all&w=1200&h=630&crop=1","publishedAt":"2021-05-29T11:56:00Z","content":"The discovery of the remains of 215 children has shocked Canada (Picture: AP/Shutterstock)\\r\\nThe remains of 215 children have been found at the site of a former boarding school in Canada. \\r\\nPrime Mini\u2026 [+3183 chars]"},{"source":{"id":null,"name":"Mirror Online"},"author":"Samuel Meade","title":"Nicolas Pepe and six Man Utd stars earn Europa League accolade from UEFA - The Mirror","description":"Man Utd stars Bruno Fernandes and Harry Maguire were named in UEFA\'s Europa League squad of the season alongside Arsenal\'s Nicolas Pepe","url":"https://www.mirror.co.uk/sport/football/news/nicolas-pepe-six-man-utd-24210232","urlToImage":"https://i2-prod.mirror.co.uk/incoming/article24010064.ece/ALTERNATES/s1200/1_FBL-EUR-C3-VILLARREAL-ARSENAL.jpg","publishedAt":"2021-05-29T09:50:22Z","content":"Manchester United have seen six of their players named in the Europa League squad of the season by UEFA.\\r\\nThe Red Devils were beaten on penalties by Villarreal on Wednesday night as their trophy drou\u2026 [+2845 chars]"},{"source":{"id":null,"name":"Express"},"author":"Katrina Turrill","title":"Shower warning - \u2018clean your belly button properly\' or risk infection - signs of infection - Express","description":"BELLY button lint or fluff is common and usually harmless. But if you fail to clean your belly button properly you could be at risk of a bacterial infection. What are the signs your belly button could be infected and how should you clean it?","url":"https://www.express.co.uk/life-style/health/1442918/infected-belly-button-signs-how-to-clean","urlToImage":"https://cdn.images.express.co.uk/img/dynamic/11/750x445/1442918.jpg","publishedAt":"2021-05-29T09:50:00Z","content":"Dr Fiona Worsnop, consultant dermatologist at Stratum Clinics, explained belly button lint is caused by a buildup of debris, such as fibres from clothing, dead skin cells and body hair, in the umbili\u2026 [+547 chars]"},{"source":{"id":"independent","name":"Independent"},"author":"Louis Chilton","title":"Sinead O\u2019Connor describes past romance with Peter Gabriel: \u2018I was basically weekend p***y\u2019 - The Independent","description":"Irish singer-songwriter also opened up about close friendship with Daniel Day-Lewis","url":"https://www.independent.co.uk/arts-entertainment/music/news/sinead-oconnor-peter-gabriel-affair-b1856288.html","urlToImage":"https://static.independent.co.uk/2021/05/28/11/newFile-1.jpg?width=1200&auto=webp&quality=75","publishedAt":"2021-05-29T09:45:40Z","content":"Sinead OConnor has discussed a past romantic affair with musician Peter Gabriel, describing herself as his weekend p***y.\\r\\nThe Irish singer-songwriter recalled the fling in her new memoir Remembering\u2026 [+962 chars]"},{"source":{"id":"al-jazeera-english","name":"Al Jazeera English"},"author":"Al Jazeera","title":"US drawing up Belarus sanctions after Ryanair plane diversion - Al Jazeera English","description":"White House calls for \u2018a credible international investigation\u2019 into the forced landing of a Ryanair plane in Minsk.","url":"https://www.aljazeera.com/news/2021/5/29/us-drawing-up-belarus-sanctions-after-ryanair-plane-diversion","urlToImage":"https://www.aljazeera.com/wp-content/uploads/2021/05/2021-05-29T020313Z_1790901529_RC2EPN9I3SK1_RTRMADP_3_USA-BELARUS-SANCTIONS.jpg?resize=1200%2C630","publishedAt":"2021-05-29T09:41:14Z","content":"The United States announced punitive measures against Belarus as Russia offered President Alexander Lukashenko support in his standoff with the West over the forced diversion of a European plane and \u2026 [+3087 chars]"},{"source":{"id":null,"name":"Telegraph.co.uk"},"author":"By\\nCharles Richardson","title":"Henry Slade stands firm over Covid jab choice but Lions will keep door open - Telegraph.co.uk","description":"Slade, who is on standby for this summer\'s series, could still be called up even if he refuses to take the coronavirus vaccine","url":"https://www.telegraph.co.uk/rugby-union/2021/05/29/henry-slade-stands-firm-covid-jab-choice-lions-will-keep-door/","urlToImage":"https://www.telegraph.co.uk/content/dam/rugby-union/2021/05/29/TELEMMGLPICT000258980702_trans_NvBQzQNjv4BqUqC3wDtcZJ32w6LaPHfueXlroTp0gyr50Gx_2NRFWto.jpeg?impolicy=logo-overlay","publishedAt":"2021-05-29T09:27:00Z","content":"The British and Irish Lions will still consider calling up Henry Slade even if he refuses to take the coronavirus vaccine, despite the touring side encouraging all standby players to be vaccinated.\\r\\n\u2026 [+3921 chars]"}]}')}},[[142,1,2]]]);
//# sourceMappingURL=main.02c7d1b1.chunk.js.map