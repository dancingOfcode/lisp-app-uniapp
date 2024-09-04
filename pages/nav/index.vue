<template>
	<view class="nav-container">
		<uni-nav-bar class="custom-bar" shadow left-icon="bars" title="郑州车灯" @clickLeft="showDrawer" />
		<view class="section">
			<view class="section-item" v-for="item in navData">
				<image class="icon" :src="item.icon"></image>
				<view>{{item.title}}</view>
			</view>
		</view>
	</view>
	<uni-drawer ref="showLeft" mode="left" :width="320">
		<view class="drawer-content">
			<view class="header">
				<image class="logo" src="/static/image/logo.jpg"></image>
				<view>超级管理员</view>
				<view>7857950</view>
			</view>
			<view class="section">
				<view>个人信息</view>
				<view>关于APP</view>
			</view>
			<button class="footer">退出登录</button>
		</view>
	</uni-drawer>
</template>

<script setup>
	import {
		ref,
		onMounted
	} from 'vue'
	import {
		navData
	} from '@/common/constant.js'

	const showLeft = ref(null)

	// 打开抽屉
	const showDrawer = () => {
		showLeft.value.open();
	}

	// 关闭抽屉
	const closeDrawer = () => {
		showLeft.value.close();
	}

	onMounted(() => {
		console.log(navData)
	})
</script>

<style lang="scss">
	.nav-container {
		.custom-bar {
			.uni-navbar__content {
				border: none;
			}
		}

		.section {
			padding: 12px;
			width: 100%;
			display: flex;
			flex-wrap: wrap;

			.section-item {
				display: flex;
				width: 45%;
				height: 88px;
				color: #467699;
				border-radius: 5px;
				flex-direction: column;
				margin-bottom: 12px;
				background: #dee6f0;
				align-items: center;
				justify-content: center;

				&:nth-child(odd) {
					margin-right: 12px;
				}

				.icon {
					width: 30px;
					height: 28px;
					margin-bottom: 8px;
				}
			}
		}
	}
</style>