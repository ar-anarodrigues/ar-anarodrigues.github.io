import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _f4d79658 = () => interopDefault(import('..\\pages\\about\\index.vue' /* webpackChunkName: "pages_about_index" */))
const _629cb0cc = () => interopDefault(import('..\\pages\\sandbox\\index.vue' /* webpackChunkName: "pages_sandbox_index" */))
const _684c80b1 = () => interopDefault(import('..\\pages\\skills\\index.vue' /* webpackChunkName: "pages_skills_index" */))
const _0e326e6c = () => interopDefault(import('..\\pages\\story\\index.vue' /* webpackChunkName: "pages_story_index" */))
const _75e9bc82 = () => interopDefault(import('..\\pages\\works\\index.vue' /* webpackChunkName: "pages_works_index" */))
const _120c5a9a = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _f4d79658,
    name: "about"
  }, {
    path: "/sandbox",
    component: _629cb0cc,
    name: "sandbox"
  }, {
    path: "/skills",
    component: _684c80b1,
    name: "skills"
  }, {
    path: "/story",
    component: _0e326e6c,
    name: "story"
  }, {
    path: "/works",
    component: _75e9bc82,
    name: "works"
  }, {
    path: "/",
    component: _120c5a9a,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
