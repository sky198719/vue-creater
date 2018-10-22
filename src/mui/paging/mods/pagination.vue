<template>
	<div class="pagination">
		<span v-for="(item,index) in array" :key="index" :class="id == item ? 'active' : ''"><router-link :to="{path:path + item}">{{item}}</router-link></span>
	</div>
</template>

<script>
export default{
	data(){
		return{
			id:this.$route.params.id,
			array:[]
		}
	},
	props:{
		totalPage:'',
		path:''
	},
	beforeMount(){
		const _this=this
		for(var i=1 ; i<=_this.totalPage ; i++){
			_this.array.push(i)
		}
	}
}
</script>

<style lang="scss" type="text/css">
.pagination{
	top:4px;
	left:300px;
	position:absolute;
	width:100%;
	span{
		width:40px;
		height:40px;
		display:inline-block;
		line-height:40px;
		text-align:center;
		border:1px solid #333333;
		background:#dddddd;
		color:#000000;
		cursor:pointer;
		margin-left:10px;
		a{
			display:block;
			color:#000000;
		}
	}
	.active{
		background:#ff0000;
	}
}
</style>