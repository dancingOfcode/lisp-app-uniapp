<template>
	<view class="add-vehicle pd-12">
		<app-input class="mb-16" ref="inputRef" title="载具条码" placeholder="请输入载具条码" suffixIcon="scan" />
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

	// 提交
	const onSubmit = () => {
		if (!inputRef.value.inputValue) {
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
			trayCode: inputRef.value.inputValue,
			trayType: vehicleRef.value.vmStr
		}
		addTray(params).then(res => {
			if (res.code === 200) {
				uni.showToast({
					title: res.message
				})
				uni.navigateTo({
					url: '/pages/nav/index'
				});
			} else {
				uni.showToast({
					title: res.message || '新增载具失败！'
				})
			}
		})
	}
</script>