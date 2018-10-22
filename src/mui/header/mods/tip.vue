<template>
	<span class="tip">{{tip}}</span>
</template>

<script>
export default{
	props:{
		tip:''
	}
}
</script>

<style lang="scss" type="text/css">
.tip{
	width:350px;
	height:50px;
	line-height:50px;
	bottom:0;
	left:0;
	position:absolute;
	text-align:center;
	font-size:18px;
	display:block;
}
</style>