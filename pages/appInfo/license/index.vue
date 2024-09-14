<template>
	<view class="license pd-12">
		<view class="header flex-h mt-24">
			<view class="mb-12 fz-16 bold">许可协议</view>
			<app-logo width="42" height="42" />
			<view class="version mt-12 mb-16">{{packageInfo.appVersion}}</view>
			<view class="fz-14">Powered by uni-app</view>
		</view>
		<view class="list-content mt-24 fz-14">
			<view class="mb-12" v-for="(item,index) in licenseList" key="idnex">
				<view class="name mb-8">{{item.name}}</view>
				<view class="num">{{item.num}} 份许可</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		packageInfo
	} from '@/common/js/constant';
	const licenseList = [{
		name: '_fe_analyzer_shared',
		num: 1
	}, {
		name: 'abseil-cpp',
		num: 2
	}, {
		name: 'accessability',
		num: 15
	}, {
		name: 'analyzer',
		num: 1
	}, {
		name: 'angle',
		num: 32
	}, {
		name: '_fe_analyzer_shared',
		num: 1
	}, {
		name: 'abseil-cpp',
		num: 2
	}, {
		name: 'accessability',
		num: 15
	}, {
		name: 'analyzer',
		num: 1
	}, {
		name: 'angle',
		num: 32
	}, {
		name: 'abseil-cpp',
		num: 2
	}, {
		name: 'accessability',
		num: 15
	}, {
		name: 'analyzer',
		num: 1
	}, {
		name: 'angle',
		num: 32
	}]
</script>

<style lang="scss">
	.license {
		width: 100%;
		height: calc(100vh - 44px);
		overflow-y: auto;

		.name {
			color: #192127;
		}

		.num {
			color: #50545b;
		}
	}
</style>