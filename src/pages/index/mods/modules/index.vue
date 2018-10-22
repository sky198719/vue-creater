<template>
	<div id="modules">
		<ul>
			<li>
				<MuiSwitch value="0"></MuiSwitch>
			</li>
			<li>
				<MuiButton class="type1" message="弹出框按钮"></MuiButton>
			</li>
		</ul>
	</div>
</template>

<script>
import MuiSwitch from './mods/mui-switch.vue';
import MuiButton from './mods/mui-button.vue';

export default{
	components:{
		MuiSwitch:MuiSwitch,
		MuiButton:MuiButton
	}
}
</script>

<style lang="scss" type="text/css">
#modules{
	ul{
		top:30px;
		left:300px;
		position:absolute;
		li{
			.type1{
				width:auto;
				height:30px;
				line-height:30px;
				display:inline-block;
				text-align:center;
				cursor:pointer;
				border-radius:15px;
				background:#ff0000;
				color:#ffffff;
				padding:0 10px;
			}
		}
	}
}
</style>