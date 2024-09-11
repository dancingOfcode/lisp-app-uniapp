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
	}
]

/*
 *
 *@accountReg  密码正则
 */
export const accountReg = `^[a-zA-Z0-9_-]{4,16}$`

/*
 *
 *@passwordReg 密码正则
 */
export const passwordReg = `^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[._~!@#$^&*])[A-Za-z0-9._~!@#$^&*]{6,20}$`;

export const platformTree = [{
	text: "料车库",
	value: "1",
	children: [{
			text: "料车库11",
			value: "1-1",
			children: [{
					text: "料车库111",
					value: "1-1-1"
				},
				{
					text: "料车库112",
					value: "1-1-2"
				}
			]
		},
		{
			text: "料车库12",
			value: "1-2",
			children: [{
					text: "料车库121",
					value: "1-2-1"
				},
				{
					text: "料车库122",
					value: "1-2-2"
				}
			]
		}
	]
}, {
	text: "料箱库",
	value: "2",
	children: [{
			text: "料箱库21",
			value: "2-1",
			children: [{
					text: "料箱库211",
					value: "2-1-1"
				},
				{
					text: "料箱库212",
					value: "2-1-2"
				}
			]
		},
		{
			text: "料箱库22",
			value: "2-2",
			children: [{
					text: "料箱库221",
					value: "2-2-1"
				},
				{
					text: "料箱库222",
					value: "2-2-2"
				}
			]
		}
	]
}]

export const vehicleTree = [{
	text: '料车',
	value: 'a'
}, {
	text: '料箱',
	value: 'b'
}, {
	text: '中转车',
	value: 'c'
}]

export const transferCarTree = [{
	text: '4格中转车',
	value: 'a'
}, {
	text: '9格中转车',
	value: 'b'
}]