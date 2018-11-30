<template>
	<div>
		<label>{{labelName}}</label>
		<input type="text" v-if="inputType == 'text'" />
		<input type="password" v-if="inputType == 'password'" />
		<input type="file" v-if="inputType == 'file'" />
		<textarea v-if="inputType == 'textarea'"></textarea>
		<div v-if="inputType == 'radio'">
			<span v-for="(item,index) in formData">
				<input type="radio" :name="item.name" :id="item.id" />
				<label :for="item.id">{{item.labelName}}</label>
			</span>
		</div>
		<div v-if="inputType == 'checkbox'">
			<span v-for="(item,index) in formData">
				<input type="checkbox" :id="item.id" />
				<label :for="item.id">{{item.labelName}}</label>
			</span>
		</div>
	</div>
</template>

<script>
export default{
	props:{
		labelName:'',
		inputType:'',
		formData:[]
	}
}
</script>

<style lang="scss" type="text/css">

</style>