<template>
	<view class="container-pickup pd-12">
		<app-input ref="inputRef" title="料箱条码" placeholder="请输入料箱条码" suffixIcon="scan" />
		<app-btn :styles="{position: 'absolute', width: `calc(100% - 24px)`, bottom:'24px'}" @click="onSubmit" />
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue'
	import {
		pickingUpGoods
	} from '@/common/js/api.js'

	const inputRef = ref(null)

	// 提交
	const onSubmit = () => {
		if (!inputRef.value.inputValue) {
			return uni.showToast({
				title: '请输入料箱条码'
			})
		}
		pickingUpGoods({
			trayCode: inputRef.value.inputValue
		}).then(res => {
			if (res.code === 200) {
				uni.showToast({
					title: res.message
				})
			} else {
				uni.showToast({
					title: res.message || '料箱取货失败！'
				})
			}
		})
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