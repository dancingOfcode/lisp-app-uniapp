<template>
	<view class="empty-vehicle pd-12">
		<app-select class="mb-16" title="叫料站台" placeholder="请选择叫料站台" popupTitle="请选择叫料站台" :dataSource="dataTree"
			:clearIcon="false" scanIcon="true" @change="onchange" @scanClick="onScanClick" />
		<app-select title="载具类型" placeholder="请选择载具类型" popupTitle="请选择载具类型" :dataSource="dataTree" :clearIcon="false"
			@change="onchange" />
		<app-btn :styles="{position: 'absolute', width: `calc(100% - 24px)`, bottom:'24px'}" @click="btnClick" />
	</view>
</template>

<script setup>
	const dataTree = [{
		text: "一年级",
		value: "1-0",
		children: [{
				text: "1.1班",
				value: "1-1"
			},
			{
				text: "1.2班",
				value: "1-2"
			}
		]
	}, {
		text: "二年级",
		value: "2-0",
		children: [{
				text: "2.1班",
				value: "2-1"
			},
			{
				text: "2.2班",
				value: "2-2"
			}
		]
	}, {
		text: "三年级",
		value: "3-0",
		disable: true
	}]

	// 扫码
	const onScanClick = () => {
		console.log('onScanClick')
	}

	// onchange
	const onchange = e => {
		console.log(e)
	}

	// 提交
	const btnClick = () => {
		console.log('btnClick')
	}
</script>

<style lang="scss">
	.empty-vehicle {
		position: relative;
		height: calc(100vh - 44px);
	}
</style>