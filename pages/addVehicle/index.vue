<template>
	<view class="add-vehicle pd-12">
		<app-input class="mb-16" ref="inputRef" title="载具条码" placeholder="请输入载具条码" suffixIcon="scan"
			@iconClick="onVehicleCode" />
		<app-select title="载具类型" ref="vehicleRef" placeholder="请选择载具类型" popupTitle="请选择载具类型" :dataSource="vehicleData"
			:clearIcon="false" />
		<app-btn :styles="{position: 'absolute', width: `calc(100% - 24px)`, bottom:'24px'}" @click="onSubmit" />
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue'
	import {
		addTray
	} from '@/common/js/api.js'

	// 载具条码ref
	const inputRef = ref(null)
	// 载具类型ref
	const vehicleRef = ref(null)
	const vehicleData = uni.getStorageSync('STORAGE_sys_dict').tray_type

	// 载具扫码
	const onVehicleCode = () => {
		console.log('onVehicleCode')
	}

	// 提交
	const onSubmit = () => {
		if (!inputRef.value.value) {
			return uni.showToast({
				title: '请输入载具条码！'
			})
		}
		if (!vehicleRef.value.vmStr) {
			return uni.showToast({
				title: '请选择载具类型！'
			})
		}
		let params = {
			trayCode: inputRef.value.value,
			trayType: vehicleRef.value.vmStr
		}
		addTray(params).then(res => {
			if (res.code === 200) {
				uni.showToast({
					title: res.message
				})
			} else {
				uni.showToast({
					title: res.message || '新增载具失败！'
				})
			}
		})
	}
</script>