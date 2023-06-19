
import * as express from 'express'

const app = express();

app.use('/', (req, res) => {
  const text = req.body.text;
})

app.listen(3000);