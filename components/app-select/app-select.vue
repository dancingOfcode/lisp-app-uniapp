<template>
	<view class="app-select">
		<uni-section :title="title">
			<uni-data-picker :placeholder="placeholder" :popup-title="popupTitle" :localdata="dataSource"
				v-model="vmStr" :clear-icon="clearIcon" :scan-icon="scanIcon" @scanClick="onScanClick">
			</uni-data-picker>
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

	// 数据流
	const props = defineProps({
		title: {
			type: String,
			default: '标题'
		},
		placeholder: {
			type: String,
			default: '请选择'
		},
		popupTitle: {
			type: String,
			default: '请选择'
		},
		dataSource: {
			typeof: Array,
			default: []
		},
		clearIcon: {
			type: Boolean,
			default: true
		},
		scanIcon: {
			type: Boolean,
			default: false
		}
	})
	const vmStr = ref('')

	// 暴露属性
	defineExpose({
		vmStr
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
		vmStr.value = code
	}

	// 点击扫码
	const onScanClick = () => {
		// #ifdef APP-PLUS
		// ANDROID激光扫码
		androidScan.triggerScan();
		// #endif
	};
</script>