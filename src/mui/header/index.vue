<template>
	<div id="header">
		<Nav></Nav>
		<Tip tip=""></Tip>
	</div>
</template>

<script>
import Nav from './mods/nav.vue';
import Tip from './mods/tip.vue';

export default{
	components:{
		Nav:Nav,
		Tip:Tip
	}
}
</script>

<style lang="scss" type="text/css">
#header{
	width:350px;
	border-right:1px solid #333333;
	height:100%;
	top:0;
	left:-100px;
	position:absolute;
	z-index:1;
	background:#ffffff;
	transform:skewX(-5deg);
}
</style>