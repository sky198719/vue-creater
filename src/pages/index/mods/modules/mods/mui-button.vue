<template>
	<span mui-button @click="handleClick()">{{message}}</span>
</template>

<script>
export default{
	props:{
		message:''
	},
	methods:{
		handleClick(){
			this.$emit('handleClick')
		}
	}
}
</script>

<style lang="scss" type="text/css">
[mui-button]{
	width:auto;
	height:30px;
	line-height:30px;
	display:inline-block;
	text-align:center;
	cursor:pointer;
	border-radius:5px;
	background:#ffffff;
	color:#000000;
	padding:0 10px;
	border:1px solid #dddddd;
}
</style>