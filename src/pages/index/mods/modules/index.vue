<template>
	<div id="modules">
		<ul class="modulesItem">
			<li>
				<MuiSwitch value="0"></MuiSwitch>
			</li>
			<li>
				<MuiOpenDialog buttonMessage="确认弹出框按钮" textMessage="是否确认" dialogType="confirm" @confirmClick="muiCallback()"></MuiOpenDialog>
			</li>
			<li>
				<MuiOpenDialog buttonMessage="警告弹出框按钮" textMessage="警告" dialogType="alert" @confirmClick="muiCallback()"></MuiOpenDialog>
			</li>
			<li>
				<MuiInput labelName="姓名" inputType="text"></MuiInput>
			</li>
			<li>
				<MuiInput labelName="密码" inputType="password"></MuiInput>
			</li>
			<li>
				<MuiInput labelName="性别" inputType="radio" :formData="radioData"></MuiInput>
			</li>
			<li>
				<MuiInput labelName="范围" inputType="checkbox" :formData="checkboxData"></MuiInput>
			</li>
			<li>
				<MuiInput labelName="文件" inputType="file"></MuiInput>
			</li>
			<li>
				<MuiInput labelName="详情" inputType="textarea"></MuiInput>
			</li>
		</ul>
	</div>
</template>

<script>
import MuiSwitch from './mods/mui-switch.vue'
import MuiOpenDialog from './mods/mui-openDialog.vue'
import MuiInput from './mods/mui-input.vue'

export default{
	data(){
		return{
			radioData:[
				{
					labelName:'男',
					name:'sex',
					id:1
				},
				{
					labelName:'女',
					name:'sex',
					id:2
				}
			],
			checkboxData:[
				{
					labelName:'0-100',
					id:11
				},
				{
					labelName:'101-200',
					id:12
				},
				{
					labelName:'201-300',
					id:13
				},
				{
					labelName:'301-400',
					id:14
				}
			]
		}
	},
	components:{
		MuiSwitch:MuiSwitch,
		MuiOpenDialog:MuiOpenDialog,
		MuiInput:MuiInput
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