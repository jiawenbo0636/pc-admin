import Vue from 'vue'
import Router from 'vue-router'
import Banner from '@/components/banner'
import Case from '@/components/case'
import Solution from '@/components/solution'
import Copywriting from '@/components/copywriting'
import Equipment from '@/components/equipment'
import Newbanner from '@/components/newbanner'
import Newcase from '@/components/newcase'
import Sign from '@/components/sign'
import Home from '@/components/home'
import Bannerdetails from '@/components/bannerdetails'
import WritingDetails from '@/components/writingDetails'
import Information from '@/components/information'
import Newmation from '@/components/newmation'
import Newcopy from '@/components/newcopy'
import Casedetails from '@/components/casedetails'
import Newments from '@/components/newments'
import Mentdetails from '@/components/mentdetails'

Vue.use(Router)
/*解决路由点击警告*/
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
/*Router.selfaddRoutes = function (params){
  Router.matcher = new Router().matcher;
  Router.addRoutes(params)
}*/
export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      children:[
      {
        path: '/',
        name: '/banner',
        component: Banner
      },
      {
        path: '/banner',
        name: 'banner',
        component: Banner
      },
      {
        path: '/case',
        name: 'case',
        component: Case
      },
      {
        path: '/equipment',
        name: 'equipment',
        component: Equipment
      },
      {
        path: '/solution',
        name: 'solution',
        component: Solution
      },
      {
        path: '/copywriting',
        name: 'copywriting',
        component: Copywriting
      },
      {
        path: '/newcopy',
        name: 'newcopy',
        component: Newcopy
      },
      {
        path: '/writingDetails',
        name: 'writingDetails',
        component: WritingDetails
      },
      {
        path: '/newbanner',
        name: 'newbanner',
        component: Newbanner
      },
      {
        path: '/bannerdetails',
        name: 'bannerdetails',
        component: Bannerdetails
      },
      {
        path: '/newcase',
        name: 'newcase',
        component: Newcase
      },
      {
        path: '/information',
        name: 'information',
        component: Information
      },
      {
        path: '/newmation',
        name: 'newmation',
        component: Newmation
      },
      {
        path: '/casedetails',
        name: 'casedetails',
        component: Casedetails
      },
      {
        path: '/newments',
        name: 'newments',
        component: Newments
      },
      {
        path: '/mentdetails',
        name: 'mentdetails',
        component: Mentdetails
      }
      ]
    },
    {
    	path: '/sign',
    	name: 'sign',
      component: Sign
    }
  ]
})
