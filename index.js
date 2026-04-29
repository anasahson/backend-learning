const express = require('express')
require('dotenv').config()
const app  = express()
const port =  process.env.PORT;
const github = {
    "login": "anasahson",
    "id": 141020635,
    "node_id": "U_kgDOCGfN2w",
    "avatar_url": "https://avatars.githubusercontent.com/u/141020635?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/anasahson",
    "html_url": "https://github.com/anasahson",
    "followers_url": "https://api.github.com/users/anasahson/followers",
    "following_url": "https://api.github.com/users/anasahson/following{/other_user}",
    "gists_url": "https://api.github.com/users/anasahson/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/anasahson/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/anasahson/subscriptions",
    "organizations_url": "https://api.github.com/users/anasahson/orgs",
    "repos_url": "https://api.github.com/users/anasahson/repos",
    "events_url": "https://api.github.com/users/anasahson/events{/privacy}",
    "received_events_url": "https://api.github.com/users/anasahson/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": " Anas Ahson | Full-Stack Web Developer",
    "company": null,
    "blog": "https://anasahson.github.io/profile/",
    "location": "Pakistan",
    "email": null,
    "hireable": null,
    "bio": "Anas Ahson | Experienced Web Developer | Crafting Engaging User Experiences with HTML, CSS,Bootstrap, jQuery, and php  and Laravel.\r\n",
    "twitter_username": "anasahson92",
    "public_repos": 15,
    "public_gists": 0,
    "followers": 0,
    "following": 6,
    "created_at": "2023-07-31T09:12:02Z",
    "updated_at": "2026-02-15T02:10:53Z"
  }

app.get('/home',(req,res)=>{
    res.send('welcome the homepage ')
})
app.get('/login',(req,res)=>{

    res.send('welcome to the login page ')
})
app.get('/github',(req,res)=> {
    res.json(github)
})


app.get('/', (req, res) => {
    res.send('Hello World!')
  })

  


app.listen(port,()=>{
    console.log(`Server is running in port  ${port} `);
    
})
