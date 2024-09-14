// 项目服务器地址
const baseUrl = 'http://10.79.89.9:8040/ilsp';

/*
 * 全局请求封装
 * @param path 请求路径
 * @param method 请求类型(GET/POST等)
 * @oaram data 请求体数据
 * @param loading 请求未完成是是否显示加载中，默认为true
 */

export default (path, method, data, loading = true) => {
	// 获取存储token
	const token = uni.getStorageSync("STORAGE_token");

	// 无token跳转至登录页
	if (!token && path !== '/sys/login') {
		uni.showToast({
			title: 'Token失效，请重新登录!'
		})
		uni.navigateTo({
			url: '/pages/login/index'
		})
		return
	}

	// 展示loading加载中
	if (loading) {
		uni.showLoading({
			title: "加载中",
			mask: true
		});
	};

	// 处理请求
	return new Promise((resolve, reject) => {
		uni.request({
			url: baseUrl + path,
			method,
			data,
			header: {
				"Authorization": token,
				"X-Access-Token": token,
				"content-type": "application/json"
			},
			success: (response) => {
				if (response.statusCode === 401) {
					reject(response.data)
					uni.navigateTo({
						url: '/pages/login/index'
					})
				}
				if (response.statusCode === 200) {
					resolve(response.data);
				} else {
					reject(response.errMsg)
				}
			},
			fail: (err) => {
				uni.showToast({
					icon: "none",
					title: '服务响应失败'
				});
				reject(err);
			},
			complete() {
				loading && uni.hideLoading();
			}
		})
	})
}