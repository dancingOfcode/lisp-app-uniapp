<template>
	<view class="app-input">
		<uni-section :title="title">
			<uni-easyinput v-model="inputValue" :clearable="false" :placeholder="placeholder" :suffixIcon="suffixIcon"
				:suffixIconSize="suffixIconSize" suffixIconColor="#333" @iconClick="onIconClick" />
		</uni-section>
		<input v-if="!isTest && !isTest2" class="scan-input" v-model="scanValue" />
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

	const inputValue = ref(null);
	const scanValue = ref('');
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
		},
		isTest: {
			type: Boolean,
			default: false
		},
		isTest2: {
			type: Boolean,
			default: false
		},
	});

	// 暴露属性
	defineExpose({
		inputValue
	});

	// 监听并同步扫描值
	watch(
		() => scanValue.value,
		(count, prevCount) => {
			inputValue.value = count
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
				inputValue.value = code
			});
			// 开始扫描
			androidScan.startScan();
		}
		if (props.isTest2) {
			// 初始化
			androidScan2.initScan((code) => {
				// code为扫码取得的值
				if (!code) return
				inputValue.value = code
			});
			// 开始扫描
			androidScan2.startScan();
		}
	};
</script>

<style lang="scss">
	.app-input {
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