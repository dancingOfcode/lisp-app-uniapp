<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import '@/uni_modules/uni-scss/index.scss';
	// 公共样式
	@import '@/common/css/common.css';

	#app {
		overflow: hidden;
	}

	// 设置整个项目的背景色
	page {
		font-size: 12px;
		color: #2c3136;
		background-color: #f5f5f5;
	}
</style>