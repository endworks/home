import path from 'path'
import fs from 'fs'
import express from 'express'
import ReactDOMServer from 'react-dom/server'

import App from './app'

const PORT = process.env.PORT || 8080
const app = express()

app.get('/', (_req, res) => {
  const app = ReactDOMServer.renderToStaticMarkup(<App />)
  const indexFile = path.resolve('./build/index.html')
  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Something went wrong:', err)
      return res.status(500).send('Oops, better luck next time!')
    }
    return res.send(data.replace('<body></body>', `<body>${app}</body>`))
  })
})

app.use(express.static('./build/static/'))
app.use(express.static('./build/'))

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
