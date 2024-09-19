<template>
	<view class="app-input">
		<uni-section :title="title">
			<uni-easyinput v-model="inputValue" :clearable="false" :placeholder="placeholder" :suffixIcon="suffixIcon"
				:suffixIconSize="suffixIconSize" suffixIconColor="#333" @iconClick="onIconClick" />
		</uni-section>
	</view>
</template>

<script setup>
	import {
		ref,
		onMounted,
		onUnmounted,
		defineExpose
	} from 'vue'
	import {
		androidScan
	} from '@/common/js/androidScan.js'

	const inputValue = ref(null);
	// 数据流
	const props = defineProps({
		title: {
			type: String,
			default: '标题'
		},
		placeholder: {
			type: String,
			default: '请输入'
		},
		popupTitle: {
			type: String,
			default: '请输入'
		},
		suffixIcon: {
			typeof: String,
			default: ''
		},
		suffixIconSize: {
			type: Number,
			default: 32
		},
		suffixIconColor: {
			type: String,
			default: '#333'
		}
	});

	// 暴露属性
	defineExpose({
		inputValue
	});

	onMounted(() => {
		// #ifdef APP-PLUS
		// 扫描时候会将数据传入此方法里
		androidScan.init(getScanCode);
		// 开始广播监听
		androidScan.start();
		// #endif
	})

	onUnmounted(() => {
		// #ifdef APP-PLUS
		// 停止广播监听
		androidScan.stop();
		// #endif
	})

	// 扫码成功回调
	const getScanCode = code => {
		if (!code) return
		inputValue.value = code
	}

	// 点击扫码
	const onIconClick = () => {
		// #ifdef APP-PLUS
		// ANDROID激光扫码
		androidScan.triggerScan();
		// #endif
	};
</script>