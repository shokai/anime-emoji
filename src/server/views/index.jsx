import React, {PropTypes} from 'react'

export default function Index({app}){
  return (
    <html>
      <head>
        <title>{app.name} - {app.description}</title>
        <link rel="stylesheet" href="/dist/index.css" />
      </head>
      <body>
        <div id="app" />
        <script src="/dist/index.js" />
      </body>
    </html>
  )
}

Index.propTypes = {
  app: PropTypes.object
}
