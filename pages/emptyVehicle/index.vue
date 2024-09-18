<template>
	<view class="empty-vehicle pd-12">
		<app-select class="mb-16" ref="platformRef" title="叫料站台" placeholder="请选择叫料站台" popupTitle="请选择叫料站台"
			:dataSource="agvStationData" :clearIcon="false" scanIcon="true" />
		<app-select title="载具类型" ref="vehicleRef" placeholder="请选择载具类型" popupTitle="请选择载具类型" :dataSource="vehicleData"
			:clearIcon="false" />
		<app-btn :styles="{position: 'absolute', width: `calc(100% - 24px)`, bottom:'24px'}" @click="onSubmit" />
	</view>
</template>

<script setup>
	import {
		ref,
		onMounted
	} from 'vue'
	import {
		callEmptyVehicle
	} from '@/common/js/api.js'

	// 站台下拉子组件ref
	const platformRef = ref(null)
	// 载具下拉子组件ref
	const vehicleRef = ref(null)
	const avgData = ref([])
	const agvStationData = uni.getStorageSync('STORAGE_station_list')
	const vehicleData = uni.getStorageSync('STORAGE_sys_dict').tray_type.filter(item => item.label !== "料箱")

	// 提交
	const onSubmit = () => {
		if (!platformRef.value.vmStr) {
			return uni.showToast({
				title: '请选择叫料站台'
			})
		}
		if (!vehicleRef.value.vmStr) {
			return uni.showToast({
				title: '请选择载具类型'
			})
		}
		let params = {
			'workstationCode': platformRef.value.vmStr,
			'type': vehicleRef.value.vmStr
		}
		callEmptyVehicle(params).then(res => {
			if (res.code === 200) {
				uni.showToast({
					title: res.message
				})
			} else {
				uni.showToast({
					title: res.message || '叫空载具失败！'
				})
			}
		})
	}
</script>