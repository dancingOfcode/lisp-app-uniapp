<template>
	<view class="transport-materials pd-12">
		<app-input class="mb-16" ref="inputRef" title="载具条码" placeholder="请输入载具条码" suffixIcon="scan"
			@iconClick="onVehicleCode" />
		<app-select ref="startRef" title="起点" placeholder="请选择起点位置" popupTitle="请选择起点位置" :dataSource="platformTree"
			:clearIcon="false" scanIcon="true" @scanClick="onStartScan" />
		<app-select ref="endRef" title="终点" placeholder="请选择终点位置" popupTitle="请选择终点位置" :dataSource="platformTree"
			:clearIcon="false" scanIcon="true" @scanClick="onEndScan" />
		<app-btn :styles="{position: 'absolute', width: `calc(100% - 24px)`, bottom:'24px'}" @click="onSubmit" />
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue'
	import {
		platformTree,
		transferCarTree
	} from '@/common/js/constant.js'

	// 载具条码ref
	const inputRef = ref(null)
	// 起点ref
	const startRef = ref(null)
	// 终点ref
	const endRef = ref(null)

	// 载具扫码
	const onVehicleCode = () => {
		console.log('onVehicleCode')
	}

	// 起点站台扫码
	const onStartScan = () => {
		console.log('onStartScan')
	}

	// 终点站台扫码
	const onEndScan = () => {
		console.log('onEndScan')
	}

	// 提交
	const onSubmit = () => {
		console.log('onSubmit', inputRef.value.value, startRef.value.vmStr, endRef.value.vmStr)
	}
</script>