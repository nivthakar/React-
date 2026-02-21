
const express = require('express')
const app = express()
const port = 5000
app.use(express.static('public'))
app.set('view engine', 'ejs');

app.get('/test', (req, res) => {
  res.send('Hello World!')
});
app.get('/ejs', (req, res) => {
  res.render('index');
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');  
});

app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/about.html');  
});
app.post('/test', (req, res) => {
  res.send('This post method is working!')
});

app.post('/test2', (req, res) => {
res.json({
    'name': 'John Doe',
    'age': 30,
    'email': 'john.doe@example.com'
    }); 
});

app.put('/test3',(req, res) => {

  res.send('This put method is working!')
});

app.get('/sum',(req, res) => {

  const num1 = parseInt(req.query.num1);
  const num2 = parseInt(req.query.num2);
  const sum = num1 + num2;
  res.send(`The sum of ${num1} and ${num2} is ${sum}`);
});   

app.delete('/test4',(req, res) => {
  res.send('This delete method is working!')
});   

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
