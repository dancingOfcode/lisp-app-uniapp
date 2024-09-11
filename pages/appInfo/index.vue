<template>
	<view class="app-info flex-h  pd-12 pt-42 fz-14">
		<app-logo />
		<view class="mt-12">版本号 1.0.3</view>
		<view class="introduction mt-12">
			<view class="nowrap mr-8">应用介绍</view>
			<view>这是一个PDA手持端应用，用于管理库存，包括货物入库、出库、盘点、叫料等操作。</view>
		</view>
		<view class="nav-section mt-16 pd-12">
			<view class="item">
				<view>检查更新</view>
				<uni-icons type="right" size="22" @click="openDialog('update')"></uni-icons>
			</view>
			<view class="item mt-24">
				<view>许可协议</view>
				<uni-icons type="right" size="22" @click="openDialog('license')"></uni-icons>
			</view>
		</view>
		<!-- 检查更新弹窗 -->
		<uni-popup ref="updateDialog">
			<view class="update-content">
				<uni-popup-dialog type="info" cancelText="暂不更新" confirmText="立即更新" title="提示"
					content="检查到新版本 [v1.0.4], 是否更新？" @confirm="onUpdate"></uni-popup-dialog>
			</view>
		</uni-popup>
		<!-- 许可协议弹窗 -->
		<uni-popup ref="licenseDialog">
			<view class="popup-content pd-16">
				<view class="popup-header">
					<app-logo width="50" height="50" />
					<view class="ml-12">
						<view class="title mb-8">郑州车灯</view>
						<view>1.0.3</view>
					</view>
				</view>
				<view class="mt-12">应用介绍：这是一个PDA手持端应用，用于管理库存，包括货物入库、出库、盘点、叫料等操作。</view>
				<view class="footer">
					<view @click="openLicense">查看许可</view>
					<view class="ml-12" @click="closeDialog()">关闭</view>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue'

	const updateDialog = ref(null) // 更新ref
	const licenseDialog = ref(null) // 协议ref
	const isLatest = ref(false) // 是否最新版本

	// 许可协议
	const openDialog = type => {
		if (type === 'license') {
			licenseDialog.value.open()
		} else {
			if (isLatest.value) {
				uni.showToast({
					title: '当前为最新版本！'
				})
			} else {
				updateDialog.value.open()
			}
		}
	}

	// 关闭弹窗
	const closeDialog = () => {
		licenseDialog.value.close()
	}

	// 版本更新
	const onUpdate = () => {
		console.log('onUpdate')
	}

	// 查看许可
	const openLicense = () => {
		licenseDialog.value.close()
		uni.navigateTo({
			url: 'license/index'
		})
	}
</script>

<style lang="scss">
	.app-info {
		.introduction {
			width: 100%;
			display: flex;
		}

		.nav-section {
			width: 100%;
			border-radius: 10px;
			background: #ecf1f9;

			.item {
				display: flex;
				font-weight: bold;
				justify-content: space-between;
			}
		}

		.update-content {
			top: 125px;
			position: relative;
			border-radius: 12px;
			border: 1px solid #b9b9b9;
		}

		.popup-content {
			top: 85px;
			width: 260px;
			height: 220px;
			position: relative;
			border-radius: 15px;
			background: #e0e8f2;

			.popup-header {
				width: 100%;
				display: flex;

				.title {
					font-weight: bold;
				}
			}

			.footer {
				display: flex;
				color: #5480a1;
				position: absolute;
				bottom: 24px;
				right: 24px;
			}
		}
	}
</style>