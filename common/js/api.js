import request from "./http";

/*
 *
 * 用户权限
 * @signIn 登入
 * @signOut 登出
 * @getUserInfo 获取当前用户信息
 * @updatePassword 更新用户密码
 */
export const signIn = (params) => request('/sys/login', 'POST', params);

export const signOut = () => request('/sys/logout', 'GET');

export const getUserInfo = (params) => request('/sys/user/getUserInfo', 'GET', params);

export const updatePassword = (params) => request('/sys/user/updatePassword', 'PUT', params);

/*
 *
 * 公共接口
 * @getStationInfoList 获取站台列表
 * @getStationSelector agv站台选择器查询
 */

export const getStationInfoList = () => request('/wcs/conveyorStackerStation/getStationInfoList', 'GET');

export const getStationSelector = () => request('/wcs/agvStation/stationSelector', 'GET');

/*
 *
 * 公共接口
 * @callEmptyVehicle 叫空载具
 */

export const callEmptyVehicle = params => request('/wcs/api/app/rack/outOrder', 'POST', params);

/*
 *
 * @clearStation 站台清空
 * @stationOccupy 站台占用
 */

export const clearStation = params => request('/wcs/agvStation/clearStation', 'PUT', params);

export const stationOccupy = params => request('/wcs/agvStation/stationOccupy', 'PUT', params);

/*
 *
 * @pickingUpGoods 料箱取货
 */

export const pickingUpGoods = (params) => request('/api/pickingUpGoods', 'GET', params);

/*
 *
 * @transferWarehouse 中转回库
 */

export const transferWarehouse = (params) => request('/wcs/api/app/rack/applyCache', 'POST', params);

/*
 *
 * @transportMaterials 物料搬送
 */

export const transportMaterials = (params) => request('/api/vehicleTransport', 'POST', params);

/*
 *
 * @addTray 新增载具
 */

export const addTray = (params) => request('/wcs/baseTray/addTray', 'POST', params);

/*
 *
 * @taskCancel 任务取消
 * @taskContinue 任务继续
 * @taskFinished 任务完成
 */

export const taskCancel = (params) => request('/api/robot/controller/task/modify', 'GET', params);

export const taskContinue = (params) => request('/api/robot/controller/task/continue', 'GET', params);

export const taskFinished = (params) => request('/api/robot/controller/task/manual', 'GET', params);

/*
 *
 * @trayUnBind 解除绑定
 */

export const trayUnBind = (params) => request('/api/unBind', 'GET', params);