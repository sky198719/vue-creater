<template>
	<strong mui-switch :value="value" @click="handleClick($event)" :class="active == 1 ? 'active' : ''">
		<span></span>
	</strong>
</template>

<script>
export default{
	data(){
		return{
			active:''
		}
	},
	props:{
		value:''
	},
	beforeMount(){
		const _this = this
		_this.active = _this.value
	},
	methods:{
		handleClick(e){
			this.active = e.currentTarget.getAttribute('value') == '1' ? '0' : '1'
			e.currentTarget.setAttribute('value',this.active)
		}
	}
}
</script>

<style lang="scss" type="text/css">
[mui-switch]{
	width:40px;
	height:21px;
	display:inline-block;
	background:#dddddd;
	position:relative;
	cursor:pointer;
	border-radius:50px;
	span{
		width:17px;
		height:17px;
		display:block;
		top:2px;
		left:2px;
		position:absolute;
		background:#ffffff;
		border-radius:50%;
	}
}
.active{
	background:#00ff00;
	span{
		left:21px;
	}
}
</style>