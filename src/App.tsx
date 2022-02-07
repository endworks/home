import App from './views/App'
import express from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'

const app = express();

app.get('/', (_request: any, response: any) => {
  const props = { server: true };
  const element = React.createElement(App, props)
  const html = ReactDOMServer.renderToStaticMarkup(element);
  response.send(html);
});

export default app
