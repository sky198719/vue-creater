<template>
	<div id="home">
		<Personal></Personal>
	</div>
</template>

<script>
import Personal from './mods/personal.vue';

export default{
	components:{
		Personal:Personal
	}
}
</script>

<style lang="scss" type="text/css">
#home{
	width:100%;
	height:100%;
	padding-left:250px;
	box-sizing:border-box;
	position:absolute;
	background:-webkit-linear-gradient(#ff0000,#ff7f00,#ffff00,#00ff00,#00ffff,#0000ff,#8b00ff);
	background:-o-linear-gradient(#ff0000,#ff7f00,#ffff00,#00ff00,#00ffff,#0000ff,#8b00ff);
	background:-moz-linear-gradient(#ff0000,#ff7f00,#ffff00,#00ff00,#00ffff,#0000ff,#8b00ff);
	background:linear-gradient(#ff0000,#ff7f00,#ffff00,#00ff00,#00ffff,#0000ff,#8b00ff);
}
</style>