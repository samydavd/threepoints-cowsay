const express = require('express')
const routes = require('./routes')
const app = express()

app.use(express.json());

app.get('/health', (_, res) => {
  res.send('ok');
});

// Handling routes request
app.use(routes);
 
// Listen port
app.listen(8000, async () => {
  console.log('Listening on port: ', 8000);
}).on('error', (e) => {
  console.log('Error happened: ', e.message)
});