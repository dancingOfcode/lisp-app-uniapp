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
		defineExpose
	} from 'vue'
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

	// 点击扫码
	const onScanClick = () => {
		// 允许从相机和相册扫码
		uni.scanCode({
			success: function(res) {
				if (res.result) {
					vmStr.value = res.result;
				};
			}
		});
	};
</script>