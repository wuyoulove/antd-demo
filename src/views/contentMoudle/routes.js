import asyncComponent from '@/utils/asyncComponent.js'

const Home =  asyncComponent(() => import('@/views/contentMoudle/home/index.js'))
const Management =  asyncComponent(() => import('@/views/contentMoudle/management/index.js'))
const RecordList =  asyncComponent(() => import('@/views/contentMoudle/recordList/index.js'))
const routes = [
  {
    path:'/contentMoudle/home',
    component:Home,
    exact:false,
  },
  {
    path:'/contentMoudle/management',
    component:Management,
    exact:false,
  },
  {
    path:'/contentMoudle/recordList',
    component:RecordList,
    exact:false,
  }
]
export default routes