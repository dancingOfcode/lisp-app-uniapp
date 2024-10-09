<template>
	<view class="app-select">
		<uni-section :title="title">
			<uni-data-picker :placeholder="placeholder" :popup-title="popupTitle" :localdata="dataSource"
				v-model="vmStr" :clear-icon="clearIcon" :scan-icon="scanIcon" @scanClick="onIconClick">
			</uni-data-picker>
		</uni-section>
		<input v-if="scanIcon && !isTest && !isTest2" class="scan-input" v-model="scanValue" />
	</view>
</template>

<script setup>
	import {
		ref,
		watch,
		defineExpose
	} from 'vue'
	import {
		androidScan
	} from '@/common/js/androidScan.js'
	import {
		androidScan2
	} from '@/common/js/scan.js'
	import {
		onLoad,
		onHide,
		onShow,
		onUnload
	} from '@dcloudio/uni-app'

	const vmStr = ref('')
	const scanValue = ref('');
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
		},
		isTest: {
			type: Boolean,
			default: false
		},
		isTest2: {
			type: Boolean,
			default: false
		},
	})

	// 暴露属性
	defineExpose({
		vmStr
	});

	// 监听并同步扫描值
	watch(
		() => scanValue.value,
		(count, prevCount) => {
			vmStr.value = count
		}
	)

	onHide(() => {
		// 停止广播监听
		if (props.isTest) androidScan.stopScan();
		if (props.isTest2) androidScan2.stopScan();
	})

	onUnload(() => {
		// 停止广播监听
		if (props.isTest) androidScan.stopScan();
		if (props.isTest2) androidScan2.stopScan();
	})

	// 点击扫码
	const onIconClick = () => {
		if (props.isTest) {
			// 开启激光红外线扫描
			androidScan.triggerScan()
			// 初始化
			androidScan.initScan((code) => {
				// code为扫码取得的值
				if (!code) return
				vmStr.value = code
			});
			// 开始扫描
			androidScan.startScan();
		}
		if (props.isTest2) {
			// 初始化
			androidScan2.initScan((code) => {
				// code为扫码取得的值
				if (!code) return
				vmStr.value = code
			});
			// 开始扫描
			androidScan2.startScan();
		}
	};
</script>

<style lang="scss">
	.app-select {
		position: relative;

		.scan-input {
			top: 50px;
			right: 10px;
			position: absolute;
			width: 24px;
			height: 24px;
			opacity: 0;
		}
	}
</style>