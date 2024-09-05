<template>
	<view class="nav-container">
		<uni-nav-bar class="custom-bar" shadow left-icon="bars" title="郑州车灯" backgroundColor="#99ccfa"
			@clickLeft="showDrawer" />
		<view class="section pd-12">
			<view class="section-item mr-12 mb-12 pd-12" v-for="item in navData" @click="navClick(item.url)">
				<image class="icon mb-12" :src="item.icon"></image>
				<view>{{item.title}}</view>
			</view>
		</view>
	</view>
	<uni-drawer ref="showLeft" mode="left" :width="300">
		<view class="drawer-content">
			<view class="drawer-header pd-16">
				<image class="logo" src="/static/image/logo.jpg"></image>
				<view class="mt-12 mb-8 fz-16">超级管理员</view>
				<view class="fz-14">7857950</view>
			</view>
			<view class="drawer-section pd-16">
				<view class="fz-18 mb-16" @click="navClick('/pages/userInfo/index')">个人信息</view>
				<view class="fz-18"  @click="navClick('/pages/appInfo/index')">关于APP</view>
			</view>
			<button class="quit-btn" @click="quitLogin">退出登录</button>
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
	} from '@/common/js/constant.js'

	const showLeft = ref(null)

	// 导航
	const navClick = url => {
		console.log(url)
		uni.navigateTo({
			url
		})
	}

	// 打开抽屉
	const showDrawer = () => {
		showLeft.value.open();
	}

	// 关闭抽屉
	const closeDrawer = () => {
		showLeft.value.close();
	}

	// 登出
	const quitLogin = () => {
		uni.navigateTo({
			url: '/pages/login/index'
		})
	}

	onMounted(() => {
		console.log(navData)
	})
</script>

<style lang="scss">
	.nav-container {
		.section {
			width: 100%;
			display: flex;
			flex-wrap: wrap;

			.section-item {
				display: flex;
				align-items: center;
				flex-direction: column;
				justify-content: center;
				color: #467699;
				border-radius: 5px;
				background: #dee6f0;
				width: calc(33.33% - 8px);

				&:nth-child(3n) {
					margin-right: unset;
				}

				.icon {
					width: 30px;
					height: 28px;
				}
			}
		}
	}

	.drawer-content {
		display: flex;
		width: 100%;
		height: 100vh !important;
		flex-direction: column;

		.drawer-header {
			display: flex;
			width: 100%;
			height: 135px;
			color: #fff;
			background: #2b638b;
			flex-direction: column;
			justify-content: center;

			.logo {
				width: 56px;
				border-radius: 50%;
			}
		}

		.drawer-section {
			width: 100%;
			height: calc(100vh - 135px);
			background: #ecf1f9;
		}

		.quit-btn {
			bottom: 32px;
			font-weight: bold;
			position: absolute;
			align-self: center;
			background: #cbddf0;
			width: calc(100% - 24px);
		}
	}
</style>