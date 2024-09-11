<template>
	<view class="unbind pd-12">
		<app-input ref="inputRef" title="载具条码" placeholder="请输入载具条码" suffixIcon="scan" @iconClick="onVehicleCode" />
		<app-btn :styles="{position: 'absolute', width: `calc(100% - 24px)`, bottom:'24px'}" @click="onSubmit" />
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue'

	const inputRef = ref(null)
	// 载具条码
	const onVehicleCode = () => {
		console.log('onVehicleCode')
	}

	// 提交
	const onSubmit = () => {
		console.log('onSubmit', inputRef.value.value)
	}
</script>