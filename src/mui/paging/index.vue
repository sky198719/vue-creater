<template>
	<Pagination :totalPage="totalPage" :path="path"></Pagination>
</template>

<script>
import Pagination from './mods/pagination.vue';

export default{
	data(){
		return{
			id:this.$route.params.id
		}
	},
	props:{
		totalPage:'',
		path:''
	},
	components:{
		Pagination:Pagination
	}
}
</script>

<style lang="scss" type="text/css">

</style>