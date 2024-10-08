/*
 *
 *@navData  nav页面数据
 */
export const navData = [{
		title: '叫空载具',
		url: '/pages/emptyVehicle/index',
		icon: "/static/icon/empty_vehicle.png"
	},
	{
		title: '站台控制',
		url: '/pages/platformControl/index',
		icon: "/static/icon/platform_control.png"
	},
	{
		title: '料箱取货',
		url: '/pages/containerPickup/index',
		icon: "/static/icon/container_pickup.png"
	},
	{
		title: '中转回库',
		url: '/pages/transferWarehouse/index',
		icon: "/static/icon/transfer_warehouse.png"
	},
	{
		title: '物料搬送',
		url: '/pages/transportMaterials/index',
		icon: "/static/icon/transport_materials.png"
	},
	{
		title: '新增载具',
		url: '/pages/addVehicle/index',
		icon: "/static/icon/add_vehicle.png"
	},
	{
		title: '任务控制',
		url: '/pages/taskControl/index',
		icon: "/static/icon/task_control.png"
	},
	{
		title: '解除绑定',
		url: '/pages/unbind/index',
		icon: "/static/icon/unbind.png"
	},
	{
		title: '扫码测试',
		url: '/pages/testPage/index',
		icon: "/static/icon/transfer_warehouse.png"
	},
	{
		title: '测试page2',
		url: '/pages/testPageTwo/index',
		icon: "/static/icon/transfer_warehouse.png"
	},
]

/*
 *
 *@accountReg  账号正则
 */
export const accountReg = `^[a-zA-Z0-9_-]{4,16}$`

/*
 *
 *@passwordReg 密码正则
 */
export const passwordReg = `^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[._~!@#$^&*])[A-Za-z0-9._~!@#$^&*]{6,20}$`;

/*
 *
 *@packageInfo 版本信息
 */
export const packageInfo = {
	"appName": "郑州车灯",
	"appVersion": '1.0.0',
	"appDescription": "应用介绍：这是一个PDA手持端应用，用于管理库存，包括货物入库、出库、盘点、叫料等操作。"
}