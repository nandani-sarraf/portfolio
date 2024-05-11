const express = require('express');
const app = express();
const port = 3000;
const fs=require('fs')

// Serve static files
app.use(express.static('public'));

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});

app.get('/',(req,res)=>{
    fs.readFile('./portfolio.html', (err, data) => {
        if (err) {
          // Handle error if file cannot be read
          console.error('Error reading HTML file:', err);
          res.status(500).send('Internal Server Error');
        } else {
          // Send the HTML file as the response
          res.setHeader('Content-Type', 'text/html');
          res.send(data);
        }
      });
    })


      app.get("/portfolio.css",(req, res)=>{
        fs.readFile('./portfolio.css', (err, data) => {
            if (err) {
              // Handle error if file cannot be read
              console.error('Error reading HTML file:', err);
              res.status(500).send('Internal Server Error');
            } else {
              // Send the HTML file as the response
              res.send(data);
            }
          });
      })

      

      app.get("/Formal.jpeg",(req,res)=>{
        fs.readFile('./Formal.jpeg', (err, data) => {
            if (err) {
              // Handle error if file cannot be read
              console.error('Error reading HTML file:', err);
              res.status(500).send('Internal Server Error');
            } else {
              // Send the HTML file as the response
              res.send(data);
            }
          });
      })

      app.get("/hirme.html",(req,res)=>{
        fs.readFile('./hireme.html', (err, data) => {
            if (err) {
              // Handle error if file cannot be read
              console.error('Error reading HTML file:', err);
              res.status(500).send('Internal Server Error');
            } else {
              // Send the HTML file as the response
              res.send(data);
            }
          });
      })

      app.get("/script.js",(req,res)=>{
        fs.readFile('./script.js', (err, data) => {
            if (err) {
              // Handle error if file cannot be read
              console.error('Error reading HTML file:', err);
              res.status(500).send('Internal Server Error');
            } else {
              // Send the HTML file as the response
              res.send(data);
            }
          });
      })