<template>
	<view class="user-info pt-12 fz-14">
		<view class="item pd-16">
			<view class="left">姓名</view>
			<view class="right">{{userInfo.realname}}</view>
		</view>
		<view class="item pd-16">
			<view class="left">手机号码</view>
			<view class="right">{{userInfo.phone}}</view>
		</view>
		<view class="item pd-16">
			<view class="left">工号</view>
			<view class="right">{{userInfo.workNo}}</view>
		</view>
		<view class="item pd-16">
			<view class="left">账号 </view>
			<view class="right">{{userInfo.username}}</view>
		</view>
		<view class="item pd-16">
			<view class="left">部门</view>
			<view class="right">{{userInfo.orgCodeTxt}}</view>
		</view>
		<button class="update-password mt-16 fz-18" @click="changePassword">
			<image class="update-icon mr-8" src="/static/icon/updateIcon.png"></image>
			修改密码
		</button>
	</view>
</template>

<script setup>
	import {
		ref,
		onMounted
	} from 'vue';
	import {
		isEmpty
	} from '@/common/js/utils';

	const userInfo = ref({})

	onMounted(() => {
		let info = uni.getStorageSync('STORAGE_user_info') || null
		if (!isEmpty(info)) userInfo.value = info
	})

	// 修改密码
	const changePassword = () => {
		uni.navigateTo({
			url: 'updatePassword/index'
		})
	}
</script>

<style lang="scss">
	.user-info {
		.item {
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: space-between;
			border-bottom: 1px solid #d1d4db;

			.left,
			.right {
				width: 50%;
			}

			.right {
				display: flex;
				white-space: wrap;
				letter-spacing: .5px;
				word-break: break-all;
				justify-content: flex-end;
			}
		}

		.update-password {
			display: flex;
			color: #497699;
			border: unset;
			font-weight: bold;
			background: #cbddf0;
			border-radius: 20px;
			align-items: center;
			justify-content: center;
			width: calc(100% - 24px);

			.update-icon {
				width: 24px;
				height: 30px;
			}
		}
	}
</style>