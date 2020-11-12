const BASE_URL='https://localhost:3000'
export const myRequest = ()=>{
	return new Promise((resolve,reject)=>{
		uni.request({
			url:BASE_URL+options.url,
			method:options.method || 'GET',
			data:options.data|| {},
			success:(res)=>{
				console.log(res)
				if(res.data.code !==200) {
					return uni.showToast({
						title:"获取数据失败"
					})
				}
				resolve(res)
				},
			fail: (err)=>{
				 uni.showToast({
					title:"获取数据失败"
				})
				reject(err)
			}
		})
	})
}
