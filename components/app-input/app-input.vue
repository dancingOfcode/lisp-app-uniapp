<template>
	<view class="app-input">
		<uni-section :title="title">
			<uni-easyinput v-model="value" :clearable="false" :placeholder="placeholder" :suffixIcon="suffixIcon"
				:suffixIconSize="suffixIconSize" suffixIconColor="#333" @iconClick="onIconClick" />
		</uni-section>
	</view>
</template>

<script setup>
	import {
		ref,
		defineExpose
	} from 'vue';
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
		inputValue: {
			type: String,
			default: ''
		}
	})
	const value = ref(props.inputValue)

	// 暴露属性
	defineExpose({
		value
	})

	// 事件列表
	const parentEvent = defineEmits(['iconClick'])

	// 点击扫码
	const onIconClick = () => {
		parentEvent('iconClick')
	}
</script>