import path from 'path';

import express from 'express'
import { fileURLToPath } from 'url';

const app = express()
const port = 4000
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

//app.use('/pdf', express.static(__dirname + '/static'));

/*app.get('/', (req, res) => {
  res.send('HOMESITE')
})*/
app.use(express.static("/frontend/build/"))

app.get('/static/:dir/:file', (req, res) => {
  //console.log('GET /static/' + req.params.dir + "/" + req.params.file)
  res.sendFile(__dirname + "/frontend/build/static/" + req.params.dir + "/" + req.params.file)
})

app.get('/*', (req, res) => {
  console.log('GET /')
  res.sendFile(__dirname + "/frontend/build/index.html");
});


app.listen(port, () => {
  console.log(`Stinkat app listening on port ${port}`)
})