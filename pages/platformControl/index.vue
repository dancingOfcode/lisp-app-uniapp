<template>
	<view class="platform-control pd-12">
		<app-select class="mb-16" title="叫料站台" placeholder="请选择叫料站台" popupTitle="请选择叫料站台" :dataSource="platformTree"
			:clearIcon="false" scanIcon="true" ref="platformRef" @scanClick="onPlatformScan" />
		<app-input ref="inputRef" title="载具条码" placeholder="请输入载具条码" suffixIcon="scan" @iconClick="onVehiclecCode" />
		<view class="footer">
			<app-btn class="footer-btn" btnText="站台清空" @click="clearClick" />
			<app-btn class="footer-btn" btnText="站台占用" @click="occupyClick" />
		</view>
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

	// 站台ref
	const platformRef = ref(null)
	// 载具ref
	const inputRef = ref(null)

	// 站台扫码
	const onPlatformScan = () => {
		console.log('onPlatformScan')
	}

	// 载具条码
	const onVehiclecCode = () => {
		console.log('onVehiclecCode')
	}

	// 站台清空
	const clearClick = () => {
		console.log('clearClick', platformRef.value.vmStr, inputRef.value.value)
	}
	// 站台占用
	const occupyClick = () => {
		console.log('occupyClick', platformRef.value.vmStr, inputRef.value.value)
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