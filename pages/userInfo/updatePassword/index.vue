<template>
	<view class="update-password pd-12">
		<view class="tips-text mb-16">
			<image class="tips-icon mr-12" src="/static/icon/tips.png"></image>
			密码可以由大写字母、小写字母、数字和特殊符号 '@#$%^&*`~()-+=' 中任意三项组成，且不能少于6位字符。
		</view>
		<view class="update-form pt-16">
			<uni-forms ref="updateForm" :rules="rules" :model="updateFormData" validate-trigger="blur">
				<uni-forms-item class="label-item pb-20" label="" name="oldPassword">
					<uni-easyinput type="password" placeholder="旧密码" prefixIcon="locked"
						v-model="updateFormData.oldPassword" :inputBorder="false" />
				</uni-forms-item>
				<uni-forms-item class="label-item pb-20" label="" name="newPassword">
					<uni-easyinput type="password" placeholder="新密码" prefixIcon="locked"
						v-model="updateFormData.newPassword" :inputBorder="false" />
				</uni-forms-item>
				<uni-forms-item class="label-item pb-20" label="" name="confirmPassword">
					<uni-easyinput type="password" placeholder="确认新密码" prefixIcon="locked"
						v-model="updateFormData.confirmPassword" :inputBorder="false" />
				</uni-forms-item>
				<button class="sbumit-btn" type="primary" @click="submit">确认修改</button>
			</uni-forms>
		</view>
	</view>
</template>

<script setup>
	import {
		ref,
		reactive
	} from 'vue'
	import {
		passwordReg
	} from '@/common/js/constant.js'
	import {
		updatePassword
	} from '@/common/js/api.js'

	// 绑定表单ref
	const updateForm = ref(null)

	// 表单初始数据
	const updateFormData = reactive({
		oldPassword: null,
		newPassword: null,
		confirmPassword: null
	})

	// 校验规则
	const rules = reactive({
		oldPassword: {
			rules: [{
					required: true,
					errorMessage: '旧密码不能为空'
				},
				{
					pattern: passwordReg,
					errorMessage: '密码格式错误'
				}
			]
		},
		newPassword: {
			rules: [{
					required: true,
					errorMessage: '新密码不能为空'
				},
				{
					pattern: passwordReg,
					errorMessage: '密码格式错误'
				},
				{
					validateFunction: function(rule, value, data, callback) {
						const {
							confirmPassword
						} = data
						if (confirmPassword && confirmPassword !== value) {
							uni.showToast({
								title: '确认密码与新密码不一样，请重新修改！'
							})
							callback()
						}
						return true
					}
				}
			]
		},
		confirmPassword: {
			rules: [{
					required: true,
					errorMessage: '密码不能为空'
				},
				{
					pattern: passwordReg,
					errorMessage: '密码格式错误'
				},
				{
					validateFunction: function(rule, value, data, callback) {
						const {
							newPassword
						} = data

						if (!newPassword) {
							uni.showToast({
								title: '请先输入新密码!'
							})
							callback()
						} else if (newPassword !== value) {
							uni.showToast({
								title: '确认密码与新密码不一样，请重新修改！'
							})
							callback()
						}
						return true
					}
				}
			]
		},
	})

	// 提交表单
	const submit = () => {
		let info = uni.getStorageSync('STORAGE_user_info')
		updateForm.value.validate().then(res => {
			const {
				oldPassword,
				newPassword,
				confirmPassword
			} = res
			if (newPassword === oldPassword) {
				uni.showToast({
					title: `新密码与旧密码一样，请重新修改！`
				})
			} else if (newPassword !== confirmPassword) {
				uni.showToast({
					title: `确认密码与新密码不一样，请重新修改！`
				})
			} else {
				let params = {
					'username': info.username,
					'oldpassword': oldPassword,
					'password': newPassword,
					'confirmpassword': confirmPassword
				}
				updatePassword(params).then(res => {
					if (res.code === 200) {
						uni.showToast({
							title: res.message
						})
						// 返回上一页
						uni.navigateBack();
					} else {
						uni.showToast({
							title: res.message
						})
					}
				})
			}
		}).catch(err => {
			console.log('err', err);
		})
	}
</script>

<style lang="scss">
	.update-password {
		.tips-text {
			display: flex;
			align-items: center;

			.tips-icon {
				width: 48px;
				height: 32px;
			}
		}

		.update-form {
			.label-item {
				border-bottom: 1px solid #b9bcc2;
			}

			.sbumit-btn {
				width: 100%;
				color: #417297;
				background: #99cbf9;
			}
		}
	}
</style>