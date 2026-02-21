const express = require('express')
const app = express()
app.use(express.static('public'))
const port = 5000

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
});
app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/about.html')
});

// app.get('/', (req, res) => {
//   res.send('Hello Mihir and Krish!')
// })
// app.get('/About', (req, res) => {
//   res.send('This is about')    
// });

app.get('/contact', (req, res) => {
  res.send('This is contact page')
});

app.post('/demo', (req, res) => {
  res.json({
    name: 'Mihir',
    age: 22,
    city: 'Pune',
    state: 'Maharashtra',
    country: 'India'
  });


});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
