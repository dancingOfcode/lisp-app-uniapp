<template>
	<view class="task-control pd-12">
		<app-input class="mb-16" ref="inputRef" title="载具条码" placeholder="请输入载具条码" suffixIcon="scan"
			@iconClick="onVehicleCode" />
		<view class="footer">
			<app-btn class="footer-btn" btnText="任务取消" @click="onSubmit('cancel')" />
			<app-btn class="footer-btn" btnText="任务继续" @click="onSubmit('continue')" />
			<app-btn class="footer-btn" btnText="人工完成" @click="onSubmit('artificial')" />
		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue'

	// 载具条码ref
	const inputRef = ref(null)

	// 载具扫码
	const onVehicleCode = () => {
		console.log('onVehicleCode')
	}

	// 提交
	const onSubmit = type => {
		console.log(type, inputRef.value.value)
	}
</script>

<style lang="scss">
	.task-control {
		.footer {
			width: calc(100% - 24px);
			position: absolute;
			bottom: 24px;
			display: flex;
			justify-content: space-between;

			.footer-btn {
				width: 32%;
			}
		}
	}
</style>