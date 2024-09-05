<template>
	<view class="login-container pt-42">
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<view class="login-form">
			<view class="header mb-16">
				<image class="logo" src="/static/image/logo.jpg"></image>
				<view class="fz-26">弗迪电池</view>
				<view>FinDreams Battery</view>
			</view>
			<uni-forms ref="loginForm" :rules="rules" :model="loginFormData">
				<uni-forms-item class="pb-12" label="" name="account">
					<uni-easyinput v-model="loginFormData.account" :clearable="false" placeholder="账号"
						prefixIcon="person" />
				</uni-forms-item>
				<uni-forms-item class="pb-12" label="" name="password">
					<uni-easyinput type="password" iconColor="red" v-model="loginFormData.password" placeholder="密码"
						prefixIcon="locked" />
				</uni-forms-item>
				<uni-forms-item class="pb-12" label="" name="remember">
					<uni-data-checkbox v-model="loginFormData.remember" multiple :localdata="rememberText"
						selectedColor="#2b638b" selectedTextColor="#595e64" />
				</uni-forms-item>
			</uni-forms>
			<button class="sbumit-btn" type="primary" @click="submit">登录</button>
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
				title: `登录成功！`
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