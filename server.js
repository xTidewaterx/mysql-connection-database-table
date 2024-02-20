const express = require('express');
const app = express(); 
const { expressCspHeader, INLINE, NONE, SELF } = require('express-csp-header');

const PORT =  5005; 



app.use(expressCspHeader({
    directives: {
        'default-src': [SELF],
        'script-src': [SELF, INLINE, 'somehost.com'],
        'style-src': [SELF, 'mystyles.net'],
        'img-src': ['data:', 'images.com'],
        'worker-src': [NONE],
        'block-all-mixed-content': true
    }
}));



app.get('/api/data', (req, res) => { 
  // Handle your API logic here 
  res.json({ message: 'Hello from Express, data!' });
}); 


app.listen(PORT, function(err){
  if (err) console.log("Error in server setup")
  console.log("Server listening on Port", PORT); // this is in node terminal, node terminal, c onnected now on port
})

//http://localhost:5000/api/data --here data is connected, we now have server, install express server, named file server.js, then in our 
//package.json we have start command and node server.js config entire project now running on port, server


//add network access, proxy, firewall problem listen to app on port, serrver is up