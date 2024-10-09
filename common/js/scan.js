let mainActivity; // 运行时的主要活动activity
let intentFilter; // 实例化的意图过滤器
let broadcastReceiver; // 广播接收器
let repeatFlag = false;

// 初始化定义广播
const initScan = (onReceiveCallback) => {
	// 获取Android主Activity
	mainActivity = plus.android.runtimeMainActivity();
	// 获取Android意图类
	let Intent = plus.android.importClass('android.content.Intent');
	// 实例化意图
	let intent = new Intent();
	// 定义意图，模拟按下L键，L键实际上是打开激光的物理键映射，由厂商提供
	intent.setAction("com.symbol.datawedge.api.ACTION");
	// 广播这个意图
	mainActivity.sendBroadcast(intent);
	// 获取Android意图过滤类
	let IntentFilter = plus.android.importClass('android.content.IntentFilter');
	// 实例化意图过滤
	intentFilter = new IntentFilter();
	// 获取扫码成功的意图广播
	intentFilter.addAction("com.fdbatt.ilsp_app.SCAN_EVENT");
	broadcastReceiver = plus.android.implements('io.dcloud.feature.internal.reflect.BroadcastReceiver', {
		onReceive: function(context, intent) {
			plus.android.importClass(intent);
			let code = intent.getStringExtra("com.symbol.datawedge.data_string");
			// 成功输出扫码内容
			console.log(code);
			// 防重复
			if (repeatFlag) return;
			repeatFlag = true;
			setTimeout(function() {
				repeatFlag = false;
			}, 150);
			// 到这里扫描成功,获取结果，可以调用自己的业务逻辑
			onReceiveCallback && onReceiveCallback(code);
		}
	});
}

// 开始广播监听扫码
const startScan = () => {
	mainActivity.registerReceiver(broadcastReceiver, intentFilter);
}

// 停止广播监听扫码
const stopScan = () => {
	mainActivity.unregisterReceiver(broadcastReceiver);
}

export const androidScan2 = {
	initScan,
	startScan,
	stopScan,
};