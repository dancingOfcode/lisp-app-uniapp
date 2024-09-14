<template>
	<view class="login-container pt-42">
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<view class="login-form">
			<view class="header mb-16">
				<app-logo />
				<view class="fz-26">郑州车灯</view>
				<view>FinDreams Battery</view>
			</view>
			<uni-forms ref="loginForm" :rules="rules" :model="loginFormData" validate-trigger="blur">
				<uni-forms-item class="pb-12" label="" name="username">
					<uni-easyinput :clearable="false" placeholder="账号" prefixIcon="person"
						v-model="loginFormData.username" />
				</uni-forms-item>
				<uni-forms-item class="pb-12" label="" name="password">
					<uni-easyinput type="password" placeholder="密码" prefixIcon="locked"
						v-model="loginFormData.password" />
				</uni-forms-item>
				<uni-forms-item class="pb-12" label="" name="rememberMe">
					<uni-data-checkbox multiple :localdata="rememberText" selectedColor="#2b638b"
						selectedTextColor="#595e64" v-model="checkbox" />
				</uni-forms-item>
			</uni-forms>
			<button class="sbumit-btn" type="primary" @click="submit">登录</button>
		</view>
	</view>
</template>

<script setup>
	import {
		ref,
		reactive,
		onMounted
	} from 'vue'
	import {
		accountReg,
		passwordReg
	} from '../../common/js/constant';
	import {
		signIn,
		getStationSelector
	} from '@/common/js/api.js'
	import {
		formatAgvData
	} from '@/common/js/utils.js'

	const rememberText = reactive([{
		text: '记住密码',
		value: 1
	}])
	// 绑定表单ref
	const loginForm = ref(null)
	// 表单初始数据
	const loginFormData = ref({
		username: '',
		password: ''
	})
	const checkbox = ref([])
	// 校验规则
	const rules = reactive({
		username: {
			rules: [{
					required: true,
					errorMessage: '账号不能为空'
				},
				{
					pattern: accountReg,
					errorMessage: '账号格式错误，支持4到16位，由（字母，数字，下划线，减号）组成 。'
				}
			]
		},
		password: {
			rules: [{
					required: true,
					errorMessage: '密码不能为空'
				},
				{
					pattern: passwordReg,
					errorMessage: '密码格式错误'
				}
			]
		}
	})

	onMounted(() => {
		let loginInfo = uni.getStorageSync('STORAGE_sign_in_state')
		if (loginInfo.rememberMe) {
			loginFormData.value = {
				username: loginInfo.username,
				password: loginInfo.password
			};
			checkbox.value = [loginInfo.rememberMe]
		} else {
			loginFormData.value = {
				username: '',
				password: ''
			};
			checkbox.value = []
		}
	})

	// 提交表单
	const submit = () => {
		loginForm.value.validate().then(async (formData) => {
			let params = {
				username: formData.username,
				password: formData.password
			}
			let res = await signIn(params)
			uni.showToast({
				title: res.message
			})
			if (res.code === 200) {
				const {
					token,
					userInfo,
					sysAllDictItems
				} = res.result
				uni.navigateTo({
					url: '/pages/nav/index'
				});
				// 存储token
				uni.setStorage({
					key: "STORAGE_token",
					data: token
				});
				// 存储用户信息
				uni.setStorage({
					key: "STORAGE_user_info",
					data: userInfo
				});
				// 存储字典
				uni.setStorage({
					key: "STORAGE_sys_dict",
					data: sysAllDictItems
				});
				// 持久化登录状态
				uni.setStorage({
					key: "STORAGE_sign_in_state",
					data: {
						"username": formData.username,
						"password": formData.password,
						"rememberMe": checkbox.value[0]
					}
				});
				// 处理全局数据 获取站台列表
				getStationSelector().then(res => {
					if (res.code === 200) {
						// 站台列表
						uni.setStorage({
							key: "STORAGE_station_list",
							data: formatAgvData(res.result)
						});
					}
				}).catch(err => {
					uni.showToast({
						title: err.message
					})
				});
			}
		}).catch(err => {
			console.log('err', err);
		})
	}
</script>

<style lang="scss">
	.login-container {
		width: 100vw;
		height: 100vh;
		overflow: hidden;

		.status_bar {
			height: var(--status-bar-height);
			width: 100%;
		}

		.login-form {
			padding: 12px;
			display: flex;
			overflow: hidden;
			flex-direction: column;
			height: calc(100% - var(--status-bar-height));

			.header {
				width: 100%;
				display: flex;
				color: #292e33;
				flex-direction: column;
				justify-content: center;
				align-items: center;

				.logo {
					width: 100px;
					height: 100px;
				}
			}

			.sbumit-btn {
				width: 100%;
				color: #417297;
				background: #99cbf9;
			}
		}
	}
</style>