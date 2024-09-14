<template>
	<view class="unbind pd-12">
		<app-input ref="inputRef" title="载具条码" placeholder="请输入载具条码" suffixIcon="scan" @iconClick="onVehicleCode" />
		<app-btn :styles="{position: 'absolute', width: `calc(100% - 24px)`, bottom:'24px'}" @click="onSubmit" />
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue'
	import {
		trayUnBind
	} from '@/common/js/api.js'

	const inputRef = ref(null)

	// 载具条码
	const onVehicleCode = () => {
		console.log('onVehicleCode')
	}

	// 提交
	const onSubmit = () => {
		if (!inputRef.value.value) {
			return uni.showToast({
				title: '请输入载具条码！'
			})
		}
		let params = {
			trayCode: inputRef.value.value
		}
		console.log('onSubmit', params)
		trayUnBind(params).then(res => {
			if (res.code === 200) {
				uni.showToast({
					title: res.message
				})
			} else {
				uni.showToast({
					title: res.message || '解绑失败'
				})
			}
		})
	}
</script>