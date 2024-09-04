<template>
	<view class="login-container">
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<view class="login-form">
			<uni-forms ref="loginForm" :rules="rules" :model="loginFormData" label-position="top">
				<uni-forms-item class="label-item" label="" name="account">
					<uni-easyinput class="label-form" v-model="loginFormData.account" placeholder="账号"
						prefixIcon="person" />
				</uni-forms-item>
				<uni-forms-item class="label-item" label="" name="password">
					<uni-easyinput class="label-form" v-model="loginFormData.password" placeholder="密码"
						prefixIcon="locked" />
				</uni-forms-item>
				<uni-forms-item class="label-item" label="" name="remember">
					<uni-data-checkbox class="label-form" v-model="loginFormData.remember" multiple
						:localdata="rememberText" />
				</uni-forms-item>
			</uni-forms>
			<button class="submit-btn" type="primary" @click="submit">登录</button>
		</view>
	</view>
</template>

<script setup>
	import {
		ref,
		reactive
	} from 'vue'
	const rememberText = reactive([{
		text: '记住密码',
		value: 1
	}])
	// 绑定表单ref
	const loginForm = ref(null)
	// 表单初始数据
	const loginFormData = reactive({
		account: '',
		password: '',
		remember: []
	})
	// 校验规则
	const rules = reactive({
		account: {
			rules: [{
				required: true,
				errorMessage: '账号不能为空'
			}]
		},
		password: {
			rules: [{
				required: true,
				errorMessage: '密码不能为空'
			}]
		}
	})

	// 提交表单
	const submit = () => {
		loginForm.value.validate().then(res => {
			console.log('success', res);
			uni.showToast({
				title: `校验通过`
			})
			//在起始页面跳转到test.vue页面并传递参数
			uni.navigateTo({
				url: '/pages/nav/index'
			});
		}).catch(err => {
			console.log('err', err);
		})
	}
</script>

<style lang="scss">
	.login-container {
		width: 100vw;
		height: 100vh;

		.status_bar {
			height: var(--status-bar-height);
			width: 100%;
		}

		.login-form {
			padding: 12px;
			display: flex;
			flex-direction: column;
			height: calc(100% - var(--status-bar-height));
		}

		.submit-btn {
			width: 100%;
		}
	}

	.label-item {
		padding-bottom: 12px;

		.no-label {
			position: absolute !important;
		}
	}
</style>