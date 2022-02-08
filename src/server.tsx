import path from 'path'
import fs from 'fs'
import express from 'express'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import App from './components/app'
import routing from './routing'

const PORT = process.env.PORT || 8080
const app = express()

const routes = routing.map((item) => item.path)

app.get(routes, (req, res) => {
  const app = ReactDOMServer.renderToString(
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>
  )
  const indexFile = path.resolve('./build/index.html')
  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Something went wrong:', err)
      return res.status(500).send('Oops, better luck next time!')
    }
    return res.send(data.replace('<body></body>', `<body>${app}</body>`))
  })
})

app.use(express.static(__dirname + '/static/'))
app.use(express.static(__dirname + '/'))

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
