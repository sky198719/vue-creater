<template>
	<div id="modules">
		<ul class="modulesItem">
			<li>
				<MuiSwitch value="0"></MuiSwitch>
			</li>
			<li>
				<MuiOpenDialog buttonMessage="弹出层按钮1" textMessage="文本1" dialogType="2" @confirmClick="muiCallback()"></MuiOpenDialog>
			</li>
		</ul>
	</div>
</template>

<script>
import MuiSwitch from './mods/mui-switch.vue'
import MuiOpenDialog from './mods/mui-openDialog.vue'

export default{
	components:{
		MuiSwitch:MuiSwitch,
		MuiOpenDialog:MuiOpenDialog
	},
	methods:{
		muiCallback(){
			alert('回调成功')
		}
	}
}
</script>

<style lang="scss" type="text/css">
#modules{
	.modulesItem{
		top:30px;
		left:300px;
		position:absolute;
	}
}
</style>