<template>
	<view class="task-control pd-12">
		<app-input class="mb-16" ref="inputRef" title="载具条码" placeholder="请输入载具条码" suffixIcon="scan" />
		<view class="footer">
			<app-btn class="footer-btn" btnText="任务取消" @click="onSubmit('cancel')" />
			<app-btn class="footer-btn" btnText="任务继续" @click="onSubmit('continue')" />
			<app-btn class="footer-btn" btnText="人工完成" @click="onSubmit()" />
		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue'
	import {
		taskCancel,
		taskContinue,
		taskFinished
	} from '@/common/js/api.js'

	// 载具条码ref
	const inputRef = ref(null)

	// 提交
	const onSubmit = type => {
		if (!inputRef.value.inputValue) {
			return uni.showToast({
				title: '请输入载具条码！'
			})
		}
		let params = {
			trayCode: inputRef.value.inputValue
		}
		if (type === 'cancel') {
			taskCancel(params).then(res => {
				if (res.code === 200) {
					uni.showToast({
						title: res.message
					})
					uni.navigateTo({
						url: '/pages/nav/index'
					});
				} else {
					uni.showToast({
						title: res.message || '任务取消失败'
					})
				}
			})
		} else if (type === 'continue') {
			taskContinue(params).then(res => {
				if (res.code === 0) {
					uni.showToast({
						title: res.message
					})
				} else {
					uni.showToast({
						title: res.message || '任务继续失败'
					})
				}
			})
		} else {
			taskContinue(params).then(res => {
				if (res.code === 0) {
					uni.showToast({
						title: res.message
					})
				} else {
					uni.showToast({
						title: res.message || '人工完成失败'
					})
				}
			})
		}
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