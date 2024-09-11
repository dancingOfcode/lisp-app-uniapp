<template>
	<view class="empty-vehicle pd-12">
		<app-select class="mb-16" ref="platformRef" title="叫料站台" placeholder="请选择叫料站台" popupTitle="请选择叫料站台"
			:dataSource="platformTree" :clearIcon="false" scanIcon="true" @scanClick="onPlatformScan" />
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
		vehicleTree,
		platformTree
	} from '@/common/js/constant.js'

	// 站台下拉子组件ref
	const platformRef = ref(null)
	// 载具下拉子组件ref
	const vehicleRef = ref(null)

	// 扫码
	const onPlatformScan = () => {
		console.log('onPlatformScan')
	}

	// 提交
	const onSubmit = () => {
		console.log('onSubmit', platformRef.value.vmStr, vehicleRef.value.vmStr)
	}
</script>
