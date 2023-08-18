import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6a870348 = () => interopDefault(import('..\\pages\\category\\index.vue' /* webpackChunkName: "pages/category/index" */))
const _539d05e0 = () => interopDefault(import('..\\pages\\tag\\index.vue' /* webpackChunkName: "pages/tag/index" */))
const _61e9fd9a = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _d6633078 = () => interopDefault(import('..\\pages\\category\\_id.vue' /* webpackChunkName: "pages/category/_id" */))
const _74730048 = () => interopDefault(import('..\\pages\\tag\\_id.vue' /* webpackChunkName: "pages/tag/_id" */))
const _49a2c426 = () => interopDefault(import('..\\pages\\_params.vue' /* webpackChunkName: "pages/_params" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/category",
    component: _6a870348,
    name: "category"
  }, {
    path: "/tag",
    component: _539d05e0,
    name: "tag"
  }, {
    path: "/",
    component: _61e9fd9a,
    name: "index"
  }, {
    path: "/category/:id",
    component: _d6633078,
    name: "category-id"
  }, {
    path: "/tag/:id",
    component: _74730048,
    name: "tag-id"
  }, {
    path: "/:params",
    component: _49a2c426,
    name: "params"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
