const express = require('express')
import React from 'react'
import ReactDom from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import App from '../app.jsx'
const server = express()

// 对静态资源进行部署

server.use(express.static("build"))
server.get("/*", (req, res) => {
  const AppHtmlString = ReactDom.renderToString(
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>
  )
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
    </head>
    <body>
      <div id="root">${AppHtmlString}</div>
      <script src="/client/bundle.client.js"></script>
    </body>
    </html>
  `)
})

server.listen(3000, () => {
  console.log('服务启动啦~')
})