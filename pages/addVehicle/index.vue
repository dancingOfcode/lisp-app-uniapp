<template>
	<view class="add-vehicle pd-12">
		<app-input class="mb-16" ref="inputRef" title="载具条码" placeholder="请输入载具条码" suffixIcon="scan"
			@iconClick="onVehicleCode" />
		<app-select title="载具类型" ref="vehicleRef" placeholder="请选择载具类型" popupTitle="请选择载具类型" :dataSource="vehicleTree"
			:clearIcon="false" />
		<app-btn :styles="{position: 'absolute', width: `calc(100% - 24px)`, bottom:'24px'}" @click="onSubmit" />
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue'
	import {
		vehicleTree
	} from '@/common/js/constant.js'

	// 载具条码ref
	const inputRef = ref(null)
	// 载具类型ref
	const vehicleRef = ref(null)

	// 载具扫码
	const onVehicleCode = () => {
		console.log('onVehicleCode')
	}

	// 提交
	const onSubmit = () => {
		console.log('onSubmit', inputRef.value.value, vehicleRef.value.vmStr)
	}
</script>