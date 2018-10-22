<template>
	<ul class="resumeList">
		<li v-for="(item,index) in data" :key="index">
			<p>公司名称：{{item.company}}</p>
			<p>时间：{{item.time}}</p>
			<p>职位：{{item.position}}</p>
			<p>技术栈：{{item.technology}}</p>
			<p>成功案例：{{item.project}}</p>
			<p>项目地址：<span v-for="(item2,index2) in item.website" :key="index2" :class="item2.isOpen == true ? '' : 'negtive'"><a target="_blank" :href="item2.link">{{item2.name}}</a></span></p>
		</li>
	</ul>
</template>

<script>
export default{
	props:{
		data:''
	}
}
</script>

<style lang="scss" type="text/css">
.resumeList{
	margin:50px 0;
	border-top:1px solid #333333;
	li{
		padding:20px 50px 20px 350px;
		background:#eeeeee;
		border-bottom:1px solid #333333;
		p{
			line-height:30px;
			font-size:20px;
			a{
				color:#0000ff;
				margin-right:15px;
			}
			.negtive{
				text-decoration:line-through;
			}
		}
	}
}
</style>