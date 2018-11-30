<template>
	<div mui-dialog v-if="isShow" ref="muiDialog">
		<p>{{message}}</p>
		<ul v-if="type == 'alert'">
			<li @click="handleClick()">确认</li>
		</ul>
		<ul v-if="type == 'confirm'">
			<li @click="dialogClose()">取消</li>
			<li @click="handleClick()">确认</li>
		</ul>
	</div>
</template>

<script>
export default{
	props:{
		type:'',
		message:'',
		isShow:''
	},
	mounted(){
		this.muiDialogStatus()
	},
	updated(){
		this.muiDialogStatus()
	},
	methods:{
		muiDialogStatus(){
			this.$refs.muiDialog.style.marginTop = -(this.$refs.muiDialog.offsetHeight)/2 - 31 + 'px'
			this.$refs.muiDialog.style.marginLeft = -(this.$refs.muiDialog.offsetWidth)/2 - 31 + 'px'
		},
		handleClick(){
			this.$emit('handleClick')
		},
		dialogClose(isShow){
			this.isShow = false
			this.$emit('setShow',false)
		}
	}
}
</script>

<style lang="scss" type="text/css">
[mui-dialog]{
	width:300px;
	height:auto;
	position:fixed;
	top:50%;
	left:50%;
	background:#ffffff;
	text-align:center;
	border:1px solid #dddddd;
	padding:20px;
	z-index:100;
	p{
		text-align:center;
		margin-bottom:20px;
		color:#000000;
	}
	ul{
		width:300px;
		height:35px;
		text-align:center;
		li{
			width:auto;
			padding:0 20px;
			height:35px;
			line-height:35px;
			border:1px solid #dddddd;
			text-align:center;
			display:inline-block;
			cursor:pointer;
			margin:0 20px;
			color:#000000;
		}
	}
}
</style>