<template>
	<view class="platform-control pd-12">
		<app-select class="mb-16" title="叫料站台" placeholder="请选择叫料站台" popupTitle="请选择叫料站台" :dataSource="agvStationData"
			:clearIcon="false" :scanIcon="true" ref="platformRef" />
		<app-input ref="inputRef" title="载具条码" placeholder="请输入载具条码" suffixIcon="scan" />
		<view class="footer">
			<app-btn class="footer-btn" btnText="站台清空" @click="onSubmit('clear')" />
			<app-btn class="footer-btn" btnText="站台占用" @click="onSubmit" />
		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue'
	import {
		clearStation,
		stationOccupy
	} from '@/common/js/api.js'

	// 站台ref
	const platformRef = ref(null)
	// 载具ref
	const inputRef = ref(null)
	const agvStationData = uni.getStorageSync('STORAGE_station_list')

	// 站台清空、占用
	const onSubmit = type => {
		if (!platformRef.value.vmStr) {
			return uni.showToast({
				title: '请选择叫料站台'
			})
		}
		if (!inputRef.value.inputValue) {
			return uni.showToast({
				title: '请输入载具条码'
			})
		}
		let params = {
			stationCode: platformRef.value.vmStr,
			trayCode: inputRef.value.value
		}
		if (type) {
			clearStation(params).then(res => {
				if (res.code === 200) {
					uni.showToast({
						title: res.message
					})
					uni.navigateTo({
						url: '/pages/nav/index'
					});
				} else {
					uni.showToast({
						title: res.message || '站台清空失败！'
					})
				}
			})
		} else {
			stationOccupy(params).then(res => {
				if (res.code === 0) {
					uni.showToast({
						title: res.message
					})
				} else {
					uni.showToast({
						title: res.message || '站台占用失败！'
					})
				}
			})
		}
	}
</script>

<style lang="scss">
	.platform-control {
		.footer {
			width: calc(100% - 24px);
			position: absolute;
			bottom: 24px;
			display: flex;
			justify-content: space-between;

			.footer-btn {
				width: 48%;
			}
		}
	}
</style>