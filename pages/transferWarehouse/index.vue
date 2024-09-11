<template>
	<view class="transfer-warehouse pd-12">
		<app-input class="mb-16" ref="inputRef" title="中转车条码" placeholder="请输入中转车条码" suffixIcon="scan"
			@iconClick="onTransferCode" />
		<app-select class="mb-16" ref="transferCaref" title="中转车类型" placeholder="请选择中转车类型" popupTitle="请选择中转车类型"
			:dataSource="transferCarTree" :clearIcon="false" />
		<app-select ref="platformRef" title="站台编码" placeholder="请选择站台编码" popupTitle="请选择站台编码" :dataSource="platformTree"
			:clearIcon="false" scanIcon="true" @scanClick="onPlatformScan" />
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

	// 中转车条码ref
	const inputRef = ref(null)
	// 载具下拉子组件ref
	const transferCaref = ref(null)
	// 站台下拉子组件ref
	const platformRef = ref(null)

	// 中转车扫码
	const onTransferCode = () => {
		console.log('onTransferCode')
	}

	// 站台扫码
	const onPlatformScan = () => {
		console.log('onPlatformScan')
	}

	// 提交
	const onSubmit = () => {
		console.log('onSubmit', inputRef.value.value, transferCaref.value.vmStr, platformRef.value.vmStr)
	}
</script>