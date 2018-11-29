<template>
	<div>
		<MuiButton :message="buttonMessage" @handleClick="buttonClick()"></MuiButton>
		<MuiLayer :isShow="isShow"></MuiLayer>
		<MuiDialog :message="textMessage" :type="dialogType" @handleClick="confirmClick()" :isShow="isShow" @setShow="setShow"></MuiDialog>
	</div>
</template>

<script>
import MuiDialog from './mui-dialog.vue'
import MuiLayer from './mui-layer.vue'
import MuiButton from './mui-button.vue'

export default{
	props:{
		buttonMessage:'',
		textMessage:'',
		dialogType:'',
		isShow:''
	},
	methods:{
		buttonClick(){
			this.isShow = true
		},
		confirmClick(){
			this.$emit('confirmClick')
			this.isShow = false
		},
		setShow(isShow){
			this.isShow = isShow
		}
	},
	components:{
		MuiDialog:MuiDialog,
		MuiLayer:MuiLayer,
		MuiButton:MuiButton
	}
}
</script>

<style lang="scss" type="text/css">

</style>