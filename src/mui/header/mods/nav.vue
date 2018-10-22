<template>
	<ul class="nav">
		<li v-for="(item,index) in data" :key="index" @click="handleClick" :class="name == item.name ? 'active' : ''">
			<router-link :to="{path:item.url}">{{item.title}}</router-link>
		</li>
	</ul>
</template>

<script>
import {getData} from './../../../js/global.js';

export default{
	data(){
		return{
			name:this.$store.state.name,
			data:[]
		}
	},
	beforeMount(){
		const _this = this
		getData('/json/navData.json','')
		.then((res) => {
			_this.data = res.data.data.data
		})
	},
	methods:{
		handleClick(){
			this.$store.commit('setUrl',this.$route.name)
			this.name = this.$store.state.name
			window.scrollTop = 0
		}
	}
}
</script>

<style lang="scss" type="text/css">
.nav{
	width:350px;
	padding-top:50px;
	li{
		width:350px;
		height:70px;
		line-height:70px;
		font-size:24px;
		box-sizing:border-box;
		a{
			color:#000000;
			display:block;
			padding-left:150px;
		}
	}
	:hover{
		background:#eeeeee;
	}
	.active{
		background:#eeeeee;
	}
}
</style>