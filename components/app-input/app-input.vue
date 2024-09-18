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
		defineExpose
	} from 'vue';

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

	// 点击扫码
	const onIconClick = () => {
		// 允许从相机和相册扫码
		uni.scanCode({
			success: function(res) {
				if (res.result) {
					inputValue.value = res.result;
				};
			}
		});
	};
</script>