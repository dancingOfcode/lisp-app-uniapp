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
				<app-logo width="56" height="56" borderRadius="50%" />
				<view class="mt-12 mb-8 fz-16">{{userInfo.realname}}</view>
				<view class="fz-14">{{userInfo.workNo}}</view>
			</view>
			<view class="drawer-section pd-16">
				<view class="fz-18 mb-16" @click="navClick('/pages/userInfo/index')">个人信息</view>
				<view class="fz-18" @click="navClick('/pages/appInfo/index')">关于APP</view>
			</view>
			<app-btn
				:styles="{position: 'absolute', width: `calc(100% - 24px)`, bottom:'24px', left:'12px', color:'#2d4556', background:'#cbddf0'}"
				btnText="退出登录" @click="quitLogin" />
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
	import {
		isEmpty
	} from '@/common/js/utils.js'
	import {
		signOut
	} from '@/common/js/api.js'

	const showLeft = ref(null)
	const userInfo = ref({})

	// 导航
	const navClick = url => {
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
		signOut().then(res => {
			if (res.code === 200) {
				uni.showToast({
					title: res.message
				})
				uni.navigateTo({
					url: '/pages/login/index'
				})
			} else {
				uni.showToast({
					title: res.message || '登出失败！'
				})
			}
		})
	}

	onMounted(() => {
		let info = uni.getStorageSync('STORAGE_user_info') || null
		if (!isEmpty(info)) userInfo.value = info
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
		}

		.drawer-section {
			width: 100%;
			height: calc(100vh - 135px);
			background: #ecf1f9;
		}
	}
</style>