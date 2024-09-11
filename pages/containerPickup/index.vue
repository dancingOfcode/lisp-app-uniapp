<template>
	<view class="container-pickup pd-12">
		<app-input ref="inputRef" title="料箱条码" placeholder="请输入料箱条码" suffixIcon="scan" @iconClick="onPickupCode" />
		<app-btn :styles="{position: 'absolute', width: `calc(100% - 24px)`, bottom:'24px'}" @click="onSubmit" />
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue'

	const inputRef = ref(null)
	// 料箱条码
	const onPickupCode = () => {
		console.log('onPickupCode')
	}

	// 提交
	const onSubmit = () => {
		console.log('onSubmit', inputRef.value.value)
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