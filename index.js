const express = require('express');
const path = require('path');
const server = express('server');



server.use(express.static(path.join(__dirname, 'public')))

// const serveHomepage = (req, res)=>{
//   const homepageFilePath = path.join(__dirname, 'public', 'index.html');
//   res.sendFile(homepageFilePath)
// }

// const serveProfile = (req, res)=>{
//     const profileFilePath = path.join(__dirname, 'public', 'profile.html');
//     res.sendFile(profileFilePath)
//   }


// server.get('/', serveHomepage);
// server.get('/profile', serveProfile);




server.listen(3000, ()=> console.log("server is ready"))

