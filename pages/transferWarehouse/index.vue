<template>
	<view class="transfer-warehouse pd-12">
		<app-input class="mb-16" ref="inputRef" title="中转车条码" placeholder="请输入中转车条码" suffixIcon="scan" />
		<app-select class="mb-16" ref="transferCaref" title="中转车类型" placeholder="请选择中转车类型" popupTitle="请选择中转车类型"
			:dataSource="transferCarTree" :clearIcon="false" />
		<app-select ref="platformRef" title="站台编码" placeholder="请选择站台编码" popupTitle="请选择站台编码"
			:dataSource="agvStationData" :clearIcon="false" scanIcon="true" />
		<app-btn :styles="{position: 'absolute', width: `calc(100% - 24px)`, bottom:'24px'}" @click="onSubmit" />
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue'
	import {
		transferWarehouse
	} from '@/common/js/api.js'

	// 中转车条码ref
	const inputRef = ref(null)
	// 载具下拉子组件ref
	const transferCaref = ref(null)
	// 站台下拉子组件ref
	const platformRef = ref(null)
	const transferCarTree = uni.getStorageSync('STORAGE_sys_dict').transfer_car_type.filter(item => item.label !== "料箱")
	const agvStationData = uni.getStorageSync('STORAGE_station_list')

	// 提交
	const onSubmit = () => {
		if (!inputRef.value.inputValue) {
			return uni.showToast({
				title: "请输入中转车条码！"
			})
		}
		if (!transferCaref.value.vmStr) {
			return uni.showToast({
				title: "请选择中转车类型！"
			})
		}
		if (!platformRef.value.vmStr) {
			return uni.showToast({
				title: "请选择站台编码！"
			})
		}
		let params = {
			rakCode: inputRef.value.inputValue,
			type: transferCaref.value.vmStr,
			originStation: platformRef.value.vmStr
		}
		transferWarehouse(params).then(res => {
			if (res.code === 200) {
				uni.showToast({
					title: res.message
				})
			} else {
				uni.showToast({
					title: res.message || "中转回库失败！"
				})
			}
		})
	}
</script>