import pkg from '../../../package.json'

import Router from 'koa-66'
const router = new Router()
export default router

router.get('/*', async (ctx, next) => {
  const renderParams = {
    app: {
      name: pkg.name,
      description: pkg.description
    }
  }
  return ctx.render('index', renderParams)
})
