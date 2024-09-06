<template>
	<view>
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
		}
	})

	const styles = {
		width: props.width + 'px',
		height: props.height + 'px',
	}
</script>