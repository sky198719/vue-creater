<template>
	<ul class="personal">
		<li>张俊杰</li>
		<li>前端工程师</li>
		<li v-if="mobileFlag == 1">13917926800</li>
		<li v-else class="flag" @click="handleClick('mobileFlag','1','联系方式')">联系方式</li>
		<li v-if="mailFlag == 1"><a href="mailto:sky8sky@sina.com">sky8sky@sina.com</a></li>
		<li v-else class="flag" @click="handleClick('mailFlag','1','邮箱地址')">邮箱地址</li>
		<li v-if="githubFlag == 1"><a target="_blank" href="https://github.com/sky198719">github/sky198719</a></li>
		<li v-else class="flag" @click="handleClick('githubFlag','1','github地址')">github地址</li>
	</ul>
</template>

<script>
export default{
	data(){
		return{
			mobileFlag:localStorage.getItem('mobileFlag'),
			mailFlag:localStorage.getItem('mailFlag'),
			githubFlag:localStorage.getItem('githubFlag')
		}
	},
	methods:{
		handleClick(key,value,msg){
			if(localStorage.getItem(key) != 1){
				alert('请尝试修改本地localstorage获取本人' + msg + '：key=' + key + ';value=' + value + '，然后刷新页面，或者尝试从源代码中获取相关信息');
			}
		}
	}
}
</script>

<style lang="scss" type="text/css">
.personal{
	width:400px;
	top:100px;
	right:100px;
	position:absolute;
	li{
		width:400px;
		height:80px;
		line-height:80px;
		text-align:right;
		font-size:40px;
		font-weight:bold;
		color:#ffffff;
		-webkit-text-stroke:2px #000000;
		text-shadow:5px 5px 5px #000000;
		a{
			color:#ffff00;
			-webkit-text-stroke:2px #000000;
			text-shadow:5px 5px 5px #000000;
			text-decoration:underline;
		}
	}
	.flag{
		cursor:pointer;
		color:#00ffff;
		text-decoration:underline;
	}
}
</style>