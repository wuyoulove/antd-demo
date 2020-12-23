import asyncComponent from './utils/asyncComponent.js'

const Login =  asyncComponent(() => import('./views/login/index.js'))
const ChildMoudle =  asyncComponent(() => import('./views/childMoudle/index.js'))
const routes = [
  {
    path:'/',
    component:Login,
    exact:true
  },
  {
    path:'/childMoudle',
    component:ChildMoudle,
    exact:false
  }
]
export default routes