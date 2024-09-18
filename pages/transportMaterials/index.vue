<template>
	<view class="transport-materials pd-12">
		<app-input class="mb-16" ref="inputRef" title="载具条码" placeholder="请输入载具条码" suffixIcon="scan" />
		<app-select ref="startRef" title="起点" placeholder="请选择起点位置" popupTitle="请选择起点位置" :dataSource="agvStationData"
			:clearIcon="false" scanIcon="true" />
		<app-select ref="endRef" title="终点" placeholder="请选择终点位置" popupTitle="请选择终点位置" :dataSource="agvStationData"
			:clearIcon="false" scanIcon="true" />
		<app-btn :styles="{position: 'absolute', width: `calc(100% - 24px)`, bottom:'24px'}" @click="onSubmit" />
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue'
	import {
		transportMaterials
	} from '@/common/js/api.js'

	// 载具条码ref
	const inputRef = ref(null)
	// 起点ref
	const startRef = ref(null)
	// 终点ref
	const endRef = ref(null)
	const agvStationData = uni.getStorageSync('STORAGE_station_list')

	// 提交
	const onSubmit = () => {
		if (!inputRef.value.inputValue) {
			return uni.showToast({
				title: '请输入载具条码！'
			})
		}
		if (!startRef.value.vmStr) {
			return uni.showToast({
				title: '请选择起点位置！'
			})
		}
		if (!endRef.value.vmStr) {
			return uni.showToast({
				title: '请选择终点位置！'
			})
		}
		let params = {
			"trayCode": inputRef.value.inputValue,
			"endStationCode": endRef.value.vmStr,
			"startStationCode": startRef.value.vmStr
		}
		transportMaterials(params).then(res => {
			if (res.code === 200) {
				uni.showToast({
					title: res.message
				})
			} else {
				uni.showToast({
					title: res.message || '物流搬送失败！'
				})
			}
		})
	}
</script>