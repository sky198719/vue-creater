<template>
	<div>
		<Header></Header>
		<keep-alive>
			<router-view :key="$route.fullPath"></router-view>
		</keep-alive>
	</div>
</template>

<script>
import Header from './../../mui/header/index.vue';

export default{
	components:{
		Header:Header
	},
	beforeMount(){
		this.$store.commit('setUrl',this.$route.name)
	},
	beforeUpdate(){
		this.$store.commit('setUrl',this.$route.name)
	}
}
</script>

<style lang="scss" type="text/css">

</style>