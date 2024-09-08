<template>
	<view class="app-logo">
		<image :style="styles" src="/static/image/logo.jpg" />
	</view>
</template>

<script setup>
	const props = defineProps({
		width: {
			type: Number,
			default: 100
		},
		height: {
			type: Number,
			default: 100
		},
		borderRadius: {
			type: String,
			default: 'unset'
		}
	})

	const styles = {
		width: props.width + 'px',
		height: props.height + 'px',
		borderRadius: props.borderRadius
	}
</script>