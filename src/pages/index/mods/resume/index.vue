<template>
	<div id="resume">
		<Resumelist :data="data" v-if="flag"></Resumelist>
		<Paging :totalPage="totalPage" :path="path" v-if="flag"></Paging>
	</div>
</template>

<script>
import Resumelist from './mods/resumelist.vue';
import Paging from './../../../../mui/paging/index.vue';
import {getData} from './../../../../js/global.js';

export default{
	components:{
		Resumelist:Resumelist,
		Paging:Paging
	},
	data(){
		return{
			id:this.$route.params.id,
			data:'',
			totalPage:'',
			path:'/resume/',
			flag:false
		}
	},
	beforeMount(){
		const _this = this
		getData('/json/resumeData' + _this.id + '.json','')
		.then((res) => {
			_this.data = res.data.data.data
			_this.totalPage = res.data.data.totalPage
			_this.flag = true
		})
	}
}
</script>

<style lang="scss" type="text/css">

</style>