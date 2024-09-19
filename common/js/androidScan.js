// pda的特色设置中需要关闭-禁止将扫描按键的键值传递给应用的开关
let mainActivity; // 运行时的主要活动activity
let intentFilter; // 实例化的意图过滤器
let broadcastReceiver; // 广播接收器
let repeatFlag = false;

// 初始化定义广播
const init = (onReceiveCallback) => {
	// 获取activity
	mainActivity = plus.android.runtimeMainActivity();
	// 导入类
	const IntentFilter = plus.android.importClass('android.content.IntentFilter');
	//实例化一个意图过滤器
	intentFilter = new IntentFilter();
	// addAction添加动作, com.dwexample.ACTION为设备配置的广播名称
	intentFilter.addAction("com.dwexample.ACTION");
	// BroadcastReceiver: 广播接收器接口:implements 实现接口  onReceive实现接口的方法
	broadcastReceiver = plus.android.implements('io.dcloud.feature.internal.reflect.BroadcastReceiver', {
		onReceive: function(context, intent) {
			plus.android.importClass(intent);
			// 扫描设置的开发者选项--手持机pda的广播键值 com.motorolasolutions.emdk.datawedge.data_string
			const code = intent.getStringExtra("com.motorolasolutions.emdk.datawedge.data_string");
			//防重复
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
const start = () => {
	mainActivity.registerReceiver(broadcastReceiver, intentFilter);
}

// 停止广播监听扫码
const stop = () => {
	mainActivity.unregisterReceiver(broadcastReceiver);
}

// 主动触发扫描
const triggerScan = () => {
	// 获取Android意图类
	let Intent = plus.android.importClass("android.content.Intent");
	// 实例化意图  
	let intent = new Intent();
	// 定义意图，由厂商提供(此处设置为斑马PDA)
	intent.setAction("com.symbol.datawedge.api.ACTION");
	intent.putExtra("com.symbol.datawedge.api.ENABLE_DATAWEDGE", true);  
	// 广播这个意图
	mainActivity.sendBroadcast(intent);
}

export const androidScan = {
	init,
	start,
	stop,
	triggerScan
};