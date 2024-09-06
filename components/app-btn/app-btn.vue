<template>
	<view class="app-btn">
		<button :style="{...defaultStyles,...props.styles}" :type="props.btnType">{{props.btnText}}</button>
	</view>
</template>

<script setup>
	// 默认样式
	const defaultStyles = {
		width: '100%',
		height: '100%',
		borderRadius: '25px',
		background: '#2b638b'
	}
	// 传入样式
	const props = defineProps({
		btnText: {
			type: String,
			default: '提交'
		},
		btnType: {
			type: String,
			default: 'primary'
		},
		styles: Object
	})
</script>