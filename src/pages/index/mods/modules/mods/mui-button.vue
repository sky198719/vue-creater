<template>
	<span mui-button :class="className">{{message}}</span>
</template>

<script>
export default{
	props:{
		className:'',
		message:''
	}
}
</script>

<style lang="scss" type="text/css">

</style>