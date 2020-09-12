import express from 'express'

const app = express()

const PORT = 3000

app.use('/', (req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
})

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});