import path from 'path'
import fs from 'fs'
import express from 'express'

import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { ServerStyleSheet } from 'styled-components'
import { Helmet } from 'react-helmet'

import App from '../src/App'

const app = express()

const PORT =  process.env.PORT || 1111

const appBuildPath = path.resolve(fs.realpathSync(process.cwd()), './build')

// point to the html file created by CRA's build tool
const appBuildIndex = `${appBuildPath}/index.html`

app.use('/static', express.static(`${appBuildPath}/static`))

const renderer = (req, res, next) => {

  fs.readFile(appBuildIndex, 'utf8', (err, htmlData) => {
    if (err) {
      console.error('Something went wrong:', err)
      return res.status(500).send('Oops, better luck next time!')
    }

    const sheet = new ServerStyleSheet()

    // Get plain html
    const context = {}
    const html = ReactDOMServer.renderToString(
      sheet.collectStyles(
        <StaticRouter location={req.url} context={context}>
          <App />
        </StaticRouter>
      )
    )

    // If SSR finds a React Router Redirect component
    // the context.url is set
    if (context.url) {
      return res.redirect(301, context.url);
    }

    // Get styles from styled-componets
    const styles = sheet.getStyleTags()

    // Get metatags & title
    const { meta, title } = Helmet.renderStatic()

    let normalizedHtml = htmlData.replace('</head>', `${title}${meta}${styles}</head>`)
    normalizedHtml = normalizedHtml.replace('<div id="root"></div>',`<div id="root">${html}</div>`)

    // context is passed as staticContext prop
    // to a react component to properly give
    // the SSR a way to redirect.
    if (context.status === 404) {
      return res
        .status(404)
        .send(normalizedHtml)
    }

    return res.send(normalizedHtml)

  })
}

// Deliberately add a delay for /content call
app.use('/content', (req, res, next) => setTimeout(next, 21000))

app.get('*', (req, res, next) => {

  // Ignore those cases for now, will use prerender.io
  if (/\/case(4|5|6)/ig.test(req.url)) {
    return res.sendFile(appBuildIndex)
  }

  if (req.url === '/content') {
    return res.json({
      title: 'Hola dude!',
      body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    })
  }

  renderer(req, res)
})

app.listen(PORT, (error) => {
  if (error) {
    return console.log(`Something went wrong: ${error}`)
  }

  console.log(`Listening on port ${PORT} ...`)
})