<template>
	<view class="update-password pd-12">
		<view class="tips-text mb-16">
			<image class="tips-icon mr-12" src="/static/icon/tips.png"></image>
			密码可以由大写字母、小写字母、数字和特殊符号 '@#$%^&*`~()-+=' 中任意三项组成，且不能少于6位字符。
		</view>
		<view class="update-form pt-16">
			<uni-forms ref="updateForm" :rules="rules" :model="updateFormData">
				<uni-forms-item class="label-item pb-12" label="" name="oldPassword">
					<uni-easyinput type="password" iconColor="red" v-model="updateFormData.oldPassword"
						placeholder="旧密码" prefixIcon="locked" />
				</uni-forms-item>
				<uni-forms-item class="label-item pb-12" label="" name="newPassword">
					<uni-easyinput type="password" iconColor="red" v-model="updateFormData.newPassword"
						placeholder="新密码" prefixIcon="locked" />
				</uni-forms-item>
				<uni-forms-item class="label-item pb-12" label="" name="confirmPassword">
					<uni-easyinput type="password" iconColor="red" v-model="updateFormData.confirmPassword"
						placeholder="确认新密码" prefixIcon="locked" />
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
	// 绑定表单ref
	const updateForm = ref(null)
	// 表单初始数据
	const updateFormData = reactive({
		oldPassword: '',
		newPassword: '',
		confirmPassword: '',
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
			.label-item{
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