<template>
	<div mui-layer v-if="isShow"></div>
</template>

<script>
export default{
	props:{
		isShow:''
	}
}
</script>

<style lang="scss" type="text/css">
[mui-layer]{
	width:100%;
	height:100%;
	top:0;
	left:0;
	position:fixed;
	background-color:rgba(0,0,0,0.5);
	z-index:99;
}
</style>