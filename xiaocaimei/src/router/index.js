import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/home'
import Person from '@/components/person'
import Business from '@/components/business'
import Solution from '@/components/solution'
import Service from '@/components/service'
import About from '@/components/about'
import Market from '@/components/market'
import Goods from '@/components/goods'
import Details from '@/components/details'
import Plan from '@/components/plan'
import Enquire from '@/components/enquire'
import Bannerdetails from '@/components/bannerdetails'
import Aboutbus from '@/components/aboutbus'
import Downdetails from '@/components/downdetails'
import Casedetails from '@/components/casedetails'
import Perdetails from '@/components/perdetails'
import Pergoods from '@/components/pergoods'
import Uniondetails from '@/components/uniondetails'

Vue.use(VueRouter)
//logo多次添加警告 在路由跳转的时候同一个路由多次添加是不被允许的
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (to) {
    return VueRouterPush.call(this, to).catch(err => err)
}
export default new VueRouter({
routes :[
{
  	path: '/',
  	redirect: '/home'
},
{
  	path: '/home',
  	name: 'home',
  	component: Home
},
{
	path:'/bannerdetails',
	name:'bannerdetails',
	component: Bannerdetails
},
{
	path:'/person',
	name:'person',
	component: Person
},
{
	path: '/business',
	name:'business',
	component: Business
},
{
	path: '/solution',
	name: 'solution',
	component: Solution
},
{
	path:'/service',
	name:'service',
	component: Service
},
{
	path:'/about',
	name:'about',
	component: About
},
{
	path:'/market',
	name:'market',
	component: Market
},
{
	path:'/enquire',
	name: 'enquire',
	component: Enquire
},
{
	path:'/aboutbus',
	name: 'aboutbus',
	component: Aboutbus
},
{
	path:'/downdetails',
	name: 'downdetails',
	component: Downdetails
},
{
	path:'/casedetails',
	name: 'casedetails',
	component: Casedetails
},
{
	path:"/goods",
	name: 'goods',
	component: Goods
},
{
	path:"/details",
	name: 'details',
	component: Details
},
{
	path:"/pergoods",
	name: 'pergoods',
	component: Pergoods
},
{
	path:"/perdetails",
	name: 'perdetails',
	component: Perdetails
},
{
	path:"/uniondetails",
	name: 'uniondetails',
	component: Uniondetails
}
]
})
