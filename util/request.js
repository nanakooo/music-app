import auth from './auth.js'
import baseURL from './environment.js'

/*
 * create by Qiang
 */
export function request(params = {method, url, data, needToken}) {
  return new Promise(function (resolve, reject) {
		let header
		if (params.needToken === false){
			header = {    //定义请求头
			  'content-type': 'application/json'
			}
		} else {
			header = {    //定义请求头
			  'content-type': 'application/json',
				'token': auth.getToken()
			}
		}
    uni.request({
      url: baseURL + params.url,
      method: params.method,
      data: params.data ? JSON.stringify(params.data) : null,
      header: header,
			//请求成功
      success(res) {
        //判断状态码---errCode状态根据后端定义来判断
				if (res.data.code ==200) {
					resolve(res);
				} else {
					if (res.data.status === '-6'){
						uni.showModal({
							content: '登录过期！请重新登录',
							success: (res) => {
								if (res.confirm || res.cancel) {
									uni.reLaunch({
										url: '/pages/login/index'
									})
								}
							}
						})
					} else {
						uni.showModal({
							content:res.data.msg ? res.data.msg : '发生异常'
						})
						reject(new Error("请求错误"))
					}
				}
      },
      fail(err) {
        //请求失败
        reject(err)
      }
    })
  })
}