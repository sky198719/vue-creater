import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';

import './../../css/global.scss';

import Index from './index.vue';
import Home from './mods/home/index.vue';
import Resume from './mods/resume/index.vue';
import Modules from './mods/modules/index.vue';

Vue.use(VueRouter);
Vue.use(Vuex);

const routes = [
	{
		path:'/home',
		name:'home',
		component:Home
	},
	{
		path:'/resume/:id',
		name:'resume',
		component:Resume
	},
	{
		path:'/modules',
		name:'modules',
		component:Modules
	},
	{
		path: '/', 
		name:'home',
        redirect: '/home'
	}
]

const router = new VueRouter({
	routes
})

const store = new Vuex.Store({
	state:{
		name:''
	},
	mutations:{
		setUrl(state,url){
			state.name = url
		}
	}
})

new Vue({
	el:'#index',
	router,
	store,
	render:h=>h(Index)
})