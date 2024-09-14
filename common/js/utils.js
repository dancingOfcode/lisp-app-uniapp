/*
 *
 *@isEmpty 判空
 */
export const isEmpty = (obj) => {
	if (typeof obj === "undefined" || obj === null || obj === "" || obj === false || obj === "{}") {
		return true;
	} else {
		return false;
	}
}

/*
 *
 *@formatAgvData 处理agv站台树状结构数据
 */

export const formatAgvData = (data = []) => {
	if (isEmpty(data)) return
	return data.map(item => {
		if (item['nextLevel']) {
			return {
				text: item[Object.keys(item)[0]],
				value: item[Object.keys(item)[0]],
				children: formatAgvData(item['nextLevel'])
			}
		} else {
			return {
				text: item['stationName'],
				value: item['stationCode']
			}
		}
	})
}