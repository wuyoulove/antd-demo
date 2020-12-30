import asyncComponent from './utils/asyncComponent.js'

const Login =  asyncComponent(() => import('./views/login/index.js'))
const ContentMoudle =  asyncComponent(() => import('./views/contentMoudle/index.js'))
const routes = [
  {
    path:'/',
    component:Login,
    exact:true
  },
  {
    path:'/contentMoudle',
    component:ContentMoudle,
    exact:false,
  }
]
export default routes