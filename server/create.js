import path from 'path'
import fs from 'fs'

import express from 'express'
import prerenderNode from 'prerender-node'

import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { ServerStyleSheet } from 'styled-components'
import { Helmet } from 'react-helmet'

import App from '../src/App'

const app = express()

const PORT =  process.env.PORT || 1111


const appBuildPath = process.env.NODE_ENV === 'development'
    ? path.resolve(fs.realpathSync(process.cwd()), './build')
    : path.resolve(fs.realpathSync(process.cwd()), '../public_html')


// point to the html file created by CRA's build tool
const appBuildIndex = `${appBuildPath}/index.html`

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
      return res.redirect(308, context.url);
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

// Server static assets
app.use(express.static(`${appBuildPath}`))

// Deliberately add a delay for /content call
app.use('/content', (req, res, next) => setTimeout(next, 21000))

// Use prerender.io for Dynamic Rendering
if (process.env.NODE_ENV === 'development') {
  prerenderNode.set('prerenderServiceUrl', 'http://localhost:3000/')
}
app.use(prerenderNode.set('prerenderToken', 'hJeivm0YSAgXlycRNH8L'))

app.get('*', (req, res) => {

  if (req.url === '/content') {
    return res.json({
      title: 'Hola dude!',
      body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    })
  }

  return res.sendFile(appBuildIndex)
})


app.listen(PORT, error => {
  if (error) {
    return console.log(`Something went wrong: ${error}`)
  }

  console.log(`Listening on port ${PORT} ...`)
})